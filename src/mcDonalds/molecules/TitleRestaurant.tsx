import { useContext } from "react"
import { GetRestaurantsContext } from "../../allRestaurants/context/GetRestaurantsContext"

const TitleRestaurant = () => {
    const { restaurants } = useContext(GetRestaurantsContext)

    return (
        <div>
            {restaurants.map((restaurant) => {
                if (restaurant.id === 1){
                    return <img src={restaurant.url} alt="logo do restaurante"/>
                }
            })}
        </div>
    )
}

export default TitleRestaurant