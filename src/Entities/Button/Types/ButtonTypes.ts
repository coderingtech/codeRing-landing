const ButtonTypes = {
  BUTTON: "button",
  SUBMIT: "submit",
  RESET: "reset",
} as const;

export type ButtonType = (typeof ButtonTypes)[keyof typeof ButtonTypes];

export default ButtonTypes;
