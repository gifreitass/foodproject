import styled from "styled-components"
import { iGetProducts } from "../../interfaces/Interfaces"
import CardProduct from "../molecules/CardProduct"
import { Pedidos } from "../template/TemplatePopeye"

const GridProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    width: 80%;
    margin: 20px auto;
    align-items: stretch;

    @media only screen and (max-width: 1050px) {
       display: flex;
       flex-direction: column;
    }
`

const SectionProducts: React.FC<{ products: iGetProducts[], updateProductCart: Function, productsCart: Array<Pedidos> }> = (props) => {

    return (
        <GridProducts>
            {props.products.map(product => {
                return <CardProduct
                    key={product.id}
                    product={product}
                    productsCart={props.productsCart}
                    updateProductCart={props.updateProductCart}
                />
            })}
        </GridProducts>
    )
}

export default SectionProducts