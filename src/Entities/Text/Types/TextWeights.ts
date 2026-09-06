const TextWeights = {
  LIGHT: "light",
  REGULAR: "regular",
  MEDIUM: "medium",
  SEMIBOLD: "semibold",
  BOLD: "bold",
} as const;

export type TextWeight = (typeof TextWeights)[keyof typeof TextWeights];

export default TextWeights;
