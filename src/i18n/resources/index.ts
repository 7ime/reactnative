import {EI18nLanguages, EI18nNameSpaces} from '../../constants/i18n'

import localesWelcomeEN from '../locales/en/welcome.json'
import localesWelcomeRU from '../locales/ru/welcome.json'

export type II18nResources = Record<EI18nLanguages, Record<EI18nNameSpaces, Record<string, unknown>>>

export const i18nResources: II18nResources = {
    [EI18nLanguages.EN]: {
        [EI18nNameSpaces.welcome]: localesWelcomeEN
    },
    [EI18nLanguages.RU]: {
        [EI18nNameSpaces.welcome]: localesWelcomeRU
    }
}
