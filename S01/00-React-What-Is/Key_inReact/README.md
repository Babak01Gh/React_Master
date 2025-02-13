# ⚛️ Keys in React Rendering

## 📌 What are Keys in React?
In React, **keys** are special attributes used to **identify elements** in a list.  
They help React **track and update components efficiently** when the list changes.

**Imagine you have a list of items and each item has an id like (1, 2, 3) for 1st, 2nd, 3rd item in the list. so now you are deleting the 2nd item from list but each one has the same attributes, classNames, etc.
 to delete the selected item we need a unique attribute or property to clearly find the item. and that is the `Key`.**

---

## 🛠️ **Why are Keys Important?**
✅ **Improves performance** by minimizing DOM updates.  
✅ **Helps React identify which items changed, added, or removed.**  
✅ **Prevents bugs** when dynamically rendering lists.  

---

## 🚀 **How to Use Keys in React**

### 🟡 **1. Using `key` with `.map()`**
The most common use of keys is when rendering lists with `.map()`.

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

### **🟠 2. Using Unique IDs as Keys (Best Practice)**
It’s better to use **unique IDs** instead of **array indexes** as keys.

#### ✅ **Example:**
```jsx
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

function UserList() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```
<br>

## **🟣 When to Use `index` as a Key**
**You can use index only when:**
#### ✅ The list is static and will not change (e.g., static navigation menus).
**That means: when you will do actions like Deleting an item, Updating an item and totally CRUD on your list it's better not to use indexes here. But if your list will be the same as first in whole life of project you can also use `index` instead of `ID`.**
#### ✅ The list does not have unique IDs.