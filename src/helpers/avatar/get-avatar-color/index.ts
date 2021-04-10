import {getLatestDigitsFromNumber} from '../../numbers/get-latest-digits-from-number'
import {reduceNumberBySubtractionToMaxSize} from '../../numbers/reduce-number-by-subtraction-to-max-size'
import {getCountOfDigitsInNumber} from '../../numbers/get-count-of-digits-in-number'

export const getAvatarColor = (char: string, colors: string[]): string => {
    const charCode = char.charCodeAt(0)

    const countOfDigits = getCountOfDigitsInNumber(colors.length)
    const latestDigitsFromCharCode = getLatestDigitsFromNumber(charCode, countOfDigits)
    const index = reduceNumberBySubtractionToMaxSize(latestDigitsFromCharCode, colors.length - 1, colors.length)

    return colors[index]
}
