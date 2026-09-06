const TextTypes = {
  TITLE: "title",
  TEXT: "text",
} as const;

export type TextType = (typeof TextTypes)[keyof typeof TextTypes];

export default TextTypes;
