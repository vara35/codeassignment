import {DomainNameList, ListDescription} from './styledComponents'

const FollowingDomains = props => {
  const {name} = props
  return (
    <DomainNameList>
      <ListDescription>{name}</ListDescription>
    </DomainNameList>
  )
}

export default FollowingDomains
