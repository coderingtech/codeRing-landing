import Languages from "@/Shared/Types/Languages.ts";

const Texts = {
  slogan: {
    [Languages.RU]: "Один инструмент, чтобы править всем кодом",
    [Languages.EN]: "One tool to rule all your code",
  },
  publicOffer: {
    [Languages.RU]: "Публичная оферта",
    [Languages.EN]: "Public Offer",
  },
  privacyPolicy: {
    [Languages.RU]: "Политика конфиденциальности",
    [Languages.EN]: "Privacy Policy",
  },
  termsOfUse: {
    [Languages.RU]: "Условия использования",
    [Languages.EN]: "Terms of Use",
  },
} as const;

export default Texts;
