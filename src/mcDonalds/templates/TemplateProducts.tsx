import { useContext, useEffect, useState } from "react"
import AllProducts from "../molecules/AllProducts"
import NavBarMc from "../molecules/NavBarMc"
import TitleRestaurant from "../molecules/TitleRestaurant"
import axios from "axios"
import { DivModalShoppingCart, MainProducts } from "../styled-components"
import { iGetProducts, iGetRestaurants } from "../../interfaces/Interfaces"
import ModalShoppingCart from "../molecules/ModalShoppingCart"
import { CartContext } from "../CartProvider"

const TemplateProducts: React.FC<{ restaurant: iGetRestaurants }> = (props) => {
    const [products, setProducts] = useState<iGetProducts[]>([])
    const [isModalVisible, setModalVisible] = useState<boolean>(false)

    const { setProductsCart, productsCart, addProductCart } = useContext(CartContext)

    const getProductsApi = async () => {
        const response = await axios.get('https://apigenerator.dronahq.com/api/3yNrDssc/produtos')
        setProducts(response.data)
    }

    useEffect(() => {
        getProductsApi()
    }, [])


    const handleClickProduct = (evt: React.MouseEvent<HTMLImageElement>) => {
        const copyProducts = [...products]
        const filteredProducts: iGetProducts[] = [...productsCart]
        const newProduct = copyProducts.filter((product) => product.nome === evt.currentTarget.id)
        filteredProducts.push(...newProduct)
        setProductsCart(filteredProducts)
    }

    return (
        <>
            <MainProducts>
                <NavBarMc onClick={() => setModalVisible(true)} />
                {isModalVisible ?
                    <DivModalShoppingCart>
                        <ModalShoppingCart restaurant={props.restaurant} products={products} onClose={() => setModalVisible(false)} />
                    </DivModalShoppingCart> : null
                }
                <TitleRestaurant restaurant={props.restaurant} />
                <AllProducts onClick={handleClickProduct} products={products} />
            </MainProducts>
        </>
    )
}

export default TemplateProducts