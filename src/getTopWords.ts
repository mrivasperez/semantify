import analyzeText from './analyzeText';
import { FILLER_WORDS } from './utils';

export default function getTopWords(
  text: string,
  keywordMacro: string
): string[] {
  const wordCounts: { [word: string]: number } = {};
  const wordFirstIndex: { [word: string]: number } = {}; // Track first appearance of word
  const sentences = text.split(/[.!?]/);
  const keywordsToExclude = keywordMacro
    .split(/([+-])/g)
    .filter((word) => word.trim() !== '' && !/[+-]/.test(word))
    .map((word) => word.toLowerCase());

  sentences.forEach((sentence) => {
    if (analyzeText(sentence, keywordMacro)) {
      sentence
        .toLowerCase()
        .split(/\s+/)
        .forEach((word) => {
          const cleanWord = word.replace(/[^a-z0-9\s]/gi, '');
          if (
            !FILLER_WORDS.has(cleanWord) &&
            cleanWord !== '' &&
            !keywordsToExclude.includes(cleanWord)
          ) {
            wordCounts[cleanWord] = (wordCounts[cleanWord] || 0) + 1;
            // Store index of word's first appearance if not already stored
            if (!(cleanWord in wordFirstIndex)) {
              const sentenceStartIndex = text.toLowerCase().indexOf(cleanWord);
              wordFirstIndex[cleanWord] = sentenceStartIndex;
            }
          }
        });
    }
  });

  const sortedWords = Object.entries(wordCounts).sort(
    ([wordA, countA], [wordB, countB]) => {
      if (countB === countA) {
        // Sort by order of appearance in case of tie
        return wordFirstIndex[wordA] - wordFirstIndex[wordB];
      }
      return countB - countA;
    }
  );

  return sortedWords.slice(0, 3).map(([word]) => word);
}