import Languages from "@/Shared/Types/Languages.ts";

const Texts = {
  title: {
    [Languages.RU]: "Мы\xa0используем файлы\xa0cookie",
    [Languages.EN]: "We use cookies",
  },
  text: {
    [Languages.RU]:
      "Технические\xa0необходимы для\xa0правильной работы сайта, аналитические\xa0—\xa0помогают нам делать сервис удобнее для\xa0вас",
    [Languages.EN]:
      "Technical\xa0ones are\xa0required for\xa0the\xa0website to\xa0work properly, while analytical help us make the\xa0service more\xa0convenient for\xa0you",
  },
  acceptAllButton: {
    [Languages.RU]: "Принять все",
    [Languages.EN]: "Accept all",
  },
  onlyNecessaryButton: {
    [Languages.RU]: "Только необходимые",
    [Languages.EN]: "Necessary only",
  },
} as const;

export default Texts;
