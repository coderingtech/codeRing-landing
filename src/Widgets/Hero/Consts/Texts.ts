import Languages from "@/Shared/Types/Languages.ts";

const Texts = {
  title: {
    [Languages.RU]: "Этот\u00a0сайт создал сам\u00a0себя",
    [Languages.EN]: "This\u00a0website built\u00a0itself",
  },
  subtitle: {
    [Languages.RU]:
      "Весь\u00a0код этой страницы сгенерирован с\u00a0помощью CodeRing без\u00a0ручной\u00a0работы",
    [Languages.EN]:
      "All\u00a0the\u00a0code for\u00a0this\u00a0page was\u00a0generated using CodeRing with zero manual\u00a0work",
  },
  repositoryButton: {
    [Languages.RU]: "Посмотреть репозиторий",
    [Languages.EN]: "View repository",
  },
  next: {
    [Languages.RU]: "Дальше",
    [Languages.EN]: "Next",
  },
  scrollToExplore: {
    [Languages.RU]: "Scroll to explore",
    [Languages.EN]: "Scroll to explore",
  },
} as const;

export default Texts;
