# SETUP

## Installation <a name="installation"></a>

#### run following command to init and run the docker containers:

##### run frontend on 0.0.0.0

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

### Frontend

- [React](https://reactjs.org/) - main frontend library
- [Vite](https://vitejs.dev/) - modern and fast build tool
- [React Query](https://react-query-v3.tanstack.com/) - react hooks to facilitate fetching/updating/caching data on the server
- [Zustand](https://github.com/pmndrs/zustand) - easy state-management
- [Storybook](https://storybook.js.org/) - build your UI web components in isolation

#### Frontend UI

- [ChakraUI](https://chakra-ui.com/) - UI library that lets you create beautiful interfaces quickly
- [React-toastify](https://fkhadra.github.io/react-toastify/introduction) - show notifications when something happens
