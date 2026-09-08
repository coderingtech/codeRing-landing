# CodeRing Landing

Лендинг проекта [CodeRing](https://github.com/coderingtech) — продажная страница с описанием продукта, преимуществами, ценами и другими маркетинговыми материалами.

**CodeRing** — это приложение для вайбкодинга, ориентированное в первую очередь на бизнес. Ничего не нужно устанавливать и настраивать: на сайте подключаешь репозиторий, ставишь задачу и получаешь готовый пулл-реквест в код.

## Стек

- [React](https://react.dev/) 19 + TypeScript
- [Vite](https://vitejs.dev/)
- SCSS Modules (CSS variables + design tokens в `src/Shared/Consts/*.module.scss`)
- Архитектура по методологии [FSD](https://feature-sliced.design/) (Feature-Sliced Design)

## Запуск проекта

```bash
# установка зависимостей
npm install

# запуск dev-сервера
npm run dev

# проверка линтером
npm run lint

# прод-сборка
npm run build

# превью прод-сборки
npm run preview
```

Dev-сервер по умолчанию поднимается на `http://localhost:5173`.

## Структура папок

Проект строится по методологии Feature-Sliced Design. Слои — сверху вниз:

```
src/
├── App.tsx                        # корневая композиция приложения
├── main.tsx
├── index.module.scss              # глобальные стили
│
├── Widgets/                       # самодостаточные блоки интерфейса
│   └── NavBar/                    # навбар (сверху на десктопе, снизу на тач-устройствах)
│       ├── NavBar.tsx
│       ├── NavBar.module.scss
│       ├── index.ts
│       └── Consts/
│           └── Texts.ts           # мультиязычные текстовки навбара
│
├── Entities/                      # бизнес-сущности и переиспользуемые атомы
│   ├── Codering/                  # логотип + название продукта
│   │   ├── Codering.tsx
│   │   ├── Codering.module.scss
│   │   ├── index.ts
│   │   └── Consts/
│   │       └── Texts.ts
│   ├── Button/                    # переиспользуемая кнопка
│   ├── Text/                      # типографика
│   ├── Logo/                      # анимированное кольцо-логотип
│   └── Surface/                   # карточка-поверхность
│
└── Shared/                        # переиспользуемое без бизнес-контекста
    ├── Hooks/                     # useIsMobile, useSystemLanguage, useMultiLanguage
    ├── Types/                     # Languages, MultiLanguage
    └── Consts/                    # design tokens (colors, sizes, breakpoints, fonts, utils)
```

Алиас `@` указывает на `src` (настроен в `vite.config.ts` и `tsconfig.app.json`).

### Правило слоёв FSD

Импорты разрешены только сверху вниз:

```
App → Pages → Widgets → Features → Entities → Shared
```

Слой не может импортировать сам себя или слои выше себя.

## Мультиязычность

Все текстовки лежат в файле `Consts/Texts.ts` своего компонента и описываются в виде объекта, ключом которого является язык из `src/Shared/Types/Languages.ts`:

```ts
import Languages from "@/Shared/Types/Languages.ts";

const Texts = {
  text1: {
    [Languages.RU]: "Текст",
    [Languages.EN]: "Text",
  },
} as const;

export default Texts;
```

Актуальный язык определяется хуком `useSystemLanguage` (по языку браузера), выбор нужной строки выполняет хук `useMultiLanguage` (`getText`). Компоненты типографики (`Text`) и кнопки (`Button`) принимают такой объект напрямую.

## Планируемая архитектура

На лендинге планируются следующие разделы: описание проекта, преимущества, цены и призывы к действию.

### Навигация

- **Десктоп:** навбар расположен сверху. Слева — логотип `Codering`, по центру — навигационные кнопки, справа — кнопка «Войти».
- **Тач-устройства:** навигация переезжает вниз экрана, на панели остаются только логотип слева и кнопка «Войти» справа.
- Переключение между вариантами реализовано через SCSS media queries на основе `Shared/Consts/Breakpoints.module.scss` (мобильная граница — `$mobile: 480px`).

### Дальнейшие шаги

- подключение роутинга (`react-router-dom` уже в зависимостях) и страниц лендинга;
- наполнение контентных секций;
- интеграция с API подключения репозиториев и генерации пулл-реквестов (актуально для будущего продуктового приложения).
