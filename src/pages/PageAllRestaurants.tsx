import styled from "styled-components"
import TemplateRestaurants from "../allRestaurants/template/TemplateRestaurants"

const PageRestaurantsStyle = styled.body`
    background-color: #EEEEEE;
    height: 100vh
`

const PageAllRestaurants = () => {
    return (
        <PageRestaurantsStyle>
            <TemplateRestaurants />
        </PageRestaurantsStyle>
    )
}

export default PageAllRestaurants