import DivRestaurant from "../atoms/DivRestaurant"
import { DivContainsRestaurants, RestaurantsMainStyle } from "../styled-components"
import { iGetRestaurants } from "../template/TemplateRestaurants"

const Restaurants: React.FC<{ restaurants: iGetRestaurants[], findRestaurant: string }> = (props) => {
    return (
        <DivContainsRestaurants>
            <h2>Restaurantes</h2>
            <RestaurantsMainStyle>
                {props.restaurants.map((restaurant) => {
                    if (restaurant.nome.toLowerCase().includes(props.findRestaurant.toLowerCase())) {
                        return <DivRestaurant url={restaurant.url} nome={restaurant.nome} categoria={restaurant.categoria} avaliacao={restaurant.avaliacao} sobre={restaurant.sobre} />
                    }
                })}
            </RestaurantsMainStyle>
        </DivContainsRestaurants>
    )
}

export default Restaurants