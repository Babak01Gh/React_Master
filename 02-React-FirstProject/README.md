# React First Project

This project demonstrates a basic React setup where we render a simple "Hello World" message. It is built on the foundation of React installed via Vite. If you're unfamiliar with setting up React with Vite, please refer to the installation guide in the previous [README file](../00-React-Installation/README.md).

## Steps Followed

### 1. Install React

For installing React, please refer to the installation guide in the [React + Vite README.md](../00-React-Installation/README.md).

### 2. Create the `App()` Component

In the `main.jsx` file, we defined a basic `App` function that returns a heading with the text "Hello World!!!".

```jsx
function App() {
  return <h1>Hello World!!!</h1>;
}
```
### 3. Render the Component

We use ReactDOM.createRoot to render the App component into the root DOM element.
The following code selects the root element and renders the App component:
```jsx
const root = document.querySelector("#root");
ReactDOM.createRoot(root).render(<App />);
```
This will display "Hello World!!!" on the webpage.

## Additional Resources

[React Documentation](https://reactjs.org/)<br/>
[MDN Web Docs - Document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)