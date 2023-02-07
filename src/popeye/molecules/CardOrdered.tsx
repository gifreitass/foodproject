import { useEffect, useState } from "react"
import styled from "styled-components"
import { Pedidos } from "../template/TemplatePopeye"

const Card = styled.div`
    display: flex;
    flex-direction: column;
    border: 3px dashed black;
    border-radius: 20px;
    padding: 10px;
    width: 100%;
    height: 100%;
    margin: 5px 0px;
    background-color: #e9bd5e;
`

const Button = styled.button`
    font-weight: 700;
    cursor: pointer;
    margin-left: 80%;
    width: min-content;
    border: none;
    color: red;
    background-color: #e9bd5e;
`

const Title = styled.div`
    display: flex;
    justify-content: space-between;
`

const CardOrdered: React.FC<{ pedido: Pedidos, action: any }> = (props) => {
    const [qtd, setQtd] = useState(props.pedido.qtd)

    useEffect(() => {
        props.action(qtd, props.pedido.nome)
    }, [qtd])

    function subCart() {
        if (qtd) {
            setQtd(qtd - 1)
        }
    }

    if (qtd && qtd > 0) {
        return (
            <Card>
                <Title>
                    <h4 className="qtd">{qtd}un - {props.pedido.nome}</h4>
                    <h4 className="price">R${props.pedido.valor}</h4>
                </Title>
                <div>
                    {props.pedido.descricao}
                </div>
                <Button onClick={subCart}>Remover</Button>

            </Card>
        )
    } else {
        return null
    }

}

export default CardOrdered