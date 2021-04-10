export const getLatestDigitsFromNumber = (source: number, countDigits: number): number => {
    return +source.toString().substr(-1, countDigits)
}
