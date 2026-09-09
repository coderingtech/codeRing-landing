import Languages from "@/Shared/Types/Languages.ts";

const Texts = {
  title: {
    [Languages.RU]: "CodeRing подходит вам",
    [Languages.EN]: "CodeRing\u00a0fits you\u00a0perfectly",
  },
  subtitle: {
    [Languages.RU]:
      "CodeRing\u00a0одинаково хорошо разрабатывает на\u00a0всех языках и\u00a0фреймворках. Неважно, что вы разрабатываете и\u00a0на\u00a0чём пишете\u00a0—\u00a0CodeRing ваш выбор",
    [Languages.EN]:
      "CodeRing develops equally\u00a0well across all languages and\u00a0frameworks. No\u00a0matter what you are\u00a0building or\u00a0what stack you use\u00a0—\u00a0CodeRing is\u00a0your choice",
  },
} as const;

export default Texts;
