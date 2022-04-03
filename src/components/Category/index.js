import {CategoryContainer, CategoryName} from './styledComponents'

const Category = props => {
  const {tag1, tag2} = props

  return (
    <CategoryContainer>
      {tag1 && <CategoryName>{tag1}</CategoryName>}
      {tag2 && <CategoryName addColor>{tag2}</CategoryName>}
    </CategoryContainer>
  )
}

export default Category
