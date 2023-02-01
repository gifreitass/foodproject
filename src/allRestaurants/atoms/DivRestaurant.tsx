import { DivRestaurantStyle, ImageRate, ImageRestaurant, TextRestaurantRate } from "../styled-components"
import { iGetRestaurants } from "../template/TemplateRestaurants"

const DivRestaurant: React.FC<iGetRestaurants> = (props) => {
    return (
        <DivRestaurantStyle>
            <div>
                <ImageRestaurant src={props.url} alt="imagem do restaurante"/>
            </div>
            <div>
                <h4>{props.nome}</h4>
                <TextRestaurantRate>
                    <ImageRate src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" />
                    <p>{props.avaliacao}</p>
                    <p>•</p>
                    <p>{props.categoria}</p>
                </TextRestaurantRate>
                <p>{props.sobre}</p>
            </div>
        </DivRestaurantStyle>
    )
}

export default DivRestaurant