import {BiSearchAlt2} from 'react-icons/bi'

import {
  NavContainer,
  InputElement,
  WriteButton,
  ButtonImageContainer,
  HeaderImage,
  IconInputContainer,
} from './styledComponents'

const Header = () => (
  <NavContainer>
    <IconInputContainer>
      <BiSearchAlt2 />
      <InputElement type="search" placeholder="Search" />
    </IconInputContainer>
    <ButtonImageContainer>
      <WriteButton type="button">Write Post</WriteButton>
      <HeaderImage src="https://res.cloudinary.com/image-link-getter/image/upload/v1647793795/Screenshot_2022-03-20_215818_ec0cww.png" />
    </ButtonImageContainer>
  </NavContainer>
)

export default Header
