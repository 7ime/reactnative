import styled from 'styled-components/native'

const StyledText = styled.Text`
  font-family: ${({ theme }) => theme.font.family.os_regular};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.default}px;
  color: ${({ theme }) => theme.colors.black};
`

const TypographyStyles = {
    StyledText
}

export default TypographyStyles

