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
import HomeScreen from '../screens/home-screen'
import RestApiScreen from '../screens/rest-api-screen'
import {IRootStackParamList} from '../../navigation/stack-param-list'
import {EScreens} from '../../navigation/screens'
import {COLORS} from '../../styles/variables'

const Stack = createStackNavigator<IRootStackParamList>()

StatusBar.setBackgroundColor(COLORS.white)

const App = () => {
    const {t} = useTranslation()

    return (
        <>
            <StatusBar barStyle="dark-content"
                       hidden={false}/>
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <Text>{t(`${EI18nNameSpaces.welcome}:title`)}</Text>
                </ScrollView>
            </SafeAreaView>

            <Stack.Navigator initialRouteName={EScreens.RestApi}>
                <Stack.Screen name={EScreens.Home} component={HomeScreen} options={{title: 'Home'}}/>
                <Stack.Screen name={EScreens.RestApi} component={RestApiScreen} options={{title: 'Rest Api'}}/>
            </Stack.Navigator>
        </>
    )
}

export default App
