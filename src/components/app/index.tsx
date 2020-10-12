import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    Text,
    StatusBar,
} from 'react-native'
import {useTranslation} from 'react-i18next'
import {EI18nNameSpaces} from '../../constants/i18n'
import {useDispatch} from 'react-redux'
import {JsonPlaceholderAction} from '../../store/jsonplaceholder'

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
        </>
    )
}

export default App
