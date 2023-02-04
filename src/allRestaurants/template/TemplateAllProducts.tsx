import { iGetProducts } from "../../mcDonalds/templates/TemplateProducts"
import { iGetRestaurants } from "./TemplateRestaurants"

const TemplateAllProducts: React.FC<{ restaurant: iGetRestaurants, products: iGetProducts }> = (props) => {
    console.log(props.restaurant)
    console.log(props.products)

    return (
        <>
            <h1>{props.restaurant.nome}</h1>
        </>
    )
}

export default TemplateAllProducts