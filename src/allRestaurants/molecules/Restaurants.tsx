import { Link } from "react-router-dom"
import DivRestaurant from "../atoms/DivRestaurant"
import { DivContainsRestaurants, RestaurantsMainStyle } from "../styled-components"
import { iGetRestaurants } from "../template/TemplateRestaurants"

const Restaurants: React.FC<{ restaurants: iGetRestaurants[], findRestaurant: string, filterCategory: string }> = (props) => {

    return (
        <DivContainsRestaurants>
            <h2>Restaurantes</h2>
            <RestaurantsMainStyle>
                {props.restaurants.map((restaurant, index) => {

                    /* var routeFormated = restaurant.nome.replace(/\s/g, '').replace(/(?<!^)\'(?!$)/, '').toLowerCase().split("-") 
                        <Link to={routeFormated[0]}>
                            [...]
                        </Link> 
                    */

                    if (
                        (props.filterCategory.toLowerCase() == "all"
                            ? true
                            : restaurant.categoria.toLowerCase().includes(props.filterCategory.toLowerCase())
                        )
                        &&
                        restaurant.nome.toLowerCase().includes(props.findRestaurant.toLowerCase())
                    ) {
                        return (
                            <DivRestaurant key={index} url={restaurant.url} nome={restaurant.nome} categoria={restaurant.categoria} avaliacao={restaurant.avaliacao} sobre={restaurant.sobre} />
                        )
                    }
                })}
            </RestaurantsMainStyle>
        </DivContainsRestaurants>
    )
}

export default Restaurants