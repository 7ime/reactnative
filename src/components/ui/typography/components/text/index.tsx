import React from 'react'
import ITypography from '../../model'
import TypographyStyles from '../../styles'

const Text: React.FC<ITypography.TextProps> = (props) => {
    const {
        children,
        ...restProps
    } = props

    return <TypographyStyles.StyledText {...restProps}>{children}</TypographyStyles.StyledText>
}

export default Text
