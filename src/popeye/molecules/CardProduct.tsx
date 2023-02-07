import { useEffect, useState } from "react";
import styled from "styled-components";
import { iGetProducts } from "../../interfaces/Interfaces"
import { Pedidos } from "../template/TemplatePopeye";

const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: white;
    transition: 0.3s;
    height: 100%;
    width: 100%;
    border-radius: 20px;
    gap: 10px;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        height: 100%;
    }
      
    @media only screen and (max-width: 600px) {
       flex-direction: column;
       
    }
`;


const ButtonAddCart = styled.button`
    display: flex;
    align-items: center;
    font-size: 20px;
    gap: 4px;
    background-color: white;
    border: none;
    cursor: pointer;
`

const DivOperations = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

const CardProduct: React.FC<{ product: iGetProducts, action: any }> = (props) => {

    const [countProduct, setCountProduct] = useState(0)
    var pedido: Pedidos = new Object();
    var qtd = 0

    function subCart() {
        if (countProduct >= 0) {
            if (countProduct == 0) {
                setCountProduct(countProduct)
            } else {
                setCountProduct(countProduct - 1)
            }
            qtd = countProduct - 1
        }
        sendOrder()
    }

    function addCart() {
        setCountProduct(countProduct + 1)
        qtd = countProduct + 1
        sendOrder()
    }

    function sendOrder() {
        pedido.nome = props.product.nome
        pedido.idRestaurante = props.product.idRestaurante
        pedido.id = props.product.id
        pedido.descricao = props.product.descricao
        if (!(props.product.promocao != "true")) {
            pedido.valor = props.product.valorPromocional
        } else {
            pedido.valor = props.product.valor
        }
        pedido.qtd = qtd

        props.action(pedido)
    }


    const DivPrices = styled.div`
        &>:first-child {
             color: ${!(props.product.promocao != "true") ? "red" : "black"};
             text-decoration: ${!(props.product.promocao != "true") ? "line-through" : "none"};
             font-size:  ${!(props.product.promocao != "true") ? "15px" : "none"};
            }
    `;

    return (
        <Card id={props.product.idRestaurante + "_" + props.product.id}>

            <div>
                <div>
                    <h2>{props.product.nome}</h2>
                    <p>{props.product.descricao}</p>
                    <DivPrices>
                        <h3>R${props.product.valor}</h3>
                        {!(props.product.promocao != "true") ? <h3>R${props.product.valorPromocional}</h3> : null}
                    </DivPrices>
                </div>


            </div>
            <div>
                <img width={200} src={props.product.url} alt="" />
            </div>
            <DivOperations>
                <ButtonAddCart onClick={addCart}>
                    <img height={30} src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="" />
                </ButtonAddCart>
                {countProduct}
                <ButtonAddCart onClick={subCart}>
                    <img height={30} src="https://cdn.icon-icons.com/icons2/2090/PNG/512/minus_icon_128415.png" alt="" />
                </ButtonAddCart>
            </DivOperations>

        </Card>
    )
}

export default CardProduct