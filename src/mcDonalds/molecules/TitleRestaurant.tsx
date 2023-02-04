import { iGetRestaurants } from "../../allRestaurants/template/TemplateRestaurants"
import { ImageRateTitleRestaurant, ImageTitleRestaurant, TextRateTitleRestaurant, TextTitleRestaurant, TitleRestaurantStyle } from "../styled.components"

const TitleRestaurant: React.FC<{ restaurant: iGetRestaurants }> = (props) => {

    return (
        <TitleRestaurantStyle>
            <ImageTitleRestaurant src={props.restaurant.url} alt="logo do restaurante" />
            <TextTitleRestaurant>{props.restaurant.nome}</TextTitleRestaurant>
            <ImageRateTitleRestaurant src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" />
            <TextRateTitleRestaurant>{props.restaurant.avaliacao}</TextRateTitleRestaurant>
        </TitleRestaurantStyle>
    )
}

export default TitleRestaurant