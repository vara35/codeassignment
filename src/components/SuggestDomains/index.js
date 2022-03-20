import {
  DomainNameList,
  ListDescription,
  SuggestListButton,
} from './styledComponents'

const SuggestDomains = props => {
  const {suggestItem} = props
  const {Name, category} = suggestItem
  return (
    <DomainNameList>
      <ListDescription>{Name}</ListDescription>
      <SuggestListButton type="button" category={category}>
        {category}
      </SuggestListButton>
    </DomainNameList>
  )
}

export default SuggestDomains
