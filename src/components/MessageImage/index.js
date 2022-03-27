import {MessageContainer, MessageImg, MessageCounter} from './styledComponents'

const MessageImage = props => {
  const {commentsCount, url, topNum} = props
  return (
    <MessageContainer topNum={topNum}>
      <MessageImg src={url} alt="Message" topNum={topNum} />
      {commentsCount !== 0 && <MessageCounter>{commentsCount}</MessageCounter>}
    </MessageContainer>
  )
}

export default MessageImage
