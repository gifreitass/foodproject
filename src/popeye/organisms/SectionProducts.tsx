import styled from "styled-components"
import { iGetProducts } from "../../interfaces/Interfaces"
import CardProduct from "../molecules/CardProduct"

const GridProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    width: 80%;
    margin: 20px auto;
    align-items: stretch;
`

const SectionProducts: React.FC<{ products: iGetProducts[] }> = (props) => {

    return (
        <GridProducts>
            {props.products.map(product => {
                return <CardProduct key={product.id} product={product} />
            })}
        </GridProducts>
    )
}

export default SectionProducts