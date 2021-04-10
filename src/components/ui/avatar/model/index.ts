import {AccessibilityProps} from 'react-native'

namespace IAvatar {
    export type Initials = [string, string?]

    export interface Props extends AccessibilityProps {
        imageUrl?: string
        name?: string
    }
}

export default IAvatar
