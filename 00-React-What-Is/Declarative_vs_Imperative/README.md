# 🛠️ Declarative vs Imperative Programming in React

## 🔥 What is Declarative vs Imperative?
When building UI applications, you can use **two approaches**: 
- **Declarative** (React's way)
- **Imperative** (Traditional JavaScript way)

React follows a **declarative** approach, meaning we describe **what** the UI should be, and React efficiently updates it. In contrast, imperative programming tells the system **how** to update the UI step by step.

---

## 🎯 Example: Hello world (Declarative vs Imperative)
Let's compare **React (Declarative)** vs **Vanilla JS (Imperative)** by building a Hello world .

### ✅ **Declarative Approach (React)**
```jsx
import ReactDOM from "react-dom/client";

function Counter() {
  return (
    <div>
      <h1>Hello world !</h1>
      <button>Click me</button>
    </div>
  );
}

export default Counter;
```
### ✅ **Imperative Approach (JavaScript)**
```js
const root_div = document.createElement("div");
const h1_tag = document.createElement("h1");
const btn = document.createElement("button");

h1_tag.innerText = "Helllo world !";
btn.innerText = "Click me";

root_div.appendChild(h1_tag);
root_div.appendChild(btn);