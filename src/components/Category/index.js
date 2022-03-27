import {SpanContainer, SpanAndMessageContainer} from './styledComponents'

const Category = props => {
  const {tag1, tag2} = props

  return (
    <SpanAndMessageContainer>
      {tag1 && <SpanContainer>{tag1}</SpanContainer>}
      {tag2 && <SpanContainer addColor>{tag2}</SpanContainer>}
    </SpanAndMessageContainer>
  )
}

export default Category
