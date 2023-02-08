import { Image, InputStyle, NavBarStyle } from "../styled-components"
import { Link } from "react-router-dom"
import React from "react"

const NavBar: React.FC<{
    findRestaurant: string,
    setFindRestaurant: React.Dispatch<React.SetStateAction<string>>,
    onClick?: (evt: React.MouseEvent<HTMLImageElement>) => void
}> = (props) => {
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        props.setFindRestaurant(evt.target.value)
    }

    return (
        <NavBarStyle>
            <Link to='/'><Image src="https://cdn-icons-png.flaticon.com/512/562/562678.png" alt="logo com um prato e talheres" /></Link>
            <InputStyle type="text" placeholder="Busque por um restaurante" onChange={handleChange} value={props.findRestaurant} />
            <div>
                <Link to='/pedidos'><Image src="https://cdn-icons-png.flaticon.com/512/2704/2704832.png" alt="ícone com visto indicando que está completo" /></Link>
                <Image src="https://cdn-icons-png.flaticon.com/512/2040/2040520.png" alt="ícone com um sinal de mais" onClick={props.onClick} />
            </div>
        </NavBarStyle>
    )
}

export default NavBar