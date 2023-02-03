import { Image, NavBarStyle } from "../../allRestaurants/styled-components"
import { DivReturnRestaurants, LinkReturnRestaurant, TitleReturnRestaurants } from "../styled.components"
import { Link } from "react-router-dom"

const NavBarMc: React.FC = () => {
    return (
        <NavBarStyle>
            <Link to='/'><Image src="https://cdn-icons-png.flaticon.com/512/562/562678.png" alt="logo com um prato e talheres" /></Link>
            <LinkReturnRestaurant to='/'>
                <DivReturnRestaurants>
                    <Image src="https://cdn-icons-png.flaticon.com/512/3585/3585896.png" alt="logo com seta indicando retorno" />
                    <TitleReturnRestaurants>Restaurantes</TitleReturnRestaurants>
                </DivReturnRestaurants>
            </LinkReturnRestaurant>
            <div>
                <Link to='/pedidos'><Image src="https://cdn-icons-png.flaticon.com/512/2704/2704832.png" alt="ícone com visto indicando que está completo" /></Link>
                <Image src="https://cdn-icons-png.flaticon.com/512/4175/4175270.png" alt="logo de carrinho de compras" />
            </div>
        </NavBarStyle>
    )
}

export default NavBarMc