import Profile from '../Profile'

import {
  CardListElement,
  CardHeading,
  CardDescription,
  SpanContainer,
  MessageImage,
  EllipseContainer,
  MessagesCountContainer,
  SpanAndMessageContainer,
  ApproveButton,
  ApprovedText,
} from './styledComponents'

const approveButtonConstants = {
  initial: 'INITIAL',
  inprogress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const Card = props => {
  const {cardItem, updateUser} = props
  const {
    title,
    userName,
    profilePic,
    commentsCount,
    userId,
    isApproved,
    postId,
    postContent,
    tag1,
    tag2,
  } = cardItem

  const updateApprove = () => {
    updateUser(userName, userId, postId)
  }

  const content =
    postContent.length > 6
      ? postContent.slice(0, 60)
      : 'IS SIMPLICITY A real thing? Or is design the pursuit of'

  const buttonFailureView = () => <ApproveButton retry>Retry</ApproveButton>

  const buttonSuccessView = () => <ApprovedText>Approved</ApprovedText>

  const buttonInprogressView = () => (
    <ApprovedText loading>Loading...</ApprovedText>
  )

  const buttonInitialView = () => (
    <ApproveButton onClick={updateApprove}>Approve</ApproveButton>
  )

  const showButton = () => {
    switch (isApproved) {
      case approveButtonConstants.initial:
        return buttonInitialView()
      case approveButtonConstants.inprogress:
        return buttonInprogressView()
      case approveButtonConstants.success:
        return buttonSuccessView()
      case approveButtonConstants.failure:
        return buttonFailureView()
      default:
        return null
    }
  }

  return (
    <CardListElement>
      <CardHeading>{title}</CardHeading>
      {commentsCount !== 0 && <EllipseContainer>...</EllipseContainer>}
      <CardDescription>{`${content}...`}</CardDescription>
      <MessagesCountContainer>
        <SpanAndMessageContainer>
          {tag1 && <SpanContainer>{tag1}</SpanContainer>}
          {tag2 && <SpanContainer addColor>{tag2}</SpanContainer>}
        </SpanAndMessageContainer>
        {commentsCount !== 0 && (
          <SpanAndMessageContainer>
            <MessageImage src="https://res.cloudinary.com/image-link-getter/image/upload/v1647833163/Screenshot_2022-03-21_085542_lioglp.png" />
            <SpanContainer>{commentsCount}</SpanContainer>
          </SpanAndMessageContainer>
        )}
      </MessagesCountContainer>
      <MessagesCountContainer>
        <Profile profilePic={profilePic} userName={userName} />
        {showButton()}
      </MessagesCountContainer>
    </CardListElement>
  )
}

export default Card
