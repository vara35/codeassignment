import {
  ProfileContainer,
  ProfileImage,
  UserName,
  ProfileImageName,
} from './styledComponents'

const Profile = props => {
  const {profilePic, userName} = props
  const slicedName = userName.slice(0, 1)

  return (
    <ProfileContainer>
      {profilePic && <ProfileImage src={profilePic} alt="profile" />}
      {!profilePic && <ProfileImageName> {slicedName} </ProfileImageName>}
      <UserName>{userName}</UserName>
    </ProfileContainer>
  )
}

export default Profile
