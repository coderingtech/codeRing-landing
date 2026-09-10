import Languages from "@/Shared/Types/Languages.ts";

const Texts = {
  title: {
    [Languages.RU]: "Что\u00a0такое\u00a0CodeRing",
    [Languages.EN]: "What\u00a0is\u00a0CodeRing",
  },
  description: {
    paragraph1: {
      [Languages.RU]:
        "CodeRing\u00a0—\u00a0это виртуальный разработчик, способный выполнить задачу на\u00a0любом стеке. Работает круглосуточно, без\u00a0выходных\u00a0и\u00a0отпусков",
      [Languages.EN]:
        "CodeRing is\u00a0a\u00a0virtual developer capable of\u00a0handling tasks on\u00a0any tech stack. Works 24/7, with no weekends\u00a0or\u00a0vacations",
    },
    paragraph2: {
      [Languages.RU]:
        "Вам не\u00a0нужно перестраивать флоу работы\u00a0—\u00a0все задачи ставятся через тасктрекер привычным образом для\u00a0любой команды. Вы получаете знакомый пулл-реквест, можете указать в\u00a0комментариях, где нужно внести правки, и\u00a0когда задача готова\u00a0—\u00a0просто вливаете изменения",
      [Languages.EN]:
        "There is\u00a0no need to\u00a0restructure your workflow\u00a0—\u00a0tasks are\u00a0assigned through your usual task tracker, just like with any team. You receive a\u00a0familiar pull request, can\u00a0specify where changes are\u00a0needed in\u00a0the\u00a0comments, and\u00a0once the\u00a0task is\u00a0ready\u00a0—\u00a0simply merge the\u00a0changes",
    },
  },
  howItWorksTitle: {
    [Languages.RU]: "Как\u00a0это работает",
    [Languages.EN]: "How\u00a0it works",
  },
  steps: {
    createProject: {
      title: {
        [Languages.RU]: "Создайте проект",
        [Languages.EN]: "Create\u00a0a\u00a0Project",
      },
      text: {
        [Languages.RU]: "Настройте рабочее пространство в\u00a0пару кликов",
        [Languages.EN]: "Set up\u00a0your workspace in\u00a0just a\u00a0few clicks",
      },
    },
    connectRepositories: {
      title: {
        [Languages.RU]: "Подключите репозитории",
        [Languages.EN]: "Connect Repositories",
      },
      text: {
        [Languages.RU]:
          "Предоставьте безопасный доступ к\u00a0вашему коду через официальное приложение GitHub\u00a0App. К\u00a0одному проекту можно подключить несколько репозиториев: бэк, фронт, лендинг, мобильное приложение\u00a0и\u00a0так\u00a0далее",
        [Languages.EN]:
          "Grant secure access to\u00a0your code via\u00a0the\u00a0official GitHub\u00a0App. You can\u00a0connect multiple repositories to\u00a0a\u00a0single project: backend, frontend, landing page, mobile app, and\u00a0so\u00a0on",
      },
    },
    assignTask: {
      title: {
        [Languages.RU]: "Поставьте задачу",
        [Languages.EN]: "Assign\u00a0a\u00a0Task",
      },
      text: {
        [Languages.RU]:
          "Просто опишите нужную фичу\u00a0или\u00a0баг в\u00a0тасктрекере на\u00a0человеческом языке",
        [Languages.EN]:
          "Simply describe the required feature\u00a0or\u00a0bug in\u00a0your task tracker using plain human language",
      },
    },
    development: {
      title: {
        [Languages.RU]: "Разработка",
        [Languages.EN]: "Development",
      },
      text: {
        [Languages.RU]:
          "CodeRing сам поймёт, какие репозитории потребуют правок, составит план работы\u00a0и\u00a0приступит к\u00a0разработке. Он создаст ветку фичи от\u00a0вашего master\u00a0/\u00a0main, напишет в\u00a0ней код, протестирует его\u00a0и\u00a0перейдёт к\u00a0следующему репозиторию, если это необходимо",
        [Languages.EN]:
          "CodeRing will automatically identify which repositories require changes, create a\u00a0work plan, and\u00a0begin development. It will branch off\u00a0your master\u00a0/\u00a0main, write the\u00a0code, run tests, and\u00a0move on\u00a0to\u00a0the\u00a0next repository if\u00a0necessary",
      },
    },
    readyPullRequest: {
      title: {
        [Languages.RU]: "Готовый пулл-реквест",
        [Languages.EN]: "Ready Pull Request",
      },
      text: {
        [Languages.RU]:
          "Вы получаете стандартный пулл-реквест на\u00a0GitHub. Проводите ревью, запрашиваете правки\u00a0или\u00a0сразу вливаете изменения",
        [Languages.EN]:
          "You receive a\u00a0standard pull request on\u00a0GitHub. Review it, request adjustments, or\u00a0merge the\u00a0changes right away",
      },
    },
  },
} as const;

export default Texts;
