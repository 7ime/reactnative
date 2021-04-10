import React from 'react'
import IAvatar from '../model'
import {getAvatarInitials} from '../../../../helpers/avatar/get-avatar-initilas'
import {AVATAR_COLORS, DEFAULT_AVATAR_INITIAL} from '../../../../constants/avatar'
import {getAvatarColor} from '../../../../helpers/avatar/get-avatar-color'
import AvatarStyles from '../styles/avatar.styles'

const Avatar = (props: IAvatar.Props) => {
    const {
        imageUrl,
        name,
        ...restProps
    } = props

    if (imageUrl) {
        return <AvatarStyles.Avatar />
    }

    const [firstInitial, secondInitial] = getAvatarInitials(name || '', [DEFAULT_AVATAR_INITIAL])
    const bgColor = getAvatarColor(firstInitial, Array.from(AVATAR_COLORS.values()))

    return (
        <AvatarStyles.Avatar style={{ backgroundColor: bgColor }} {...restProps}>
            <AvatarStyles.Initials>
                <AvatarStyles.Initial>{firstInitial}</AvatarStyles.Initial>
                {
                    secondInitial && <AvatarStyles.Initial>{secondInitial}</AvatarStyles.Initial>
                }
            </AvatarStyles.Initials>
        </AvatarStyles.Avatar>
    )
}

export default React.memo(Avatar)
