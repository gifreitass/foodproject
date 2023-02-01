import { Image, InputStyle, NavBarStyle } from "../styled-components"

const NavBar: React.FC = () => {
    return (
        <NavBarStyle>
            <Image src="https://cdn-icons-png.flaticon.com/512/562/562678.png" alt="logo com um prato e talheres" />
            <InputStyle type="text" placeholder="Busque por um restaurante" />
            <div>
                <Image src="https://cdn-icons-png.flaticon.com/512/2704/2704832.png" alt="ícone com visto indicando que está completo" />
                <Image src="https://cdn-icons-png.flaticon.com/512/2040/2040520.png" alt="ícone com um sinal de mais" />
            </div>
        </NavBarStyle>
    )
}

export default NavBar