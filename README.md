# Writing-Stats
This is a simple package to get stats (such as word count, paragraph density, etc) from a TXT file.
```js
const writingStats = require('writing-stats')

console.log(writingStats('essay.txt'))
```

### **```writingStatus(file, lineCount, aboveAverageBuffer, belowAverageBuffer, sentenceEndCharacters, paragraphEndCharacter)```**

**```file - Filepath to pass to fs module```**

**```lineCount - Number of \n characters per paragraph```**

**```aboveAverageBuffer - Number of words (more than the average sentence length) needed to count as an "Above Average" sentence```**

**```belowAverageBuffer - Number of words (less than the average sentence length) to count as a "Below Average" sentence```**

**```sentenceEndCharacters - List of characters (as Array) that mark the end of a sentence. For example, [".", "?", "!"]```**

**```paragraphEndCharacter - Character that marks the end of a paragraph - Newline character```**

## Result
```js
{
  wordCount: 774,
  characterCount: 3499,
  rawCharacterCount: 4439,
  sentenceCount: 57,
  paragraphCount: 12,
  longestSentence: 35,
  shortestSentence: 1,
  wordCountsPerSentence: [
     6, 11,  9,  5, 13, 16,  2,  9, 14, 11, 11, 11,
    11, 12, 19,  9, 12, 16, 12,  9, 12, 14,  9, 13,
    19,  7, 16, 19, 10, 11, 35, 14, 25, 24,  1,  5,
    12,  8, 14, 12, 16,  8, 10, 27, 23, 24, 19,  9,
    25, 19, 18, 19, 13, 17, 10,  3, 16
  ],
  longestParagraph: 8,
  shortestParagraph: 3,
  sentenceCountsPerParagraph: [
    6, 4, 4, 4, 8,
    4, 3, 5, 6, 3,
    5, 5
  ],
  aboveAverageSentences: 6,
  belowAverageSentences: 9,
  averageSentenceLength: 13.578947368421053,
  averageParagraphLength: 4.75
}

ZoBro23(D:\Documents\My Stuff\Homeschool\English\From Structure to Style\writing-stats)--> node index.js
{
  wordCount: 666, // total word count
  characterCount: 2830, // alphabets and number only
  rawCharacterCount: 3642, // all characters
  sentenceCount: 42, // total sentence count
  paragraphCount: 7, // total paragraph count
  longestSentence: 40, // number of words in the longest sentence
  shortestSentence: 2, // number of words in the shortest sentence
  wordCountsPerSentence: [ // number of words in each sentence
    23, 10, 24, 40, 23,  3,  2,  3, 12,  2,
    21, 12, 19, 21, 17, 28,  5, 23, 19, 16,
     2, 20, 27, 13, 22, 22, 19, 23, 20,  6,
    11, 20, 20,  3, 19, 11, 21, 18, 15,  9,
     5, 17
  ],
  longestParagraph: 8, // number of sentences in the longest paragraph
  shortestParagraph: 3, // number of sentences in the shortest paragraph
  sentenceCountsPerParagraph: [ // number of sentences in each paragraph
    4, 7, 3, 6,
    7, 8, 7
  ],
  aboveAverageSentences: 3, // number of sentences with word count more than the average - with buffer
  belowAverageSentences: 11, // number of sentences with word count less than the average - with buffer
  averageSentenceLength: 15.857142857142858, // average sentence length in number of words
  averageParagraphLength: 6 // average paragraph length in number of sentences
}
```