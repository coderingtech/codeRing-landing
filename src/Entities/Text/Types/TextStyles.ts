const TextStyles = {
  WHITE: "white",
  BLACK: "black",
  SUBTITLE: "subtitle",
  ERROR: "error",
  SUCCESS: "success",
} as const;

export type TextStyle = (typeof TextStyles)[keyof typeof TextStyles];

export default TextStyles;
