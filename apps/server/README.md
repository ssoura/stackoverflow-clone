## Built using

- [Node.js](https://nodejs.org/en/) - Runtime environment for JS
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) - To build a self-documenting GraphQL API server
- [MongoDB](https://www.mongodb.com/) - Database to store document-based data
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js
- [JSON Web Token](https://jwt.io/) - A standard to secure/authenticate HTTP requests
- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs) - For hashing passwords
- [Mongoose Unique Validator](https://www.npmjs.com/package/mongoose-unique-validator) - Plugin for better error handling of unique fields within Mongoose schema
- [Dotenv](https://www.npmjs.com/package/dotenv) - To load environment variables from a .env file

## Usage

Note: Make sure that you have installed 'nodemon' as global package.
Create a .env file in server directory and add the following:

```
MONGODB_URI = "Your Mongo URI"
PORT = 4000
SECRET = "Your JWT secret"

```

```
npm install
npm run dev
```
