import styled from 'styled-components/native'
import Text from '../../typography/components/text'

const Avatar = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Initials = styled.View`
  display: flex;
  flex-direction: row;
`

const Initial = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
`

const AvatarStyles = {
    Avatar,
    Initials,
    Initial
}

export default AvatarStyles

