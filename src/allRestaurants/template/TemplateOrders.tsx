import { useState } from "react"
import styled from "styled-components"
import { iGetRestaurants } from "../../interfaces/Interfaces"
import { Pedidos } from "../../popeye/template/TemplatePopeye"
import NavBar from "../molecules/NavBar"
import Pedido from "../molecules/Pedido"

const GridOrdes = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    //flex-wrap: wrap;
    
    grid-gap: 20px;
    width: 80%;
    margin: 20px auto;
    align-items: stretch;

    @media only screen and (max-width: 1050px) {
       display: flex;
       flex-direction: column;
    }
`

const TemplateOrders: React.FC<{ pedidos: Array<Pedidos> }> = (props) => {
    const [findRestaurant, setFindRestaurant] = useState<string>('')
    return (
        <>
            <NavBar findRestaurant={findRestaurant} setFindRestaurant={setFindRestaurant} />

            <GridOrdes>
                {props.pedidos
                    ?
                    props.pedidos.map((pedido: Pedidos, index) => {
                        return <Pedido key={index} pedidos={pedido} />
                    })
                    :
                    <h1>Sem Pedidos</h1>
                }

            </GridOrdes>


        </>

    )

}

export default TemplateOrders
