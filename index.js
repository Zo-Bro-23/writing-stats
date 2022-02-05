function writingStats(input, inputLineCount, inputAboveAverageBuffer, inputBelowAverageBuffer, inputSentenceEndCharacters, inputParagraphEndCharacter) {
    const fs = require('fs')
    if (typeof inputFile !== 'string') {
        throw new Error('Parameter `inputFile` must be of type string!')
    }
    file = input
    const validCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const sentenceEndCharacters = inputSentenceEndCharacters || ['.', '?', '!']
    const paragraphEndCharacter = inputParagraphEndCharacter || '\n'
    const lineCount = inputLineCount || 2 // Number of newline characters per paragraph
    const aboveAverageBuffer = inputAboveAverageBuffer || 10
    const belowAverageBuffer = inputBelowAverageBuffer || 5

    let wordCount = 0
    let characterCount = 0
    let rawCharacterCount = file.length
    let sentenceCount = 0
    let paragraphCount = 0
    let longestSentence = 0
    let shortestSentence = file.length
    let wordCountsPerSentence = []
    let longestParagraph = 0
    let shortestParagraph = file.length
    let sentenceCountsPerParagraph = []
    let currentWordCount = 0
    let currentSentenceCount = 0

    for (i = 0; i < file.length; i++) {
        const character = file.charAt(i).toLowerCase()
        while (file.charAt(file.length - 1) == paragraphEndCharacter) {
            file = file.slice(0, file.length - 1)
        }
        if (validCharacters.includes(character)) {
            characterCount++
        }
        if (character == ' ') {
            if (!sentenceEndCharacters.includes(file.charAt(i - 1))) {
                wordCount++
                currentWordCount++
            }
        }
        if (sentenceEndCharacters.includes(character)) {
            wordCount++
            currentWordCount++
            sentenceCount++
            currentSentenceCount++
            longestSentence < currentWordCount ? longestSentence = currentWordCount : longestSentence = longestSentence
            shortestSentence > currentWordCount ? shortestSentence = currentWordCount : shortestSentence = shortestSentence
            wordCountsPerSentence.push(currentWordCount)
            currentWordCount = 0
        }
        if (character == paragraphEndCharacter) {
            paragraphCount = paragraphCount + (1 / lineCount)
            if (paragraphCount % 1 == (1 / lineCount)) {
                longestParagraph < currentSentenceCount ? longestParagraph = currentSentenceCount : longestParagraph = longestParagraph
                shortestParagraph > currentSentenceCount ? shortestParagraph = currentSentenceCount : shortestParagraph = shortestParagraph
                sentenceCountsPerParagraph.push(currentSentenceCount)
            }
            currentSentenceCount = 0
        } else if (i == file.length - 1 && character !== '\r') {
            paragraphCount++
            longestParagraph < currentSentenceCount ? longestParagraph = currentSentenceCount : longestParagraph = longestParagraph
            shortestParagraph > currentSentenceCount ? shortestParagraph = currentSentenceCount : shortestParagraph = shortestParagraph
            sentenceCountsPerParagraph.push(currentSentenceCount)
            currentSentenceCount = 0
        }
    }

    let aboveAverageSentences = 0
    let belowAverageSentences = 0
    let averageSentenceLength = 0
    let averageParagraphLength = 0

    wordCountsPerSentence.forEach(count => {
        averageSentenceLength = averageSentenceLength + count
    })
    averageSentenceLength = averageSentenceLength / wordCountsPerSentence.length

    sentenceCountsPerParagraph.forEach(count => {
        averageParagraphLength = averageParagraphLength + count
    })
    averageParagraphLength = averageParagraphLength / sentenceCountsPerParagraph.length

    wordCountsPerSentence.forEach(count => {
        if (count - averageSentenceLength > aboveAverageBuffer) {
            aboveAverageSentences++
        }
    })

    wordCountsPerSentence.forEach(count => {
        if (averageSentenceLength - count > belowAverageBuffer) {
            belowAverageSentences++
        }
    })
    return {
        wordCount,
        characterCount,
        rawCharacterCount,
        sentenceCount,
        paragraphCount,
        longestSentence,
        shortestSentence,
        wordCountsPerSentence,
        longestParagraph,
        shortestParagraph,
        sentenceCountsPerParagraph,
        aboveAverageSentences,
        belowAverageSentences,
        averageSentenceLength,
        averageParagraphLength
    }
}

module.exports = writingStats