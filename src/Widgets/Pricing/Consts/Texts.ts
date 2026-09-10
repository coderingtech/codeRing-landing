import Languages from "@/Shared/Types/Languages.ts";

const Texts = {
  title: {
    [Languages.RU]: "Прозрачные цены",
    [Languages.EN]: "Transparent pricing",
  },
  subtitle: {
    [Languages.RU]:
      "В\u00a0CodeRing нет подписок с\u00a0фиксированной стоимостью\u00a0—\u00a0вы платите только за\u00a0реально выполненную работу. Все пулл-реквесты стоят по-разному, их цена зависит от\u00a0размера проекта и\u00a0объёма задачи",
    [Languages.EN]:
      "CodeRing has no fixed-price subscriptions\u00a0—\u00a0you only pay for\u00a0actual work done. Every pull request varies in\u00a0cost depending on\u00a0the\u00a0project size and\u00a0task complexity",
  },
  realCase: {
    title: {
      [Languages.RU]: "Реальный кейс\u00a0—\u00a0этот лендинг",
      [Languages.EN]: "Real-world case\u00a0—\u00a0this landing page",
    },
    text: {
      [Languages.RU]:
        "Весь этот сайт был полностью создан с\u00a0помощью CodeRing. Процесс разработки был построен по\u00a0стандартному Agile-процессу: менеджмент ставит задачи, а\u00a0ИИ-разработчик их выполняет. Всего для\u00a0создания этого сайта было поставлено 20\u00a0задач. В\u00a0итоге 20\u00a0пулл-реквестов суммарно стоили меньше 5\u00a0долларов",
      [Languages.EN]:
        "This entire website was\u00a0built completely using CodeRing. The\u00a0development was\u00a0driven by\u00a0a\u00a0standard Agile workflow: management assigns tasks, and\u00a0the\u00a0AI developer delivers them. In\u00a0total, 20\u00a0tasks were\u00a0assigned to\u00a0build this website. As\u00a0a\u00a0result, 20\u00a0pull requests combined cost less than\u00a0$5",
    },
  },
} as const;

export default Texts;
