import DivProducts from "../atoms/DivProduct"
import { AllProductsStyle, DivContainsAllProducts } from "../styled.components"
import { iGetProducts } from "../templates/TemplateProducts"

const AllProducts: React.FC<{ products: iGetProducts[] }> = (props) => {
    return (
        <DivContainsAllProducts>
            <h1>Produtos</h1>
            <AllProductsStyle>
                {props.products.map((product) => {
                    if (product.idRestaurante === 1) {
                        return <DivProducts nome={product.nome}
                            url={product.url} valor={product.valor}
                            promocao={product.promocao}
                            valorPromocional={product.valorPromocional}
                            descricao={product.descricao} />
                    }
                })}
            </AllProductsStyle>
        </DivContainsAllProducts>
    )
}

export default AllProducts