import styled from 'styled-components/native'
import Text from '../../typography/components/text'

const Avatar = styled.View`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const Image = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  resizeMode: cover;
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
    Image,
    Initials,
    Initial,
}

export default AvatarStyles
