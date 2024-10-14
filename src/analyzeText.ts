export default function analyzeText(
    text: string,
    keywordMacro: string
  ): boolean {
    const keywords = keywordMacro
      .split(/([+-])/g)
      .filter((word) => word.trim() !== '');
  
    let includeSentence = true;
    for (let i = 0; i < keywords.length; i += 2) {
      const keyword = keywords[i].toLowerCase();
      const operator = i > 0 ? keywords[i - 1] : '+';
      const keywordExists = text.toLowerCase().includes(keyword);
  
      if (operator === '+' && !keywordExists) {
        includeSentence = false;
        break;
      } else if (operator === '-' && keywordExists) {
        includeSentence = false;
        break;
      }
    }
    return includeSentence;
  }