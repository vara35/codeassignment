import Loader from 'react-loader-spinner'

import {LoadingContainer} from './styledComponents'

const LoaderThreeDots = () => (
  <LoadingContainer>
    <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
  </LoadingContainer>
)

export default LoaderThreeDots
