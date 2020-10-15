import {AccessibilityProps, GestureResponderEvent} from 'react-native'
import React from 'react'

namespace IButton {
    export interface Props extends AccessibilityProps {
        children: React.ReactText

        type?: 'primary' | 'secondary'
        shape?: 'round'

        loading?: boolean
        disabled?: boolean

        onPress?: (event: GestureResponderEvent) => unknown
        onPressIn?: (event: GestureResponderEvent) => unknown
        onPressOut?: (event: GestureResponderEvent) => unknown
    }
}

export default IButton
