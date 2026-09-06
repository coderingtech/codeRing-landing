const TextSizes = {
  XS: "xs",
  S: "s",
  M: "m",
  L: "l",
} as const;

export type TextSize = (typeof TextSizes)[keyof typeof TextSizes];

export default TextSizes;
