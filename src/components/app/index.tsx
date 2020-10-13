import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    Text,
    StatusBar,
} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {useTranslation} from 'react-i18next'
import {EI18nNameSpaces} from '../../constants/i18n'
import {useDispatch} from 'react-redux'
import {JsonPlaceholderAction} from '../../store/jsonplaceholder'
import HomeScreen from '../screens/home-screen'
import RestApiScreen from '../screens/rest-api-screen'
import {IRootStackParamList} from '../../navigation/stack-param-list'
import {EScreens} from '../../navigation/screens'

const Stack = createStackNavigator<IRootStackParamList>()

const App = () => {
    const dispatch = useDispatch()
    const {t} = useTranslation()

    React.useEffect(() => {
        dispatch(JsonPlaceholderAction.getPosts())
    }, [])

    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <Text>{t(`${EI18nNameSpaces.welcome}:title`)}</Text>
                </ScrollView>


            </SafeAreaView>

            <Stack.Navigator initialRouteName={EScreens.Home}>
                <Stack.Screen name={EScreens.Home} component={HomeScreen} options={{title: 'Home'}}/>
                <Stack.Screen name={EScreens.RestApi} component={RestApiScreen} options={{title: 'Rest Api'}}/>
            </Stack.Navigator>
        </>
    )
}

export default App
