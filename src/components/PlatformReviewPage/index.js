import {Component} from 'react'

import Card from '../Card'
import Header from '../Header'
import LeftMenu from '../LeftMenu'
import LoaderThreeDots from '../LoaderThreeDots'
import AcceptAndObserveHeading from '../AcceptAndObserveHeading'

import {
  PlatformReviewMainContainer,
  CardContainer,
  FailureContainer,
  FailureImage,
  SomethingWrongHeading,
  RetryButton,
  CardUlElement,
} from './styledComponents'

const componentApiStatus = {
  initial: 'INITIAL',
  inprogress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class PlatformReviewPage extends Component {
  state = {
    cardApiStatus: componentApiStatus.initial,
    cardData: [],
  }

  componentDidMount() {
    this.getUserData()
  }

  getUserData = async () => {
    this.setState({cardApiStatus: componentApiStatus.inprogress})

    const Url =
      'https://y5764x56r9.execute-api.ap-south-1.amazonaws.com/mockAPI/posts'
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(Url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.map(eachItem => ({
        commentsCount: eachItem.comments_count,
        postContent: eachItem.post_content,
        postId: eachItem.post_id,
        postedAt: eachItem.posted_at,
        profilePic: eachItem.posted_by.profile_pic,
        userId: eachItem.posted_by.user_id,
        userName: eachItem.posted_by.username,
        title: eachItem.title,
        tag1: eachItem.tags.length > 0 ? eachItem.tags[0].tag_name : null,
        tag2: eachItem.tags.length > 0 ? eachItem.tags[1].tag_name : null,
        isApproved: 'INITIAL',
      }))
      this.setState({
        cardData: updatedData,
        cardApiStatus: componentApiStatus.success,
      })
      localStorage.setItem('tableData', JSON.stringify(updatedData))
    } else {
      this.setState({
        cardApiStatus: componentApiStatus.failure,
      })
    }
  }

  updateUser = async (name, userId, postId) => {
    const {cardData} = this.state
    const modifyDataToInprogress = cardData.map(eachItem => {
      if (eachItem.postId === postId) {
        return {...eachItem, isApproved: 'IN_PROGRESS'}
      }
      return eachItem
    })
    this.setState({cardData: modifyDataToInprogress})
    localStorage.setItem('tableData', JSON.stringify(modifyDataToInprogress))
    const Url =
      'https://y5764x56r9.execute-api.ap-south-1.amazonaws.com/mockAPI/posts'
    const userDetails = {username: name, userId}
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }
    const userStatus = await fetch(Url, options)
    if (userStatus.ok) {
      const modifyData = cardData.map(eachItem => {
        if (eachItem.postId === postId) {
          return {...eachItem, isApproved: 'SUCCESS'}
        }
        return eachItem
      })
      this.setState({cardData: modifyData})
      localStorage.setItem('tableData', JSON.stringify(modifyData))
    } else {
      const modifyDataToFailure = cardData.map(eachItem => {
        if (eachItem.postId === postId) {
          return {...eachItem, isApproved: 'FAILURE'}
        }
        return eachItem
      })
      this.setState({cardData: modifyDataToFailure})
      localStorage.setItem('tableData', JSON.stringify(modifyDataToFailure))
    }
  }

  retryApi = () => {
    this.getUserData()
  }

  cardFailureView = () => (
    <FailureContainer>
      <FailureImage src="https://miro.medium.com/max/1400/0*zJ3sA4LbvcKen1N7.jpg" />
      <SomethingWrongHeading>Something Went Wrong</SomethingWrongHeading>
      <RetryButton type="button" onClick={this.retryApi}>
        Retry
      </RetryButton>
    </FailureContainer>
  )

  cardSuccessView = () => {
    const {cardData} = this.state
    return (
      <CardUlElement>
        {cardData.map(eachCard => (
          <Card
            key={eachCard.postId}
            cardItem={eachCard}
            updateUser={this.updateUser}
          />
        ))}
      </CardUlElement>
    )
  }

  cardInprogressView = () => <LoaderThreeDots />

  showCardsFunction = () => {
    const {cardApiStatus} = this.state
    switch (cardApiStatus) {
      case componentApiStatus.inprogress:
        return this.cardInprogressView()
      case componentApiStatus.success:
        return this.cardSuccessView()
      case componentApiStatus.failure:
        return this.cardFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <PlatformReviewMainContainer>
        <LeftMenu />
        <CardContainer>
          <Header />
          <AcceptAndObserveHeading text="Accept Requests" />
          {this.showCardsFunction()}
        </CardContainer>
      </PlatformReviewMainContainer>
    )
  }
}

export default PlatformReviewPage
