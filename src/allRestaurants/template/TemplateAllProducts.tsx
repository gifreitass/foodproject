import { iGetRestaurants } from "../../interfaces/Interfaces"

const TemplateAllProducts: React.FC<{ restaurant: iGetRestaurants}> = (props) => {
    console.log(props.restaurant)

    return (
        <>
            <h1>{props.restaurant.nome}</h1>
        </>
    )
}

export default TemplateAllProducts