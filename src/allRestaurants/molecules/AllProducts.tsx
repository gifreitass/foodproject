import { iGetProducts, iGetRestaurants } from "../../interfaces/Interfaces"
import DivProducts from "../atoms/DivProduct"
import { AllProductsStyle, DivContainsAllProducts } from "../styled-components"

const AllProducts: React.FC<{ products: iGetProducts[], onClick: (evt: React.MouseEvent<HTMLImageElement>) => void, restaurant: iGetRestaurants }> = (props) => {
    console.log(props.products)
    return (
        <DivContainsAllProducts>
            <h1>Produtos</h1>
            <AllProductsStyle>
                {props.products.map((product, index) => {
                    if (product.restauranteId === props.restaurant.id) {
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