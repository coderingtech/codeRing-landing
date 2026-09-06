const Keys = {
  ENTER: "Enter",
  ESCAPE: "Escape",
} as const;

export type Key = (typeof Keys)[keyof typeof Keys];

export default Keys;
