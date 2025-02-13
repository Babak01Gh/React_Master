function FoodCard({food}){
    return (
        <div className="food_card">
            <div className="food_pic">
                <img src={food.imageUrl} alt="food_image" />
            </div>
            <FoodInfo title={food.title} desc={food.desc} rate={food.rate} badges={food.badges}/>
        </div>
    )
}

function FoodInfo({title, desc, rate, badges}) {
    return (
        <div className="food_info">
                <span className="food_info__name">{title}</span>
                <span className="food_info__desc">
                {desc}
                </span>
                <span className="rate">{rate} <i className="fa-regular fa-star"></i></span>
                <div className="badges">{
                    badges.map((badge) => <span className="badge" key={badge}>{badge}</span>)
                }
                </div>
            </div>
    )
}

export default FoodCard;