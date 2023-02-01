import DivRestaurant from "../atoms/DivRestaurant"
import { DivContainsRestaurants, RestaurantsMainStyle } from "../styled-components"
import { iGetRestaurants } from "../template/TemplateRestaurants"

const Restaurants: React.FC<{restaurants: iGetRestaurants[]}> = (props) => {
    return (
        <DivContainsRestaurants>
            <h2>Restaurantes</h2>
            <RestaurantsMainStyle>
                {props.restaurants.map((restaurant) => {
                    return <DivRestaurant url={restaurant.url} nome={restaurant.nome} categoria={restaurant.categoria} avaliacao={restaurant.avaliacao} sobre={restaurant.sobre} />
                })}
            </RestaurantsMainStyle>
        </DivContainsRestaurants>
    )
}

export default Restaurants