# ⚛️ Dynamic Class Names in React

## 📌 What are Dynamic Class Names?
In React, **dynamic class names** allow you to **conditionally change styles** based on component state or props.

### ✅ **Basic Example**
```jsx
function Button({ isActive }) {
  return (
    <button className={isActive ? "btn-active" : "btn-inactive"}>
      {isActive ? "Active" : "Inactive"}
    </button>
  );
}
