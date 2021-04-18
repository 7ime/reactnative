import {ERootScreens} from './screens'
import {StackScreenProps} from '@react-navigation/stack'

export namespace INavigation {
    export type RootStackParamList = {
        [ERootScreens.Home]: undefined
        [ERootScreens.RestApi]: undefined
        [ERootScreens.ExampleCarousel]: undefined
    }

    export type RootProps<T extends ERootScreens> = StackScreenProps<RootStackParamList, T>
}
