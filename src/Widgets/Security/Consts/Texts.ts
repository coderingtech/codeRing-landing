import Languages from "@/Shared/Types/Languages.ts";

const Texts = {
  title: {
    [Languages.RU]: "Безопасность",
    [Languages.EN]: "Security",
  },
  subtitle: {
    [Languages.RU]:
      "Ваш\u00a0код в\u00a0надёжных руках. CodeRing спроектирован так, чтобы гарантировать полную конфиденциальность\u00a0и\u00a0защиту ваших\u00a0данных",
    [Languages.EN]:
      "Your\u00a0code is\u00a0in\u00a0safe hands. CodeRing is\u00a0designed from\u00a0the\u00a0ground up\u00a0to\u00a0ensure complete confidentiality\u00a0and\u00a0data\u00a0protection",
  },
  cards: {
    zeroDataRetention: {
      title: {
        [Languages.RU]: "Мы\u00a0не\u00a0храним ваш\u00a0код",
        [Languages.EN]: "Zero data retention",
      },
      text: {
        [Languages.RU]:
          "Весь\u00a0процесс разработки\u00a0и\u00a0тестирования приложения происходит в\u00a0одноразовом Docker-контейнере. После пуша изменений контейнер полностью\u00a0уничтожается",
        [Languages.EN]:
          "The\u00a0entire process of\u00a0developing\u00a0and\u00a0testing the\u00a0application takes place inside an\u00a0ephemeral Docker container. Once the\u00a0changes are\u00a0pushed, the\u00a0container is\u00a0completely\u00a0destroyed",
      },
    },
    minimalContext: {
      title: {
        [Languages.RU]: "Минимальный контекст",
        [Languages.EN]: "Minimal context",
      },
      text: {
        [Languages.RU]:
          "Нейросеть\u00a0видит только небольшие участки кода, релевантные для\u00a0задачи",
        [Languages.EN]:
          "The\u00a0AI only sees small, isolated snippets of\u00a0code directly relevant to\u00a0the\u00a0task",
      },
    },
    repositoryAccess: {
      title: {
        [Languages.RU]: "Доступ к\u00a0репозиториям",
        [Languages.EN]: "Repository access",
      },
      text: {
        [Languages.RU]:
          "Подключение\u00a0репозитория к\u00a0проекту происходит через официальное GitHub\u00a0App. Мы запрашиваем минимальный скоуп данных, необходимый для\u00a0работы. Вы видите всё, что CodeRing получает, сами выбираете, к\u00a0каким репозиториям открыть доступ\u00a0и\u00a0можете отозвать его в\u00a0любой\u00a0момент",
        [Languages.EN]:
          "Connecting\u00a0a\u00a0repository is\u00a0handled via the\u00a0official GitHub\u00a0App. We request the\u00a0minimum scope of\u00a0data required for\u00a0operation. You see everything CodeRing receives, choose which repositories to\u00a0grant access to, and\u00a0can\u00a0revoke it\u00a0at\u00a0any\u00a0time",
      },
    },
    controlOverChanges: {
      title: {
        [Languages.RU]: "Контроль над\u00a0изменениями",
        [Languages.EN]: "Control over changes",
      },
      text: {
        [Languages.RU]:
          "CodeRing\u00a0не\u00a0вносит изменения напрямую. Вы получаете пулл-реквест\u00a0и\u00a0после код-ревью сами вливаете изменения в\u00a0код",
        [Languages.EN]:
          "CodeRing\u00a0never merges code directly. You receive a\u00a0pull request\u00a0and, after a\u00a0code review, merge the\u00a0changes into the\u00a0codebase\u00a0yourself",
      },
    },
  },
} as const;

export default Texts;
