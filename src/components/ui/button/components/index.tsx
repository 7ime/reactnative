import React from 'react'
import IButton from '../model'
import {ActivityIndicator, GestureResponderEvent, TouchableHighlight, View, Text} from 'react-native'

const Button = (props: IButton.Props) => {
    const {
        disabled,
        children,
        loading,
        type = '',
        shape = '',
        accessible = true,
        accessibilityRole = 'button',
        accessibilityState = {
            disabled
        },
        onPress,
        onPressIn,
        onPressOut,
        ...restProps
    } = props

    const [pressInValue, setPressInValue] = React.useState(false)

    const handlePressIn = React.useCallback((event: GestureResponderEvent) => {
        setPressInValue(true)
        onPressIn && onPressIn(event)
    }, [])

    const handlePressOut = React.useCallback((event: GestureResponderEvent) => {
        setPressInValue(false)
        onPressOut && onPressOut(event)
    }, [])

    return (
        <TouchableHighlight
            accessible={accessible}
            accessibilityRole={accessibilityRole}
            accessibilityState={accessibilityState}
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            {...restProps}
        >
            <View>
                {loading && (
                    <ActivityIndicator
                        animating
                        size="small"
                    />
                )}
                <Text>{children}</Text>
            </View>
        </TouchableHighlight>
    )
}

export default React.memo(Button)
