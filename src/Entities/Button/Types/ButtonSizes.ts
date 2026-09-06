const ButtonSizes = {
  S: "s",
  M: "m",
  L: "l",
} as const;

export type ButtonSize = (typeof ButtonSizes)[keyof typeof ButtonSizes];

export default ButtonSizes;
