# React - On The Loose

## Docker - Nginx - Typescript - Vite - Vitest

## React - React Query - Zustand - Ky - Storybook

## Chakra UI - Sass

## Installation <a name="installation"></a>

#### run following command to init and run the docker containers:

##### frontend served on http://0.0.0.0/

##### storybook served on http://0.0.0.0:6006/

```
make init
```

#### next time run following command to prevent losing your data:

```
make up
```

#### stop your running containers:

```
make down
```

##### everything is build with docker & docker-compose to prevent overhead for deployment and server setup:

## Libraries/frameworks

### Development

- [Husky](https://github.com/typicode/husky/) - modern native Git hooks made easy
- [ESLint](https://eslint.org/) - Find and fix problems in your JavaScript code

### Frontend

- [React](https://reactjs.org/) - main frontend library
- [Vite](https://vitejs.dev/) - modern and fast build tool
- [Vitest](https://vitest.dev/) - blazing fast unit test framework
- [React Query](https://react-query-v3.tanstack.com/) - react hooks to facilitate fetching/updating/caching data on the server
- [Zustand](https://github.com/pmndrs/zustand) - easy state-management
- [Storybook](https://storybook.js.org/) - build your UI web components in isolation
- [Ky](https://github.com/sindresorhus/ky) - tiny and elegant HTTP client based on the browser Fetch API
- [ChakraUI](https://chakra-ui.com/) - UI library that lets you create beautiful interfaces quickly
