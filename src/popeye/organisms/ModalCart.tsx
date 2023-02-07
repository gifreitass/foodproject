import { useEffect, useState } from "react"
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
    height: 90%;
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
`

const ModalCart: React.FC<{ restaurant: iGetRestaurants, action: any, pedidos: Array<Pedidos>}> = (props) => {
    const [qtdChild, setQtdChild] = useState()
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let totalCarrinho = 0

        props.pedidos.map((pedido: Pedidos) => {
            if (pedido.valor && pedido.qtd) {
                totalCarrinho = totalCarrinho + (pedido.valor * pedido.qtd)
            }
        })
        setTotal(totalCarrinho)
    }, [])

    function returnQtd(value?: any, produto?: string) {
        props.pedidos.map((pedido: Pedidos) => {
            if (pedido.nome == produto && pedido.valor) {
                setTotal(total - pedido.valor)
            }
        })

        console.log(value, produto)
        setQtdChild(value)
    }

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
                        return <CardOrdered key={pedido.id} pedido={pedido} action={returnQtd} />
                    })}
                </SectionOrdered>
                <div>
                    {total > 0 ? <p>Total: R${total.toFixed(2)}</p> : null}
                </div>
            </Cart>

        </ModalArea>
    )
}
export default ModalCart
