import Languages from "@/Shared/Types/Languages.ts";

const Texts = {
  title: {
    [Languages.RU]: "Попробуйте бесплатно",
    [Languages.EN]: "Try for free",
  },
  subtitle: {
    [Languages.RU]:
      "Зарегистрируйтесь\u00a0и\u00a0получите 6\u00a0пулл-реквестов в\u00a0подарок. Автоматизируйте разработку уже\u00a0сегодня!",
    [Languages.EN]:
      "Sign\u00a0up\u00a0and get 6\u00a0free pull requests. Automate your development workflow\u00a0today!",
  },
  button: {
    [Languages.RU]: "Зарегистрироваться бесплатно",
    [Languages.EN]: "Sign\u00a0up\u00a0for\u00a0free",
  },
} as const;

export default Texts;
