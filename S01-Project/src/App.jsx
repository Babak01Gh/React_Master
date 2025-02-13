import FoodList from './Components/FoodList.jsx'
import './App.css'

function App() {
    return (
        <div className="container">
            <h1 className="header_text">Food Carts</h1>
            <div className="top_selects">
                <span>All</span>
                <span>Cold</span>   
                <span>Hot</span> 
                <span>Drinks</span>
            </div>
            <FoodList />
        </div>        
    )
}

export default App