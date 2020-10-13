import {Platform} from 'react-native'

export const platform = {
    ios: Platform.OS === 'ios',
    android: Platform.OS === 'android'
}

export enum EAndroidVersions {
    Eleven,
    Ten,
    Pie
}

export enum EIOSVersions {

}

export const versions = {
    android: new Map<string | number, EAndroidVersions>([
        [30, EAndroidVersions.Eleven],
        [29, EAndroidVersions.Ten],
        [28, EAndroidVersions.Pie]
    ]),
    ios: new Map<string, EIOSVersions>([

    ])
}
