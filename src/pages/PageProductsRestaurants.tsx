import { useContext } from "react"
import { useParams } from "react-router-dom"
import { GetRestaurantsContext } from "../context/GetRestaurantsContext"
import TemplateProducts from "../allRestaurants/template/TemplateProducts"

const PageProductsRestaurants: React.FC<{}> = () => {
    const { id } = useParams()
    const { restaurants } = useContext(GetRestaurantsContext)

    const currentRestaurant = restaurants.find((restaurant) => restaurant.id === Number(id))

    if (id && currentRestaurant) {
        return <TemplateProducts restaurant={currentRestaurant} />
    } else {
        return <h1>Erro: Id não identificado</h1>
    }

}

export default PageProductsRestaurants