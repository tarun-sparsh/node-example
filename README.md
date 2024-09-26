# Basic Node.js App Boilerplate

This project provides a simple boilerplate for Node.js applications. It includes the basic structure and configuration to get you started quickly.

## Features

- Basic Express.js server setup
- Environment configuration using dotenv
- Structured folder organization for routes, controllers, views, and more
- npm scripts for development and production
- API and web route separation
- EJS templating engine setup
- Static file serving
- Basic error handling middleware

## Project Structure

```
project-root/
├── src/
│   ├── api/
│   │   └── routes/
│   │       └── apiRoutes.js
│   ├── web/
│   │   └── routes/
│   │       └── webRoutes.js
│   ├── views/
│   │   ├── layouts/
│   │   │   └── main.ejs
│   │   ├── partials/
│   │   │   ├── header.ejs
│   │   │   └── footer.ejs
│   │   └── pages/
│   │       └── home.ejs
│   ├── public/
│   │   ├── css/
│   │   │   └── styles.css
│   │   ├── js/
│   │   │   └── main.js
│   │   └── images/
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   └── book.js
│   ├── controllers/
│   │   ├── apiControllers.js
│   │   └── webControllers.js
│   ├── middleware/
│   │   └── errorHandler.js
│   └── utils/
│       └── logger.js
├── tests/
├── .gitignore
├── app.js
├── package.json
└── README.md
```

## Getting Started

1. Clone this repository
2. Run `npm install` to install dependencies
3. Create a `.env` file based on `.env.example`
4. Run `npm run dev` to start the development server

## Scripts

- `npm run dev`: Starts the development server with nodemon
- `npm start`: Starts the production server

## License

This project is open-source and available under the MIT License.