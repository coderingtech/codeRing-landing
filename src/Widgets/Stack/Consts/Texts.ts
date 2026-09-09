import Languages from "@/Shared/Types/Languages.ts";

const Texts = {
  title: {
    [Languages.RU]: "CodeRing подходит вам",
    [Languages.EN]: "CodeRing fits you perfectly",
  },
  subtitle: {
    [Languages.RU]:
      "CodeRing одинаково хорошо разрабатывает на\u00a0всех языках и\u00a0фреймворках. Неважно, что\u00a0вы разрабатываете и\u00a0на\u00a0чём пишете\u00a0— CodeRing ваш\u00a0выбор",
    [Languages.EN]:
      "CodeRing develops equally well across all languages and\u00a0frameworks. No\u00a0matter what you\u00a0are building or\u00a0what stack you\u00a0use\u00a0— CodeRing is\u00a0your choice",
  },
} as const;

export default Texts;
