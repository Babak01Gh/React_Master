# ⚛️ React Components & Component Separation

## 🔥 What are React Components?
In React, **components** are **reusable and independent building blocks** that define the UI. Each component manages its own logic and rendering, making applications **modular** and **scalable**.

---

## 🏗️ **Types of React Components**
React components can be classified into two main types:

### **Functional Components (Recommended)**
- Modern approach using **functions**.
- Can use **React Hooks** (`useState`, `useEffect`, etc.).
- More readable, concise, and better optimized.

✅ **Example: Functional Component**
```jsx
function Greeting() {
  return <h1>Hello, World! 👋</h1>;
}

export default Greeting;
```

### **Class Components (Not Recommended)** 

❌ **Example: Functional Component**
```jsx
import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return <h1>Hello, World! 👋</h1>;
  }
}

export default Greeting;
```
<br>

## 🏆 **Component Best Practices**
### ✅ Use Functional Components → Hooks provide better performance and cleaner syntax
### ✅ Separate Components into Different Files → Organizes code structure.
### ✅ Keep Components Small & Focused → Each component should have a single responsibility.
### ✅ Use Props for Dynamic Components → Pass data into components via props.
### ✅ Create a components/ Folder → Helps organize reusable components.

<br>
<hr>
<br>
<br>

# 🏗️ **Why Separate Components?**

Imagine building a house – you wouldn't build the entire house as a single block, right? You'd have separate parts like:

✅ Doors\
✅ Windows\
✅ Rooms\
\
React apps work the same way! Instead of one big file, we split the app into small, reusable **components**.

## 📁 How to Separate Components?
### ✅ 1. Create a `/components` Folder
Keep all your components in a separate folder inside `src/`.

```dir
/src
  /components
    Header.jsx
    Footer.jsx
    Button.jsx
  App.jsx
  index.jsx
```

### ✅ 2. Create Components in Separate Files
Instead of writing everything in `App.jsx`, we create individual files for each component.

**📌 Example: Creating a Button Component**

📁 `/components/Button.jsx`
```jsx
function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

export default Button;
```
Now, we can use this Button anywhere in our app.

### ✅ 3. Import Components Where Needed
Once we separate components, we can import and use them.

**📌 Example: Using Components in `App.jsx`**

📁 `App.jsx`
```jsx
import Button from "./components/Button";

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Button text="Click Me!" onClick={() => alert("Button Clicked!")} />
    </div>
  );
}

export default App;
```
<br>

# 🎯 Why Separate Components?
### ✅ Reusability – Use the same component multiple times.
### ✅ Better Organization – Code is clean and structured.
### ✅ Easy to Debug – Fix issues faster.
### ✅ Scalability – Add new features easily.

