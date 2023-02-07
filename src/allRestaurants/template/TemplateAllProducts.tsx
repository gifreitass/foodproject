import { iGetRestaurants } from "../../interfaces/Interfaces"

const TemplateAllProducts: React.FC<{ restaurant: iGetRestaurants}> = (props) => {
    return (
        <>
            <h1>{props.restaurant.nome}</h1>
        </>
    )
}

export default TemplateAllProducts