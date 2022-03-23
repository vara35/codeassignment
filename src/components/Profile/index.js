import {
  SpanAndMessageContainer,
  CardImage,
  UserName,
  CardImageName,
} from './styledComponents'

const Profile = props => {
  const {profilePic, userName} = props
  const slicedName = userName.slice(0, 1)

  return (
    <SpanAndMessageContainer>
      {profilePic && <CardImage src={profilePic} alt="profile" />}
      {!profilePic && <CardImageName> {slicedName} </CardImageName>}
      <UserName>{userName}</UserName>
    </SpanAndMessageContainer>
  )
}

export default Profile
