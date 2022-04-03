import Profile from '../Profile'
import Category from '../Category'
import ButtonComponent from '../ButtonComponent'

import {
  CardListElement,
  CardHeading,
  CardDescription,
  EllipseContainer,
  MessageIcon,
  MessagesCountContainer,
  ProfileButtonContainer,
  SpanAndMessageContainer,
  Ellipse,
  Comments,
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

  const updateUserStatus = () => {
    updateUser(userName, userId, postId)
  }

  return (
    <CardListElement commentsCount={commentsCount}>
      <CardHeading>{cardTitle}</CardHeading>
      {commentsCount !== 0 && (
        <EllipseContainer>
          <Ellipse src="https://res.cloudinary.com/image-link-getter/image/upload/v1648359358/Screenshot_2022-03-27_110434_oesthh.png" />
        </EllipseContainer>
      )}
      <CardDescription>{`${content}...`}</CardDescription>
      <MessagesCountContainer>
        <Category tag1={tag1} tag2={tag2} />
        {commentsCount !== 0 && (
          <SpanAndMessageContainer>
            <MessageIcon src="https://res.cloudinary.com/image-link-getter/image/upload/v1647833163/Screenshot_2022-03-21_085542_lioglp.png" />
            <Comments>{commentsCount}</Comments>
          </SpanAndMessageContainer>
        )}
      </MessagesCountContainer>
      <ProfileButtonContainer>
        <Profile profilePic={profilePic} userName={userName} />
        <ButtonComponent
          isApproved={isApproved}
          updateUserStatus={updateUserStatus}
        />
      </ProfileButtonContainer>
    </CardListElement>
  )
}

export default Card
