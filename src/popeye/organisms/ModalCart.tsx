import styled from "styled-components"
import { iGetRestaurants } from "../../interfaces/Interfaces"
import CardOrdered from "../molecules/CardOrdered"
import { Pedidos } from "../template/TemplatePopeye"

const ModalArea = styled.section`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.3);
    position: fixed;
    backdrop-filter: blur(2px);
    top: 10vh;
    @media only screen and (max-width: 460px) {
        top: 30vh;
    }
`

const Cart = styled.div`
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 10px;
    height: 100%;
    width: 400px;
    background-color: white;
    position: absolute;
    right: 0;

    @media only screen and (max-width: 460px) {
        width: 300px;
    }
`

const CloseModal = styled.div`
    cursor: pointer;
    height: min-content;
`
const SectionOrdered = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom:50px;

`

const ModalCart: React.FC<{ restaurant: iGetRestaurants, action: any, pedidos: Array<Pedidos> }> = (props) => {


    return (
        <ModalArea>
            <Cart>
                <CloseModal onClick={props.action}>
                    <img height={30} src="https://cdn.icon-icons.com/icons2/1993/PNG/512/cancel_circle_close_delete_discard_file_x_icon_123219.png" alt="close" />
                </CloseModal>
                <div>
                    Seu Pedido em:
                    <h3>{props.restaurant.nome}</h3>
                </div>
                <SectionOrdered>
                    {props.pedidos.map((pedido: Pedidos) => {
                        return <CardOrdered key={pedido.id} pedido={pedido} />
                    })}
                </SectionOrdered>
            </Cart>

        </ModalArea>
    )
}
export default ModalCart
