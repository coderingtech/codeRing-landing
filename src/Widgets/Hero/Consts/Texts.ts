import Languages from "@/Shared/Types/Languages.ts";

const Texts = {
  title: {
    [Languages.RU]: "Этот сайт создал сам себя",
    [Languages.EN]: "This website built itself",
  },
  subtitle: {
    [Languages.RU]:
      "Весь код этой страницы сгенерирован с помощью CodeRing без ручной работы",
    [Languages.EN]:
      "All the code for this page was generated using CodeRing with zero manual work.",
  },
  repositoryButton: {
    [Languages.RU]: "Посмотреть репозиторий",
    [Languages.EN]: "View repository",
  },
} as const;

export default Texts;
