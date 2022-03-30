import Profile from '../Profile'

import {
  PortalHeaderContainer,
  PortalLogo,
  PortalHeading,
  LogoHeadingContainer,
} from './styledComponents'

const ReportingPortalHeader = () => (
  <PortalHeaderContainer>
    <LogoHeadingContainer>
      <PortalLogo src="https://res.cloudinary.com/image-link-getter/image/upload/v1647758281/IB-Hubs_nbeuia.png" />
      <PortalHeading>Reporting Portal</PortalHeading>
    </LogoHeadingContainer>
    <Profile
      userName="Satya"
      profilePic="https://res.cloudinary.com/image-link-getter/image/upload/v1647793795/Screenshot_2022-03-20_215818_ec0cww.png"
    />
  </PortalHeaderContainer>
)

export default ReportingPortalHeader
