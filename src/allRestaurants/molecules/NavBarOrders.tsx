import { Link } from "react-router-dom"
import { DivReturnRestaurants, LinkReturnRestaurant, TitleReturnRestaurants } from "../../mcDonalds/styled-components"
import { Image, NavBarStyle } from "../styled-components"

const NavBarOrders: React.FC = () => {
    return (
        <NavBarStyle>
            <Link to='/'><Image src="https://cdn-icons-png.flaticon.com/512/562/562678.png" alt="logo com um prato e talheres" /></Link>
            <LinkReturnRestaurant to='/'>
                <DivReturnRestaurants>
                    <Image src="https://cdn-icons-png.flaticon.com/512/3585/3585896.png" alt="logo com seta indicando retorno" />
                    <TitleReturnRestaurants>Restaurantes</TitleReturnRestaurants>
                </DivReturnRestaurants>
            </LinkReturnRestaurant>
                <Link to='/pedidos'><Image src="https://cdn-icons-png.flaticon.com/512/2704/2704832.png" alt="ícone com visto indicando que está completo" /></Link>
        </NavBarStyle>
    )
}

export default NavBarOrders