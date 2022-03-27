import Profile from '../Profile'
import Category from '../Category'
import MessageImage from '../MessageImage'
import ButtonComponent from '../ButtonComponent'

import {
  CardListElement,
  CardHeading,
  CardDescription,
  EllipseContainer,
  MessageIcon,
  MessagesCountContainer,
  SpanAndMessageContainer,
  SpanEllipse,
  SpanForCommentsCount,
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
    postContent,
    tag1,
    tag2,
  } = cardItem

  const content =
    postContent.length > 6
      ? postContent.slice(0, 52)
      : 'IS SIMPLICITY A real thing? Or is design the pursuit of'

  const cardTitle = title.slice(0, 70)

  const updateApprove = () => {
    updateUser(userName, userId, postId)
  }

  return (
    <CardListElement>
      <CardHeading>{cardTitle}</CardHeading>
      {commentsCount !== 0 && (
        <EllipseContainer>
          <SpanEllipse>...</SpanEllipse>
        </EllipseContainer>
      )}
      <CardDescription>{`${content}...`}</CardDescription>
      <MessagesCountContainer>
        <Category tag1={tag1} tag2={tag2} />
        {commentsCount !== 0 && (
          <SpanAndMessageContainer>
            <MessageImage
              topNum="true"
              url="https://res.cloudinary.com/image-link-getter/image/upload/v1647833163/Screenshot_2022-03-21_085542_lioglp.png"
            />
            <SpanForCommentsCount>{commentsCount}</SpanForCommentsCount>
          </SpanAndMessageContainer>
        )}
      </MessagesCountContainer>
      <MessagesCountContainer>
        <Profile profilePic={profilePic} userName={userName} />
        <ButtonComponent isApproved={isApproved} updateUser={updateApprove} />
      </MessagesCountContainer>
    </CardListElement>
  )
}

export default Card
