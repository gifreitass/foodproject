import styled from "styled-components"
import NavBarOrders from "../organisms/NavBarOrders"
import Pedido from "../organisms/Pedido"
import { iPedidos } from "../../interfaces/Interfaces"

const GridOrders = styled.div`
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

const TemplateOrders: React.FC<{ pedidos: Array<iPedidos> }> = (props) => {
    return (
        <>
            <NavBarOrders />

            <GridOrders>
                {props.pedidos
                    ?
                    props.pedidos.map((pedido: iPedidos, index) => {
                        return <Pedido key={index} pedidos={pedido} />
                    })
                    :
                    <h1>Sem Pedidos</h1>
                }

            </GridOrders>


        </>

    )

}

export default TemplateOrders
