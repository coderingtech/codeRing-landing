import Languages from "@/Shared/Types/Languages.ts";

const Texts = {
  title: {
    [Languages.RU]: "Что\u00a0такое\u00a0CodeRing?",
    [Languages.EN]: "What\u00a0is\u00a0CodeRing?",
  },
  description: {
    paragraph1: {
      [Languages.RU]:
        "CodeRing\u00a0—\u00a0это виртуальный разработчик, способный выполнить задачу на\u00a0любом стеке. Работает круглосуточно, без выходных и\u00a0отпусков.",
      [Languages.EN]:
        "CodeRing is a virtual developer capable of handling tasks on any tech stack. Works 24/7, with no weekends or vacations.",
    },
    paragraph2: {
      [Languages.RU]:
        "Вам не нужно перестраивать флоу работы\u00a0—\u00a0все задачи ставятся через тасктрекер привычным образом для\u00a0любой команды. Вы получаете знакомый пулл-реквест, можете указать в\u00a0комментариях, где нужно внести правки, и\u00a0когда задача готова\u00a0—\u00a0просто вливаете изменения.",
      [Languages.EN]:
        "There is no need to restructure your workflow\u00a0—\u00a0tasks are assigned through your usual task tracker, just like with any team. You receive a familiar pull request, can specify where changes are needed in the comments, and once the task is ready\u00a0—\u00a0simply merge the changes.",
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
        [Languages.EN]: "Create a Project",
      },
      text: {
        [Languages.RU]: "Настройте рабочее пространство в пару кликов.",
        [Languages.EN]: "Set up your workspace in just a few clicks.",
      },
    },
    connectRepositories: {
      title: {
        [Languages.RU]: "Подключите репозитории",
        [Languages.EN]: "Connect Repositories",
      },
      text: {
        [Languages.RU]:
          "Предоставьте безопасный доступ к\u00a0вашему коду через официальное приложение GitHub\u00a0App. К\u00a0одному проекту можно подключить несколько репозиториев: бэк, фронт, лендинг, мобильное приложение и\u00a0так далее.",
        [Languages.EN]:
          "Grant secure access to your code via the official GitHub\u00a0App. You can connect multiple repositories to a single project: backend, frontend, landing page, mobile app, and so on.",
      },
    },
    assignTask: {
      title: {
        [Languages.RU]: "Поставьте задачу",
        [Languages.EN]: "Assign a Task",
      },
      text: {
        [Languages.RU]:
          "Просто опишите нужную фичу или баг в\u00a0тасктрекере на\u00a0человеческом языке.",
        [Languages.EN]:
          "Simply describe the required feature or bug in your task tracker using plain human language.",
      },
    },
    development: {
      title: {
        [Languages.RU]: "Разработка",
        [Languages.EN]: "Development",
      },
      text: {
        [Languages.RU]:
          "CodeRing сам поймёт, какие репозитории потребуют правок, составит план работы и\u00a0приступит к\u00a0разработке. Он создаст ветку фичи от\u00a0вашего master\u00a0/\u00a0main, напишет в\u00a0ней код, протестирует его и\u00a0перейдёт к\u00a0следующему репозиторию, если это необходимо.",
        [Languages.EN]:
          "CodeRing will automatically identify which repositories require changes, create a work plan, and begin development. It will branch off your master\u00a0/\u00a0main, write the code, run tests, and move on to the next repository if necessary.",
      },
    },
    readyPullRequest: {
      title: {
        [Languages.RU]: "Готовый пулл-реквест",
        [Languages.EN]: "Ready Pull Request",
      },
      text: {
        [Languages.RU]:
          "Вы получаете стандартный пулл-реквест на\u00a0GitHub. Проводите ревью, запрашиваете правки или сразу вливаете изменения.",
        [Languages.EN]:
          "You receive a standard pull request on GitHub. Review it, request adjustments, or merge the changes right away.",
      },
    },
  },
} as const;

export default Texts;
