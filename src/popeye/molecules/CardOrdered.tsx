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

const CardOrdered: React.FC<{ pedido: Pedidos, productsCart: Array<Pedidos>, updateProductCart: Function, updateLocalProductCart: any }> = (props) => {
    const [countProduct, setCountProduct] = useState(0)

    useEffect(() => {
        const copyProductsCart = [...props.productsCart];
        const item: any = copyProductsCart.find((product) => product.id === props.pedido.id);

        if (item && item.qtd) {
            setCountProduct(item.qtd)
        } else {
            setCountProduct(0)

        }
    }, [props.productsCart])

    function removeProductToCart() {
        const copyProductsCart = [...props.productsCart];

        const item = copyProductsCart.find((product) => product.id === props.pedido.id);
        if (item && item.qtd) {
            if (item && item.qtd > 1) {
                item.qtd = item.qtd - 1;
                props.updateProductCart(copyProductsCart);
                props.updateLocalProductCart.remove(copyProductsCart)

            } else {
                const arrayFiltered = copyProductsCart.filter(
                    (product) => product.id !== props.pedido.id
                );
                props.updateProductCart(arrayFiltered);
                props.updateLocalProductCart.remove(arrayFiltered)


            }
        }
    }

    if (countProduct && countProduct > 0) {
        return (
            <Card>
                <Title>
                    <h4 className="qtd">{countProduct}un - {props.pedido.nome}</h4>
                    <h4 className="price">R${props.pedido.valor}</h4>
                </Title>
                <div>
                    {props.pedido.descricao}
                </div>
                <Button onClick={removeProductToCart}>Remover</Button>

            </Card>
        )
    } else {
        return null
    }

}

export default CardOrdered