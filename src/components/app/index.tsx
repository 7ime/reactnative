import React from 'react'
import {
    StatusBar,
} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/home-screen'
import RestApiScreen from '../screens/rest-api-screen'
import {IRootStackParamList} from '../../navigation/stack-param-list'
import {EScreens} from '../../navigation/screens'
import {COLORS} from '../../styles/variables'

const Stack = createStackNavigator<IRootStackParamList>()

StatusBar.setBackgroundColor(COLORS.white)

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content"
                       hidden={false}/>
            <Stack.Navigator initialRouteName={EScreens.RestApi}>
                <Stack.Screen name={EScreens.Home} component={HomeScreen} options={{title: 'Home'}}/>
                <Stack.Screen name={EScreens.RestApi} component={RestApiScreen} options={{title: 'Rest Api'}}/>
            </Stack.Navigator>
        </>
    )
}

export default App
