const LogoStyles = {
  WHITE: "white",
  BLACK: "black",
} as const;

export type LogoStyle = (typeof LogoStyles)[keyof typeof LogoStyles];

export default LogoStyles;
