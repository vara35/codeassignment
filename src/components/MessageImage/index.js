import {MessageContainer, MessageImg, MessageCounter} from './styledComponents'

const MessageImage = props => {
  const {commentsCount, url} = props
  return (
    <MessageContainer>
      <MessageImg src={url} alt="Message" />
      {commentsCount !== 0 && <MessageCounter>{commentsCount}</MessageCounter>}
    </MessageContainer>
  )
}

export default MessageImage
