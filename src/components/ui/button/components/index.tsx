import React from 'react'
import IButton from '../model'
import {ActivityIndicator, GestureResponderEvent, TouchableHighlight, View, Text, StyleSheet} from 'react-native'
import buttonStyles from '../styles/styles'
import {COLORS} from '../../../../styles/variables'

const Button = (props: IButton.Props) => {
    const {
        disabled,
        children,
        loading,
        type = 'default',
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

    const [pressedValue, setPressedValue] = React.useState(false)

    const handlePressIn = React.useCallback((event: GestureResponderEvent) => {
        setPressedValue(true)
        onPressIn && onPressIn(event)
    }, [])

    const handlePressOut = React.useCallback((event: GestureResponderEvent) => {
        setPressedValue(false)
        onPressOut && onPressOut(event)
    }, [])

    const viewStyles = StyleSheet.flatten([
        buttonStyles.view,
        (buttonStyles as any)[`${type}View`],
        disabled ? buttonStyles.disabled : null,
        pressedValue ? buttonStyles.pressed : null,
        loading ? buttonStyles.loadingView : null,
    ])

    const textStyles = StyleSheet.flatten([
        buttonStyles.text,
        (buttonStyles as any)[`${type}Text`],
        loading ? buttonStyles.loadingText : null,
    ])

    return (
        <TouchableHighlight
            accessible={accessible}
            accessibilityRole={accessibilityRole}
            accessibilityState={accessibilityState}
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            underlayColor={COLORS.transparent}
            {...restProps}
        >
            <View style={viewStyles}>
                {loading && (
                    <ActivityIndicator
                        color={COLORS.white}
                        animating
                        style={buttonStyles.indicator}
                        size="small"
                    />
                )}
                <Text style={textStyles}>{children}</Text>
            </View>
        </TouchableHighlight>
    )
}

export default React.memo(Button)
