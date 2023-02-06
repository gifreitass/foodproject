import styled from "styled-components"
import { iGetRestaurants } from "../../interfaces/Interfaces"

const AboutCard = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;    
    width: 80%;
    min-height: 130px;
    border-radius: 20px;
    gap: 10px;
    
    @media only screen and (max-width: 600px) {
       flex-direction: column;
    }
`

const SectionRestaurant: React.FC<{ restaurant: iGetRestaurants }> = (props) => {

    return (
        <AboutCard>
            <img height={120} src={props.restaurant?.url} />
            <h2>{props.restaurant.nome}</h2>

            <img height={20} src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" />
            <h2>{props.restaurant.avaliacao}</h2>
        </AboutCard>
    )
}

export default SectionRestaurant