import Languages from "@/Shared/Types/Languages.ts";

const Texts = {
  navigation: {
    howItWorks: {
      [Languages.RU]: "Как\u00a0это работает",
      [Languages.EN]: "How\u00a0it works",
    },
    security: {
      [Languages.RU]: "Безопасность",
      [Languages.EN]: "Security",
    },
    compatibility: {
      [Languages.RU]: "Совместимость",
      [Languages.EN]: "Compatibility",
    },
    pricing: {
      [Languages.RU]: "Цена",
      [Languages.EN]: "Pricing",
    },
  },
  login: {
    [Languages.RU]: "Войти",
    [Languages.EN]: "Log in",
  },
} as const;

export default Texts;
