import React from 'react'
import {
    StatusBar
} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/home-screen'
import RestApiScreen from '../screens/rest-api-screen'
import {ERootScreens} from '../../navigation/screens'
import {COLORS} from '../../styles/variables'
import {INavigation} from '../../navigation/model'
import {StackHeaderProps} from '@react-navigation/stack/lib/typescript/src/types'
import ExampleCarouselScreen from '../screens/example-carousel-screen'

const Stack = createStackNavigator<INavigation.RootStackParamList>()

StatusBar.setBackgroundColor(COLORS.white)

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content"
                       hidden={false}/>
            <Stack.Navigator initialRouteName={ERootScreens.Home} screenOptions={{
                header: (props: StackHeaderProps) => {
                    return null
                },
                headerShown: true
            }}>
                <Stack.Screen name={ERootScreens.Home} component={HomeScreen} options={{title: 'Home'}}/>
                <Stack.Screen name={ERootScreens.RestApi} component={RestApiScreen} options={{title: 'Rest Api'}}/>
                <Stack.Screen name={ERootScreens.ExampleCarousel} component={ExampleCarouselScreen} options={{title: 'Example Carousel'}}/>
            </Stack.Navigator>
        </>
    )
}

export default App
