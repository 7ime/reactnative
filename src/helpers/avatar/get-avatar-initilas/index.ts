import IAvatar from '../../../components/ui/avatar/model'

export const getAvatarInitials = (source: string, defaultInitials: IAvatar.Initials): IAvatar.Initials => {
    const result: IAvatar.Initials = [...defaultInitials]
    const [firstChunk, secondChunk] = source.split(' ')

    if (firstChunk) {
        result[0] = firstChunk.charAt(0).toLocaleUpperCase()
    }

    if (secondChunk) {
        result[1] = secondChunk.charAt(0).toLocaleUpperCase()
    }

    return result
}
