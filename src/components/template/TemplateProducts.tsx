import { useContext, useEffect, useMemo, useState } from "react"
import AllProducts from "../organisms/AllProducts"
import axios from "axios"
import { iGetProducts, iGetRestaurants, iPedidos } from "../../interfaces/Interfaces"
import ModalShoppingCart from "../organisms/ModalShoppingCart"
import { CartContext } from "../../context/CartProvider"
import ModalClient from "../organisms/ModalClient"
import removeDuplicatesByNome from "../../utils/removeDuplicatesByNome"
import { DivModalNewRestaurant, DivModalClient, DivModalShoppingCart, MainProducts } from "../styled-components"
import NavBarRestaurants from "../organisms/NavBarRestaurants"
import ProductsHeader from "../organisms/ProductsHeader"
import ModalNewProduct from "../organisms/ModalNewProduct"

const TemplateProducts: React.FC<{ restaurant: iGetRestaurants }> = (props) => {
    const [products, setProducts] = useState<iGetProducts[]>([])
    const [isModalCartVisible, setModalCartVisible] = useState<boolean>(false)
    const [isModalClientVisible, setModalClientVisible] = useState<boolean>(false)
    const [isModalProductVisible, setModalProductVisible] = useState<boolean>(false)

    const { setProductsCart, productsCart, createOrder, numberProduct } = useContext(CartContext)

    const adaptedOrder = useMemo(() => {
        let productsArray: iGetProducts[] = removeDuplicatesByNome(productsCart)
        const adaptedArray: iPedidos[] = productsArray.map((produto) => {
            return {
                descricao: produto.descricao,
                id: produto.id,
                restauranteId: produto.restauranteId,
                nome: produto.nome,
                nomeRestaurant: props.restaurant.nome,
                qtd: numberProduct(produto.nome),
                urlRestaurant: props.restaurant.url,
                valor: produto.valorPromocional > 0 ? produto.valorPromocional : produto.valor
            }
        })
        return adaptedArray
    }, [productsCart])

    const getProductsApi = async () => {
        const response = await axios.get('https://foodproject-api.vercel.app/produtos')
        setProducts(response.data)
    }

    useEffect(() => {
        getProductsApi()
    }, [])

    useEffect(() => {
        const storedProducts = localStorage.getItem("products")
        if (storedProducts && productsCart.length <= 0) {
            const storedProductsParsed = JSON.parse(storedProducts || '')
            if (storedProductsParsed.length > 0) {
                setProductsCart(storedProductsParsed)
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(productsCart))
    }, [productsCart])

    const handleClickProduct = (evt: React.MouseEvent<HTMLImageElement>) => {
        const copyProducts = [...products]
        const filteredProducts: iGetProducts[] = [...productsCart]
        const newProduct = copyProducts.filter((product) => product.nome === evt.currentTarget.id)
        filteredProducts.push(...newProduct)
        setProductsCart(filteredProducts)
    }

    const handleClickClient = (e: any) => {
        e.preventDefault()
        setProductsCart([])
        createOrder(adaptedOrder)
        alert("Usúario Verificado, Bon Appetit")
        setModalCartVisible(false)
        setModalClientVisible(false)
    }

    return (
        <>
            <MainProducts>
                <NavBarRestaurants onClick={() => setModalCartVisible(true)} />
                {isModalCartVisible ?
                    <DivModalShoppingCart>
                        <ModalShoppingCart onClick={() => setModalClientVisible(true)} restaurant={props.restaurant} products={products} onClose={() => setModalCartVisible(false)} />
                    </DivModalShoppingCart> : null
                }
                {isModalClientVisible ?
                    <DivModalClient>
                        <ModalClient onClick={handleClickClient} onClose={() => setModalClientVisible(false)} />
                    </DivModalClient> : null
                }
                {isModalProductVisible ?
                    <DivModalNewRestaurant>
                        <ModalNewProduct setModalProductVisible={setModalProductVisible}  setProducts={setProducts} restauranteId={Number(props.restaurant.id)} onClose={() => setModalProductVisible(false)} />
                    </DivModalNewRestaurant> : null
                }
                <ProductsHeader restaurant={props.restaurant} onClick={() => setModalProductVisible(true)} />
                <AllProducts onClick={handleClickProduct} products={products} restaurant={props.restaurant} />
            </MainProducts>
        </>
    )
}

export default TemplateProducts