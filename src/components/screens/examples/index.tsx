import React from 'react'
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    I18nManager, Animated, Alert,
} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { RectButton } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
    rectButton: {
        flex: 1,
        height: 80,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    separator: {
        backgroundColor: 'rgb(200, 199, 204)',
        height: StyleSheet.hairlineWidth,
    },
    fromText: {
        fontWeight: 'bold',
        backgroundColor: 'transparent',
    },
    messageText: {
        color: '#999',
        backgroundColor: 'transparent',
    },
    dateText: {
        backgroundColor: 'transparent',
        position: 'absolute',
        right: 20,
        top: 10,
        color: '#999',
        fontWeight: 'bold',
    },
})

type DataRow = {
    from: string
    when: string
    message: string
}

const DATA: DataRow[] = [
    {
        from: 'DArtagnan',
        when: '3:11 PM',
        message:
            'Unus pro omnibus, omnes pro uno. Nunc scelerisque, massa non lacinia porta, quam odio dapibus enim, nec tincidunt dolor leo non neque',
    },
    {
        from: 'Aramis',
        when: '11:46 AM',
        message:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus hendrerit ligula dignissim maximus aliquet. Integer tincidunt, tortor at finibus molestie, ex tellus laoreet libero, lobortis consectetur nisl diam viverra justo.',
    },
    {
        from: 'Athos',
        when: '6:06 AM',
        message:
            'Sed non arcu ullamcorper, eleifend velit eu, tristique metus. Duis id sapien eu orci varius malesuada et ac ipsum. Ut a magna vel urna tristique sagittis et dapibus augue. Vivamus non mauris a turpis auctor sagittis vitae vel ex. Curabitur accumsan quis mauris quis venenatis.',
    },
    {
        from: 'Porthos',
        when: 'Yesterday',
        message:
            'Vivamus id condimentum lorem. Duis semper euismod luctus. Morbi maximus urna ut mi tempus fermentum. Nam eget dui sed ligula rutrum venenatis.',
    },
    {
        from: 'Domestos',
        when: '2 days ago',
        message:
            'Aliquam imperdiet dolor eget aliquet feugiat. Fusce tincidunt mi diam. Pellentesque cursus semper sem. Aliquam ut ullamcorper massa, sed tincidunt eros.',
    },
    {
        from: 'Cardinal Richelieu',
        when: '2 days ago',
        message:
            'Pellentesque id quam ac tortor pellentesque tempor tristique ut nunc. Pellentesque posuere ut massa eget imperdiet. Ut at nisi magna. Ut volutpat tellus ut est viverra, eu egestas ex tincidunt. Cras tellus tellus, fringilla eget massa in, ultricies maximus eros.',
    },
    {
        from: 'DArtagnan',
        when: 'Week ago',
        message:
            'Aliquam non aliquet mi. Proin feugiat nisl maximus arcu imperdiet euismod nec at purus. Vestibulum sed dui eget mauris consequat dignissim.',
    },
    {
        from: 'Cardinal Richelieu',
        when: '2 weeks ago',
        message:
            'Vestibulum ac nisi non augue viverra ullamcorper quis vitae mi. Donec vitae risus aliquam, posuere urna fermentum, fermentum risus. ',
    },
]

const styles2 = StyleSheet.create({
    leftAction: {
        flex: 1,
        backgroundColor: '#388e3c',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
    },
    actionIcon: {
        width: 30,
        marginHorizontal: 10,
        backgroundColor: 'plum',
        height: 20,
    },
    rightAction: {
        alignItems: 'center',
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        backgroundColor: '#dd2c00',
        flex: 1,
        justifyContent: 'flex-end',
    },
})

const AnimatedView = Animated.createAnimatedComponent(View)

class GmailStyleSwipeableRow  extends React.Component<any, any> {
    private renderLeftActions = (
        _progress: Animated.AnimatedInterpolation,
        dragX: Animated.AnimatedInterpolation
    ) => {
        const scale = dragX.interpolate({
            inputRange: [0, 80],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        })
        return (
            <RectButton style={styles2.leftAction} onPress={this.close}>
                {/* Change it to some icons */}
                <AnimatedView style={[styles2.actionIcon, { transform: [{ scale }] }]} />
            </RectButton>
        )
    };
    private renderRightActions = (
        _progress: Animated.AnimatedInterpolation,
        dragX: Animated.AnimatedInterpolation
    ) => {
        const scale = dragX.interpolate({
            inputRange: [-80, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        })
        return (
            <RectButton style={styles2.rightAction} onPress={this.close}>
                {/* Change it to some icons */}
                <AnimatedView style={[styles2.actionIcon, { transform: [{ scale }] }]} />
            </RectButton>
        )
    };

    private swipeableRow?: Swipeable;

    private updateRef = (ref: Swipeable) => {
        this.swipeableRow = ref
    };
    private close = () => {
        this.swipeableRow?.close()
    };
    render() {
        const { children } = this.props
        return (
            <Swipeable
                ref={this.updateRef}
                friction={2}
                leftThreshold={80}
                enableTrackpadTwoFingerGesture
                rightThreshold={40}
                renderLeftActions={this.renderLeftActions}
                renderRightActions={this.renderRightActions}>
                {children}
            </Swipeable>
        )
    }
}

const styles3 = StyleSheet.create({
    leftAction: {
        flex: 1,
        backgroundColor: '#497AFC',
        justifyContent: 'center',
    },
    actionText: {
        color: 'white',
        fontSize: 16,
        backgroundColor: 'transparent',
        padding: 10,
    },
    rightAction: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
})

class AppleStyleSwipeableRow extends React.Component {
    private renderLeftActions = (
        _progress: Animated.AnimatedInterpolation,
        dragX: Animated.AnimatedInterpolation
    ) => {
        const trans = dragX.interpolate({
            inputRange: [0, 50, 100, 101],
            outputRange: [-20, 0, 0, 1],
            extrapolate: 'clamp',
        })
        return (
            <RectButton style={styles3.leftAction} onPress={this.close}>
                <Animated.Text
                    style={[
                        styles3.actionText,
                        {
                            transform: [{ translateX: trans }],
                        },
                    ]}>
                    Archive
                </Animated.Text>
            </RectButton>
        )
    };

    private renderRightAction = (
        text: string,
        color: string,
        x: number,
        progress: Animated.AnimatedInterpolation
    ) => {
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [x, 0],
        })
        const pressHandler = () => {
            this.close()
            Alert.alert(text)
        }

        return (
            <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
                <RectButton
                    style={[styles3.rightAction, { backgroundColor: color }]}
                    onPress={pressHandler}>
                    <Text style={styles3.actionText}>{text}</Text>
                </RectButton>
            </Animated.View>
        )
    };

    private renderRightActions = (
        progress: Animated.AnimatedInterpolation,
        _dragAnimatedValue: Animated.AnimatedInterpolation
    ) => (
        <View
            style={{
                width: 192,
                flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
            }}>
            {this.renderRightAction('More', '#C8C7CD', 192, progress)}
            {this.renderRightAction('Flag', '#ffab00', 128, progress)}
            {this.renderRightAction('More', '#dd2c00', 64, progress)}
        </View>
    );

    private swipeableRow?: Swipeable;

    private updateRef = (ref: Swipeable) => {
        this.swipeableRow = ref
    };
    private close = () => {
        this.swipeableRow?.close()
    };
    render() {
        const { children } = this.props
        return (
            <Swipeable
                ref={this.updateRef}
                friction={2}
                enableTrackpadTwoFingerGesture
                leftThreshold={30}
                rightThreshold={40}
                renderLeftActions={this.renderLeftActions}
                renderRightActions={this.renderRightActions}>
                {children}
            </Swipeable>
        )
    }
}


const Row = ({ item }: { item: DataRow }) => (
    <RectButton style={styles.rectButton} onPress={() => Alert.alert(item.from)}>
        <Text style={styles.fromText}>{item.from}</Text>
        <Text numberOfLines={2} style={styles.messageText}>
            {item.message}
        </Text>
        <Text style={styles.dateText}>{item.when} ❭</Text>
    </RectButton>
)

const SwipeableRow = ({ item, index }: { item: DataRow; index: number }) => {
    if (index % 2 === 0) {
        return (
            <AppleStyleSwipeableRow>
                <Row item={item} />
            </AppleStyleSwipeableRow>
        )
    } else {
        return (
            <GmailStyleSwipeableRow>
                <Row item={item} />
            </GmailStyleSwipeableRow>
        )
    }
}

export default class ExamplesScreen extends React.Component {
    render() {
        return (
            <FlatList
                data={DATA}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                renderItem={({ item, index }) => (
                    <SwipeableRow item={item} index={index} />
                )}
                keyExtractor={(_item, index) => `message ${index}`}
            />
        )
    }
}
