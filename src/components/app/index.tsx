import React from 'react'
import {
    StatusBar
} from 'react-native'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import HomeScreen from '../screens/home-screen'
import RestApiScreen from '../screens/rest-api-screen'
import {ERootScreens} from '../../navigation/screens'
import {COLORS} from '../../styles/variables'
import {INavigation} from '../../navigation/model'
import {TransitionSpec} from '@react-navigation/stack/lib/typescript/src/types'
import ExampleCarouselScreen from '../screens/example-carousel-screen'
import ExamplesScreen from '../screens/examples'

const Stack = createStackNavigator<INavigation.RootStackParamList>()

StatusBar.setBackgroundColor(COLORS.white)

const TransitionScreenOptions = {
    ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
}

const config: TransitionSpec = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
}

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content"
                       hidden={false}/>
            <Stack.Navigator initialRouteName={ERootScreens.Home} screenOptions={{
                headerShown: false,
                ...TransitionScreenOptions,
                gestureDirection: 'horizontal',
            }}>
                <Stack.Screen name={ERootScreens.Home} component={HomeScreen} options={{title: 'Home'}}/>
                <Stack.Screen
                    name={ERootScreens.RestApi}
                    component={RestApiScreen}
                    options={{
                        title: 'Rest Api',
                        gestureDirection: 'horizontal',
                        // transitionSpec: {
                        //     open: config,
                        //     close: config,
                        // }
                    }}
                />
                <Stack.Screen name={ERootScreens.ExampleCarousel} component={ExampleCarouselScreen} options={{title: 'Example Carousel'}}/>
                <Stack.Screen name={ERootScreens.Examples} component={ExamplesScreen} options={{title: 'Example Carousel'}}/>
            </Stack.Navigator>
        </>
    )
}

export default App
