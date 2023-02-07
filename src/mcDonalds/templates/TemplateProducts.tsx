import { useContext, useEffect, useState } from "react"
import AllProducts from "../molecules/AllProducts"
import NavBarMc from "../molecules/NavBarMc"
import TitleRestaurant from "../molecules/TitleRestaurant"
import axios from "axios"
import { DivModalClient, DivModalShoppingCart, MainProducts } from "../styled-components"
import { iGetProducts, iGetRestaurants } from "../../interfaces/Interfaces"
import ModalShoppingCart from "../molecules/ModalShoppingCart"
import { CartContext } from "../CartProvider"
import ModalClient from "../molecules/ModalClient"

const TemplateProducts: React.FC<{ restaurant: iGetRestaurants }> = (props) => {
    const [products, setProducts] = useState<iGetProducts[]>([])
    const [isModalCartVisible, setModalCartVisible] = useState<boolean>(false)
    const [isModalClientVisible, setModalClientVisible] = useState<boolean>(false)

    const { setProductsCart, productsCart } = useContext(CartContext)

    const getProductsApi = async () => {
        const response = await axios.get('https://apigenerator.dronahq.com/api/3yNrDssc/produtos')
        setProducts(response.data)
    }

    useEffect(() => {
        getProductsApi()
    }, [])

    useEffect(() => {
        const storedProducts = localStorage.getItem("products")
        if (storedProducts) {
            setProductsCart(JSON.parse(storedProducts))
        }
    }, [])

    useEffect(() => {
        if (productsCart.length > 0) {
            localStorage.setItem("products", JSON.stringify(productsCart))
        }
    }, [productsCart])


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
                <NavBarMc onClick={() => setModalCartVisible(true)} />
                {isModalCartVisible ?
                    <DivModalShoppingCart>
                        <ModalShoppingCart onClick={() => setModalClientVisible(true)} restaurant={props.restaurant} products={products} onClose={() => setModalCartVisible(false)} />
                    </DivModalShoppingCart> : null
                }
                {isModalClientVisible ?
                    <DivModalClient>
                        <ModalClient onClose={() => setModalClientVisible(false)} />
                    </DivModalClient> : null
                }
                <TitleRestaurant restaurant={props.restaurant} />
                <AllProducts onClick={handleClickProduct} products={products} restaurant={props.restaurant} />
            </MainProducts>
        </>
    )
}

export default TemplateProducts