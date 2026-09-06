const Languages = {
  RU: "ru",
  EN: "en",
} as const;

export type Language = (typeof Languages)[keyof typeof Languages];

export default Languages;
