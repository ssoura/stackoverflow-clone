## Built using


- [ReactJS](https://reactjs.org/) - Frontend framework
- [Apollo Client](https://www.apollographql.com/docs/react/) - State management library to manage both local and remote data with GraphQL
- [Context API w/ hooks](https://reactjs.org/docs/context.html) - For state of user, toast notifs, theme etc.
- [React Router](https://reactrouter.com/) - For general routing & navigation
- [React Hook Form](https://react-hook-form.com/) - For flexible forms
- [Material-UI w/ lots of CSS customisations](https://material-ui.com/) - UI library
- [Yup](https://github.com/jquense/yup) - For form validation
- [date-fns](https://date-fns.org/) - For manipulating & formatting of dates


## Usage

#### Server:

Note: Make sure that you have installed 'nodemon' as global package.
Create a .env file in server directory and add the following:

```
MONGODB_URI = "Your Mongo URI"
PORT = 4000
SECRET = "Your JWT secret"

```

#### Client:

Open client/src/backendUrl.js & change "backend" variable to `"http://localhost:4000"`

#### Run:

```
npm install
npm run dev
```
