import {StyleSheet} from 'react-native'
import {COLORS, SIZE} from '../../../../styles/variables'

const buttonStyles = StyleSheet.create({
    view: {
        minWidth: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZE.radius,
        minHeight: 50
    },
    pressed: {
        opacity: 0.5
    },
    disabled: {
        opacity: 0.5
    },
    loadingView: {

    },
    primaryView: {
        backgroundColor: COLORS.primary,
        color: COLORS.white
    },
    secondaryView: {
        backgroundColor: COLORS.secondary,
        color: COLORS.white
    },
    defaultView: {
        backgroundColor: COLORS.default,
        color: COLORS.text_c
    },
    text: {
        fontSize: 16
    },
    loadingText: {
        display: 'none'
    },
    primaryText: {
        color: COLORS.white
    },
    secondaryText: {
        color: COLORS.white
    },
    defaultText: {
        color: COLORS.text_c
    },
    indicator: {

    }
})

export default buttonStyles
