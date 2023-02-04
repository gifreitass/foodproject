import { Link } from "react-router-dom"
import DivRestaurant from "../atoms/DivRestaurant"
import { DivContainsRestaurants, RestaurantsMainStyle } from "../styled-components"
import { iGetRestaurants } from "../template/TemplateRestaurants"

const Restaurants: React.FC<{ restaurants: iGetRestaurants[], findRestaurant: string, filterCategory: string }> = (props) => {

    return (
        <DivContainsRestaurants>
            <h2>Restaurantes</h2>
            <RestaurantsMainStyle>
                {props.restaurants.map((restaurant) => {

                    if (
                        (props.filterCategory.toLowerCase() == "all"
                            ? true
                            : restaurant.categoria.toLowerCase().includes(props.filterCategory.toLowerCase())
                        )
                        &&
                        restaurant.nome.toLowerCase().includes(props.findRestaurant.toLowerCase())
                    ) {
                        return (
                            <Link to={"/" + restaurant.id}>
                                <DivRestaurant key={restaurant.id} id={restaurant.id} url={restaurant.url} nome={restaurant.nome} categoria={restaurant.categoria} avaliacao={restaurant.avaliacao} sobre={restaurant.sobre} />
                            </Link>
                        )
                    }
                })}
            </RestaurantsMainStyle>
        </DivContainsRestaurants>
    )
}

export default Restaurants