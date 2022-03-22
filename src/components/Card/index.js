import {
  CardListElement,
  CardHeading,
  CardDescription,
  SpanAndMessageContainer,
  SpanContainer,
  MessageImage,
  MessagesCountContainer,
  CardImage,
  UserName,
  ApproveButton,
} from './styledComponents'

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
  } = cardItem

  const updateApprove = () => {
    updateUser(userName, userId, postId)
  }

  return (
    <CardListElement>
      <CardHeading>{title}</CardHeading>
      <CardDescription>
        IS SIMPLICITY A real thing? Or is design the pursuit of....{' '}
      </CardDescription>
      <MessagesCountContainer>
        <SpanAndMessageContainer>
          <SpanContainer>uidiscuss</SpanContainer>
          <SpanContainer addColor>teamui</SpanContainer>
        </SpanAndMessageContainer>
        <SpanAndMessageContainer>
          <MessageImage src="https://res.cloudinary.com/image-link-getter/image/upload/v1647833163/Screenshot_2022-03-21_085542_lioglp.png" />
          <SpanContainer>{commentsCount}</SpanContainer>
        </SpanAndMessageContainer>
      </MessagesCountContainer>
      <MessagesCountContainer>
        <SpanAndMessageContainer>
          <CardImage src={profilePic} alt="profile" />
          <UserName>{userName}</UserName>
        </SpanAndMessageContainer>
        {isApproved ? (
          <ApproveButton type="button" onClick={updateApprove} addBgColor>
            Success
          </ApproveButton>
        ) : (
          <ApproveButton type="button" onClick={updateApprove}>
            Approve
          </ApproveButton>
        )}
      </MessagesCountContainer>
    </CardListElement>
  )
}

export default Card
