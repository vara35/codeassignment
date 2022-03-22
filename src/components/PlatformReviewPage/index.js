import {Component} from 'react'

import Card from '../Card'
import Header from '../Header'
import LeftMenu from '../LeftMenu'

import ReportingPortal from '../ReportingPortal'

import {
  PlatformReviewMainContainer,
  CardContainer,
  HorizontalLIne,
  AcceptHeading,
  LoadingContainer,
  FailureContainer,
  FailureImage,
  SomethingWrongHeading,
  RetryButton,
  CardUlElement,
  SwitchComponentButton,
  SwitchContainer,
} from './styledComponents'

const componentApiStatus = {
  initial: 'INITIAL',
  inprogress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class PlatformReviewPage extends Component {
  state = {
    cardApiStatus: componentApiStatus.success,
    switchStatus: true,
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
        isApproved: false,
      }))
      this.setState({
        cardData: updatedData,
        cardApiStatus: componentApiStatus.success,
      })
    } else {
      this.setState({
        cardApiStatus: componentApiStatus.failure,
      })
    }
  }

  updateUser = async (name, userId, postId) => {
    const {cardData} = this.state
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
    const response1 = await fetch(Url, options)
    if (response1.ok) {
      const modifyData = cardData.map(eachItem => {
        if (eachItem.postId === postId) {
          return {...eachItem, isApproved: !eachItem.isApproved}
        }
        return eachItem
      })
      this.setState({cardData: modifyData})
    }
  }

  changeSwitchStatus = () => {
    this.setState(prevState => ({switchStatus: !prevState.switchStatus}))
  }

  retryApi = () => {
    this.getUserData()
  }

  cardFailureView = () => (
    <FailureContainer>
      <FailureImage src="https://miro.medium.com/max/1400/0*zJ3sA4LbvcKen1N7.jpg" />
      <SomethingWrongHeading>Something went wrong</SomethingWrongHeading>
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

  cardInprogressView = () => <LoadingContainer>Loading...</LoadingContainer>

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

  showLeftMenuContainer = () => <LeftMenu />

  render() {
    const {switchStatus, cardData} = this.state
    return (
      <PlatformReviewMainContainer>
        {this.showLeftMenuContainer()}
        <CardContainer>
          <Header />
          <HorizontalLIne />
          <SwitchContainer>
            <SwitchComponentButton onClick={this.changeSwitchStatus}>
              Switch
            </SwitchComponentButton>
          </SwitchContainer>
          {switchStatus ? <AcceptHeading>Accept Request</AcceptHeading> : null}
          {switchStatus ? (
            this.showCardsFunction()
          ) : (
            <ReportingPortal cardData={cardData} />
          )}
        </CardContainer>
      </PlatformReviewMainContainer>
    )
  }
}

export default PlatformReviewPage
