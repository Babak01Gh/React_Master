# 📦 `package.json` - The Core of a Node.js Project

## 🔥 What is `package.json`?
`package.json` is a fundamental file in **Node.js** and **JavaScript** projects that:
- Stores **project metadata** (name, version, description, author, etc.).
- Defines **dependencies** and **devDependencies** for the project.
- Specifies **scripts** for automating tasks (e.g., start, test, build).
- Helps manage project consistency across environments.

You can generate a `package.json` file automatically using:
```bash
npm init -y   # Creates package.json with default values
```
## 📦 Basic structure of `package.json`

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A sample Node.js project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "jest": "^29.0.0"
  }
}
```

### Each section has a specific purpose:

`"name"` → Project name.\
`"version"` → Project version.\
`"description"` → A brief explanation of the project.\
`"main"` → The main entry file.\
`"scripts"` → Commands to automate tasks.\
`"dependencies"` → Packages required for the app to run.\
`"devDependencies"` → Packages needed for development only.


## ✅ Scripts
The scripts section in package.json allows you to define custom terminal commands for your project.

## ✅ Dependencies
dependencies are the packages required for the application to run in production. These are essential for your app to function properly.\
that means if someone else has your code on their PC so they can find out which libraries have been used in your application then they can install them easily.

## ✅ DevDependencies
devDependencies are packages needed only for development, such as testing frameworks, linters, or build tools. These are not required in production. like packages for debugging and something else.