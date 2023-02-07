import { iGetProducts } from "../../interfaces/Interfaces"
import DivProducts from "../atoms/DivProduct"
import { AllProductsStyle, DivContainsAllProducts } from "../styled-components"

const AllProducts: React.FC<{ products: iGetProducts[], onClick: (evt: React.MouseEvent<HTMLImageElement>) => void }> = (props) => {
    return (
        <DivContainsAllProducts>
            <h1>Produtos</h1>
            <AllProductsStyle>
                {props.products.map((product, index) => {
                    if (product.idRestaurante === 1) {
                        return <DivProducts key={`allProducts-items${index}`}
                            nome={product.nome}
                            url={product.url} valor={product.valor}
                            promocao={product.promocao}
                            valorPromocional={product.valorPromocional}
                            descricao={product.descricao}
                            onClick={props.onClick}
                            />
                    }
                })}
            </AllProductsStyle>
        </DivContainsAllProducts>
    )
}

export default AllProducts