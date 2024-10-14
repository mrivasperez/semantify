import getSentencePercentage from "./getSentencePercentage";
import getTopWords from "./getTopWords";
import { AnalysisRequest, AnalysisResult } from "./types";

export function semantify({
  text_body,
  keyword_macros,
  analysis_type
}: AnalysisRequest): AnalysisResult[] {
  let results: AnalysisResult[];
  // analysis_type handling
  switch (analysis_type) {
    case "top_words":
      results = keyword_macros.map((keyword_macro) => ({
        keyword_macro,
        analysis_type,
        value: getTopWords(text_body, keyword_macro)
      }));

      return results;

    case "sentence_percentage":
      results = keyword_macros.map((keyword_macro) => ({
        keyword_macro,
        analysis_type,
        value: getSentencePercentage(text_body, keyword_macro)
      }));
      return results;

    default:
      throw Error("Invalid operation attempted. Check `analysis_type`.");
  }
}
