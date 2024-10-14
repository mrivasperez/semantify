import analyzeText from './analyzeText';

export default function getSentencePercentage(
  text: string,
  keywordMacro: string
): number {
  const sentences = text.split(/[.!?]/).filter((s) => s.trim() !== '');
  const matchingSentences = sentences.filter((sentence) =>
    analyzeText(sentence, keywordMacro)
  );
  return matchingSentences.length / sentences.length;
}