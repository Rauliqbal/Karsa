# EXPRESS STACK - Node Server Boilerplate

Boilerplate/starter project to easily create RESTful APIs using Node.js, Express, and Mongoose.
Simply create a new Express application with one command

## Quick Started

### Running Server

```bash
npm run dev
```

### Deploy 
```bash
npm run deploy
```

and now you can development application

## Features

- **Web Framework** : using [Express JS](https://expressjs.com/)
- **Database No SQL** : [Mongo DB](https://www.mongodb.com/) with object data modeling [Mongoose](https://mongoosejs.com/)
- **Logging** : using [Morgan](https://www.npmjs.com/package/morgan)
- **CORS** : Cross-origin resource sharing using [CORS](https://www.npmjs.com/package/cors)
- **Environment variables** : using [Dotenv](https://www.npmjs.com/package/dotenv)
- Authentication and Authorization with **jsonwebtoken** [JWT](https://www.npmjs.com/package/jsonwebtoken)

# Project Structure

```
config\         # Configuration & Database function
src\
 |--controllers\    # Controllers function
 |--middlewares\    # Custom express middlewares
 |--models\         # Mongoose models
 |--router\         # Routes
 |--docs\           # Swagger files
.env            # Environment variables
index.js        # App entry point
```
