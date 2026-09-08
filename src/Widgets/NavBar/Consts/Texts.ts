import Languages from "@/Shared/Types/Languages.ts";

const Texts = {
  navigation: {
    button1: {
      [Languages.RU]: "Кнопка 1",
      [Languages.EN]: "Button 1",
    },
    button2: {
      [Languages.RU]: "Кнопка 2",
      [Languages.EN]: "Button 2",
    },
    button3: {
      [Languages.RU]: "Кнопка 3",
      [Languages.EN]: "Button 3",
    },
  },
  login: {
    [Languages.RU]: "Войти",
    [Languages.EN]: "Log in",
  },
} as const;

export default Texts;
