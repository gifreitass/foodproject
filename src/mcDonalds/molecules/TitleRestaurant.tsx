import React, { useContext } from "react"
import { GetRestaurantsContext } from "../../allRestaurants/context/GetRestaurantsContext"
import { ImageRateTitleRestaurant, ImageTitleRestaurant, TextRateTitleRestaurant, TextTitleRestaurant, TitleRestaurantStyle } from "../styled.components"

const TitleRestaurant = () => {
    const { restaurants } = useContext(GetRestaurantsContext)

    return (
        <TitleRestaurantStyle>
            {restaurants.map((restaurant, index) => {
                if (restaurant.id === 1){
                    return <React.Fragment key={`titleRestaurant-item${index}`}>
                        <ImageTitleRestaurant src={restaurant.url} alt="logo do restaurante"/>
                        <TextTitleRestaurant>{restaurant.nome}</TextTitleRestaurant>
                        <ImageRateTitleRestaurant src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" />
                        <TextRateTitleRestaurant>{restaurant.avaliacao}</TextRateTitleRestaurant>
                     </React.Fragment>
                }
            })}
        </TitleRestaurantStyle>
    )
}

export default TitleRestaurant