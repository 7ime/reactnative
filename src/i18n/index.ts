import i18next from 'i18next'
import {initReactI18next} from 'react-i18next'
import i18nextReactNative from 'i18next-react-native-language-detector'
import {EI18nLanguages} from '../constants/i18n'
import {i18nResources} from './resources'

i18next
    .use(initReactI18next)
    .use(i18nextReactNative)
    .init({
        fallbackLng: EI18nLanguages.EN,
        interpolation: {
            escapeValue: false
        },
        resources: i18nResources
    })

export default i18next
