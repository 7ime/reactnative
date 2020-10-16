import {StyleSheet} from 'react-native'
import {COLORS, FONTS} from '../../../../../styles/variables'

export default StyleSheet.create({
    list: {
        position: 'relative'
    },
    item: {
        marginBottom: 10
    },
    title: {
        fontFamily: FONTS.os_bold,
        fontSize: 20,
        marginBottom: 5,
        textTransform: 'capitalize',
    },
    text: {
        fontFamily: FONTS.os_regular,
        fontSize: 10,
        backgroundColor: COLORS.blue_light_20,
        padding: 8,
        borderRadius: 5
    }
})
