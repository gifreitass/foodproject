import { useState } from "react";
import styled from "styled-components";
import { iGetProducts } from "../../interfaces/Interfaces"

const Card = styled.div`
    display: flex;
    justify-content: center;
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
`;


const ButtonAddChart = styled.button`
    float: right;
    display: flex;
    align-items: center;
    font-size: 20px;
    gap: 4px;
    background-color: white;
    border: none;
    cursor: pointer;
`


const CardProduct: React.FC<{ product: iGetProducts }> = (props) => {

    const [countProduct, setCountProduct] = useState(0)

    function addChart() {
        setCountProduct(countProduct + 1)
    }


    const DivPrices = styled.div`
        &>:first-child {
             color: ${!(props.product.promocao != "true") ? "red" : "black"};
             text-decoration: ${!(props.product.promocao != "true") ? "line-through" : "none"};
             font-size:  ${!(props.product.promocao != "true") ? "15px" : "none"};
            }
    `;

    return (
        <Card>
            <div>
                <div>
                    <h1>{props.product.nome}</h1>
                    <p>{props.product.descricao}</p>
                    <DivPrices>
                        <h3>R${props.product.valor}</h3>
                        {!(props.product.promocao != "true") ? <h3>R${props.product.valorPromocional}</h3> : null}
                    </DivPrices>
                </div>
                <ButtonAddChart onClick={addChart}>
                    <img height={30} src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="" /> {countProduct}
                </ButtonAddChart>

            </div>
            <div>
                <img width={200} src={props.product.url} alt="" />
            </div>
        </Card>
    )
}

export default CardProduct