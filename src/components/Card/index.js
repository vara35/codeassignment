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

const Card = () => (
  <CardListElement>
    <CardHeading>
      The Evolution of UI/UX Designers Into Product Designers (Fast Company)
    </CardHeading>
    <CardDescription>
      IS SIMPLICITY A real thing? Or is design the pursuit of....
    </CardDescription>
    <MessagesCountContainer>
      <SpanAndMessageContainer>
        <SpanContainer>uidiscuss</SpanContainer>
        <SpanContainer addColor>teamui</SpanContainer>
      </SpanAndMessageContainer>
      <SpanAndMessageContainer>
        <MessageImage src="https://res.cloudinary.com/image-link-getter/image/upload/v1647833163/Screenshot_2022-03-21_085542_lioglp.png" />
        <SpanContainer>6</SpanContainer>
      </SpanAndMessageContainer>
    </MessagesCountContainer>
    <MessagesCountContainer>
      <SpanAndMessageContainer>
        <CardImage src="https://res.cloudinary.com/image-link-getter/image/upload/v1647793795/Screenshot_2022-03-20_215818_ec0cww.png" />
        <UserName>Ashok.T</UserName>
      </SpanAndMessageContainer>
      <ApproveButton>Approve</ApproveButton>
    </MessagesCountContainer>
  </CardListElement>
)

export default Card
