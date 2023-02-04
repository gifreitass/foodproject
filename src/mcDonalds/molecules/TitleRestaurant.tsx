import { useContext } from "react"
import { GetRestaurantsContext } from "../../allRestaurants/context/GetRestaurantsContext"

const TitleRestaurant = () => {
    const { restaurants } = useContext(GetRestaurantsContext)
    console.log(restaurants)

    return (
        <div>
            {restaurants.map((restaurant, index) => {
                if (restaurant.id === 1){
                    return <div>
                     <img key={`titleRestaurant-itemImage${index}`} src={restaurant.url} alt="logo do restaurante"/>
                     </div>
                }
            })}
        </div>
    )
}

export default TitleRestaurant