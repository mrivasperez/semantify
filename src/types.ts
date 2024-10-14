export interface AnalysisRequest {
    text_body: string;
    keyword_macros: string[];
    analysis_type: "top_words" | "sentence_percentage";
  }
  
  export interface AnalysisResult {
    keyword_macro: string;
    analysis_type: "top_words" | "sentence_percentage";
    value: string[] | number;
  }