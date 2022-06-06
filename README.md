# Red Runner

Игра и форум реализуемые с помощью:

- [React 18](https://reactjs.org/) - библиотека для создания пользовательских интерфейсов
- [Redux Toolkit](https://redux-toolkit.js.org/) - инструмент для эффективной разработки на Redux
- [React router](https://reactrouter.com/) - SPA роутинг на стороне клиента
- [Typescript](https://www.typescriptlang.org/) - надстройка над JS со строгой типизацией
- [Canvas API](https://developer.mozilla.org/ru/docs/Web/API/Canvas_API) - "холст", на котором реализуется игра
- [Axios](https://axios-http.com/) - библиотека для работы с API
- [react-hook-form](https://react-hook-form.com/) - производительная библитека для работы с формами
- [yup](https://github.com/jquense/yup) - декларативный способ валидации инпутов
- [react-use-error-boundary](https://github.com/tatethurston/react-use-error-boundary) - хук, позволяющий ипользовать Error Boundary в функциональных компонентах
- [react-hot-toast](https://react-hot-toast.com/) - библиотека для вывода нотификационных сообщений пользователю
- [Tailwind CSS](https://tailwindcss.com/) - атомарные классы для стилизации компонентов
- [DaisyUI](https://daisyui.com/) - библиотека компонентов, написанная на Tailwind
- [Jest](https://jestjs.io/ru/) / [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) - библиотека для модульного тестирования компонентов
- [Prettier](https://prettier.io/) / [ESLint (Airbnb)](https://github.com/airbnb/javascript) / [.editorconfig](https://editorconfig.org/) - описывают правила стиля кода
- [Webpack](https://webpack.js.org/) - собирает и оптимизирует сборку для релиза и разработки

## Игровые ресурсы

Для графики и анимации используется сборник ассетов - [platform-game-assets](https://bayat.itch.io/platform-game-assets)

## API

Часть программного интерфейса приложения предоставлено площадкой Яндекс Практикум [Swagger](https://ya-praktikum.tech/api/v2/swagger/), а для форума будет реализован силами команды

## Сборка и локальный запуск проекта

Для начала склонируйте проект и установите зависимости:

```sh
npm install
```

Для запуска проекта в режиме разработки запустите команду:

```sh
npm run dev
```

Чтобы собрать проект:

```sh
npm run build
```

Чтобы запустить проект на локальном сервере:

```sh
npm run start
```

Чтобы форматировать код:

```sh
npm run format
```

Проверка кода с помощью Eslint:

```sh
npm run lint:fix
```

Запуск тестов:

```sh
npm run test
```
