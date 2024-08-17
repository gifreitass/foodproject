import { iGetRestaurants } from "../../interfaces/Interfaces"
import TitleRestaurant from "../molecules/TitleRestaurant"
import { DivProductsHeader, Image } from "../styled-components"

const ProductsHeader: React.FC<{ restaurant: iGetRestaurants, onClick?: (evt: React.MouseEvent<HTMLImageElement>) => void }> = (props) => {

    return (
        <DivProductsHeader>
            <TitleRestaurant restaurant={props.restaurant} />
            <Image src="https://cdn-icons-png.flaticon.com/512/2040/2040520.png" alt="ícone com um sinal de mais" onClick={props.onClick} />
        </DivProductsHeader>
    )
}

export default ProductsHeader