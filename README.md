### Intro

This ia a hand-on project of [GraphQL Crash Course](https://www.youtube.com/watch?v=BcLNfwF04Kw) by Brad Traversy. Also, this is the first MERN project using **GraphQL**. In the frontend, **Apollo Client** was introduced to handle the GraphQL API to attain CRUD functionality.

---

### Demo

![Demo](https://i.imgur.com/UGyah6v.gif)

---

### Features & Technologies

- React
- Express / Node.js
- MongoDB
- GraphQL
- Apollo Client (useQuery & useMutation)
- Bootstrap 5

---

### Getting started

Clone the repository and install the dependencies:

```bash
$ git clone https://github.com/asgoshawk/project-management-app.git
$ cd project-management-app
$ npm install

# Don't forget the modules in the client directory
$ cd client
$ npm install

# Back to the root directory
$ cd ..
```

Add a `.env` file in the root directory for enviromental variables:

```bash
$ touch .env
```

In the `.env`, three variables must be defined:

```
NODE_ENV='development'
PORT=5000
MONGO_URI=<Your MongoDB URI>
```

And then start the app by running command:

```bash
# Use concurrently to run both frontend and backend
$ npm run dev
```
