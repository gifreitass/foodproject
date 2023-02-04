import styled from "styled-components"
import { iGetRestaurants } from "../../allRestaurants/template/TemplateRestaurants"

const AboutCard = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;    
    width: 70vw;
    border-radius: 20px;
    gap: 10px;
`

const SectionRestaurant: React.FC<{ restaurant: iGetRestaurants | undefined }> = (props) => {

    return (
        <AboutCard>
            <img height={100} src={props.restaurant?.url} />
            <h1>{props.restaurant?.nome}</h1>
            <img height={20} src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" />
            <h1>{props.restaurant?.avaliacao}</h1>
        </AboutCard>
    )
}

export default SectionRestaurant