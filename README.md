# Writing-Stats
This is a simple package to get stats (such as word count, paragraph density, etc) from a TXT file.
```js
const writingStats = require('writing-stats')
const fs = require('fs')

console.log(writingStats(fs.readFileSync('essay.txt', 'utf-8')))
```

### **```writingStatus(input, lineCount, aboveAverageBuffer, belowAverageBuffer, sentenceEndCharacters, paragraphEndCharacter)```**

```input - Input text - I would recommend using fs to read from a TXT file rather than pass a string because javascript doesn't handle some chracters such as apostrophes, new-line, etc```

```lineCount - Number of \n characters per paragraph```

```aboveAverageBuffer - Number of words (more than the average sentence length) needed to count as an "Above Average" sentence```

```belowAverageBuffer - Number of words (less than the average sentence length) to count as a "Below Average" sentence```

```sentenceEndCharacters - List of characters (as Array) that mark the end of a sentence. For example, [".", "?", "!"]```

```paragraphEndCharacter - Character that marks the end of a paragraph - Newline character```

## Result
```js
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