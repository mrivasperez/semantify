# semantify
**A semantic analysis package for text documents and messages.**

`semantify` is an NPM package designed for performing semantic analysis on text documents and long user messages. It utilizes keyword-based filtering and analysis techniques to gain insights into the content's context, intent, and purpose. This library is ideal for workflow automation scenarios where understanding the meaning behind text is crucial.

By using semantify, you can analyze text data and gain insights into its meaning, intent, and purpose. The package is flexible enough to handle a wide variety of text content and can be used in various workflows to automate text analysis processes.

## Getting Started

Install: `npm install semantify`.

The `semantify` function (See [`index.ts`](./src/index.ts)) is the core of this library. It takes three parameters:

1. `text_body`: The text you want to analyze. This can be a string containing a document, a user message, or any other form of written communication.
2. `keyword_macros`: An array of strings defining keyword criteria for analysis. Each string represents a specific keyword macro.
3. `analysis_type`: A string specifying the type of analysis to perform. Currently, two analysis types are supported:
    - `sentence_percentage`: Calculates the percentage of sentences in the text that match the specified keyword macros.
    - `top_words`: Extracts the top three most frequent words from sentences matching the keyword macros.

### Example Usage
```typescript
import semantify from 'semantify';

const textBody = "This is a text document with some keywords. We are trying to understand the meaning behind it. This sentence should be included. This sentence should be excluded.";
const keywordMacros = ["keywords", "understand", "-excluded"];

// Perform sentence percentage analysis
const sentencePercentageResults = semantify({
  text_body: textBody,
  keyword_macros: keywordMacros,
  analysis_type: "sentence_percentage",
});

console.log("Sentence Percentage Results:", sentencePercentageResults);

// Perform top words analysis
const topWordsResults = semantify({
  text_body: textBody,
  keyword_macros: keywordMacros,
  analysis_type: "top_words",
});

console.log("Top Words Results:", topWordsResults);
```
## Additional Details
### Keyword Macros
Keyword macros are defined using keywords and operators. The "-" indicates that the keyword must be absent.

For example, the keyword macro `["keywords", "understand", "-excluded"]` will only match sentences containing both "keywords" and "understand" but not "excluded".

### Sentence Percentage
The `sentence_percentage` analysis type calculates the percentage of sentences in the text that match the provided keyword macros.

Each sentence is evaluated against each keyword macro, and the percentage is calculated as the ratio of matching sentences to the total number of sentences.

### Top Words
The `top_words` analysis type extracts the top three most frequent words from sentences that match the keyword macros.

Words are ranked by their frequency in the matching sentences, excluding common filler words and the keywords themselves.

## Contributing
Contribution are welcome! Please open an issue or submit a pull request.

## License
MIT License
