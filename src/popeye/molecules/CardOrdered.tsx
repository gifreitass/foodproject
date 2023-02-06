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
    margin: 10px 0px;
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

const CardOrdered: React.FC<{ pedido: Pedidos }> = (props) => {
    return (
        <Card>
            <Title>
                <h4>{props.pedido.qtd}un - {props.pedido.nome}</h4>
                <h4>R${props.pedido.valor}</h4>
            </Title>
            <div>
                {props.pedido.descricao}
            </div>
            <Button>Remover</Button>

        </Card>
    )
}

export default CardOrdered