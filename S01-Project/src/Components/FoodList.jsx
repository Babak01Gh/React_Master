import FoodCard from "./FoodCard.jsx"

const foods = [
    {
        id: 1,
        imageUrl: "./src/assets/cold_dinner.webp",
        title: "Cold Dinner",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ipsam.",
        rate: "4",
        badges: ["Cold", "SeaFood"]
    },
    {
        id: 2,
        imageUrl: "./src/assets/old-fashioned-cocktail.webp",
        title: "Cocktail",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ipsam.",
        rate: "5",
        badges: ["Drink", "Cold", "Cocktail"]
    },
    {
        id: 3,
        imageUrl: "./src/assets/steak.webp",
        title: "Steak",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ipsam.",
        rate: "4",
        badges: ["Meat", "Coca", "Salad"]
    }   
]

function FoodList() {
    return (
        <div className="food_cards_container">{
            foods.map((food) => {
                return (<FoodCard key={food.id} food={ food }/>)
            })
        }</div>
    )
}

export default FoodList