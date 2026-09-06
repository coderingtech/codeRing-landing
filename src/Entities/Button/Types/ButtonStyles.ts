const ButtonStyles = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  BORDER: "border",
  TRANSPARENT: "transparent",
  PRIMARY_RED: "primaryRed",
} as const;

export type ButtonStyle = (typeof ButtonStyles)[keyof typeof ButtonStyles];

export default ButtonStyles;
