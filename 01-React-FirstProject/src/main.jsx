import ReactDom from "react-dom/client"

const root = document.querySelector("#root");

function App(){
    return <h1>Hello world!!!</h1>;
}; // Here we call the function returning an HTML element as a component

ReactDom.createRoot(root).render(<App />);