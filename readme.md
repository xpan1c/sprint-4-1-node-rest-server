# 🚀 Sprint-4-1-Node-Rest-Server

⚡ "Learning to build a server that exposes a REST API.

### 📋 GitHub Actions Workflow:

[![🏠 Build](https://github.com/xpan1c/sprint-4-1-node-rest-server/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/xpan1c/sprint-4-1-node-rest-server/actions/workflows/build.yml)

This GitHub Actions workflow automatically builds and tests the application when code changes are pushed to the master branch or a pull request targeting the master branch is opened or synchronized.

### 📥 Installation

To get started with this template, you first need to clone the repository:

```bash
git clone https://github.com/xpan1c/sprint-4-1-node-rest-server.git
```

Then, install the project dependencies:

```bash
npm install
```

### 🏁 How To Start

To start the server in development mode, run the following script:
```bash
npm run dev
```
Then, open http://localhost:8000 to access the server.


### 🚀 Production

To run the server in production mode, first build the TypeScript code into JavaScript by running:

```bash
npm run build
```

This will generate the dist directory with the compiled JavaScript files.

Then, start the server by running:

```bash
npm start
```

This will start the server and make it available at http://localhost:8000.


### 🏗️ Scripts
This project comes with several predefined scripts in the package.json file:

```test```: Runs tests using Jest.

```lint```: Runs ESLint to check code quality.

```lint:fix```: Runs ESLint to fix code style issues.

```dev```: Starts the development server with ts-node-dev and allows debugging

```build```: Removes the ./dist folder and compiles the TypeScript code into JavaScript in the ./dist folder.

```start```: Starts the server in production using the compiled files in the dist/ folder.

### 📝 Dependencies

- cors: middleware for handling Cross-Origin Resource Sharing (CORS)

- dotenv: loads environment variables from a .env file

- express: web framework for Node.js

- express-promise-router: promise-based router for Express

- helmet: middleware for adding security headers

- mongodb: driver for MongoDB
- 
- glob: file matching pattern library

- multer: middleware for handling 'multipart/form-data', primarily used for uploading files

### 🛠️ Dev Dependencies

- @types/cors: TypeScript definitions for cors

- @types/express: TypeScript definitions for express

- @types/jest: TypeScript definitions for jest

- @types/multer: TypeScript definitions for multer

- eslint: linter for TypeScript

- eslint-config-codely: ESLint configuration used by CodelyTV

- mysql: MySQL driver for Node.js

- rimraf: cross-platform tool for removing files and directories

- ts-jest: TypeScript preprocessor for Jest

- ts-node-dev: TypeScript execution and development environment for Node.js

- tsc-watch: TypeScript compiler with file watching

## Adding Routes

The application uses a dynamic approach to register routes by utilizing the `glob` and `path` modules. The `registerRoutes` function in the `index.ts` file scans the directory for route modules and registers them automatically.

## Documentation

You can find the API documentation [here](https://documenter.getpostman.com/view/23686333/2s93m33P3v). It provides detailed information about the available endpoints and how to interact with them.
