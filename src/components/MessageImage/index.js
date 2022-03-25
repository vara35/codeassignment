import {MessageContainer, MessageImg, MessageCounter} from './styledComponents'

const MessageImage = props => {
  const {commentsCount} = props
  return (
    <MessageContainer>
      <MessageImg
        src="https://res.cloudinary.com/image-link-getter/image/upload/v1648194797/Screenshot_2022-03-25_132259_epn2h4.png"
        alt="Message"
      />
      {commentsCount !== 0 && <MessageCounter>{commentsCount}</MessageCounter>}
    </MessageContainer>
  )
}

export default MessageImage
