export const reduceNumberBySubtractionToMaxSize = (source: number, maxSize: number, numberSubtract: number): number => {
    if (source <= maxSize) return source

    return reduceNumberBySubtractionToMaxSize(source - numberSubtract, maxSize, numberSubtract)
}
