# ⚛️ React Props (Properties)

## 📌 What are Props?
In React, **props** (short for "properties") are used to **pass data from one component to another**.  
They make components **reusable** and **dynamic**.

---

## 🚀 **How to Use Props in React**

### 🟡 **1. Passing Props to a Component**
Props are passed as **attributes** to components.

#### ✅ **Example:**
```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Alice" />;
}

// The output will be `Hello, Alice!`
```

### **🟢 2. Destructuring Props**
You can destructure props for **cleaner code**.


#### ✅ **Example:**
```jsx
function User({ firstName, age }) {
  return <p>{firstName} is {age} years old.</p>;
}

function App() {
  return <User firstName="Bob" age={25} />;
}
```

### **🟠 3. Default Props**
You can set **default values** for props.

#### ✅ **Example:**
```jsx
function Button({ label = "Click Me" }) {
  return <button>{label}</button>;
}

function App() {
  return (
    <>
      <Button />              {/* Uses default label */}
      <Button label="Submit" /> {/* Uses custom label */}
    </>
  );
}
```
### **🟣 4. Props with Components Arrays (.map())**
Props are useful for **rendering lists**.

#### ✅ **Example:**
```jsx
const users = ["Alice", "Bob", "Charlie"];

function UserList() {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}
```

[Key In React README](../Key_inReact/README.md)

### **🟤 5. Passing Functions as Props (Callback Props)**
Pass functions to **handle events** in child components.



#### ✅ **Example:**
```jsx
function Button({ onClick, label }) {
  return <button onClick={onClick}>{label}</button>;
}

function App() {
  const handleClick = () => alert("Button clicked!");
  
  return <Button label="Click Me" onClick={handleClick} />;
}
```
<br>

## **🚫 Common Mistakes with Props**
### ❌ Forgetting to use key when rendering lists.
### ❌ Trying to change props directly (props are read-only).
### ❌ Not setting default values for optional props.

<br>

## **📌 Best Practices for Props:**
### ✅ Use destructuring for cleaner code.
### ✅ Name props clearly for readability.
### ✅ Use PropTypes or TypeScript to validate props.



