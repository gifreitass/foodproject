import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { iGetProducts, iGetRestaurants } from "../../interfaces/Interfaces"
import Header from "../organisms/Header"
import ModalCart from "../organisms/ModalCart"
import SectionProducts from "../organisms/SectionProducts"
import SectionRestaurant from "../organisms/SectionRestaurant"

export interface Pedidos {
    id?: string | number
    idRestaurante?: number,
    nome?: string,
    valor?: number,
    qtd?: number;
    descricao?: string,
}

const Main = styled.main`
    margin-top: 15vh;

    @media only screen and (max-width: 460px) {
        margin-top: 32vh;
    }
`

const TemplatePopeye: React.FC<{ restaurant: iGetRestaurants }> = (props) => {
    const [products, setProducts] = useState<iGetProducts[]>([])
    const [productsCart, setProductsCart] = useState<Array<Pedidos>>([]);
    const [viewModal, setViewModal] = useState<boolean>(false)
    const [errorProducts, setErrorProducts] = useState<boolean>(false)

    useEffect(() => {
        setErrorProducts(false)
        getProductRestaurantApi().catch(() => setErrorProducts(true))
    }, [])

    useEffect(() => {
        console.log(productsCart)
    }, [productsCart])

    const getProductRestaurantApi = async () => {
        const response = await axios.get('https://apigenerator.dronahq.com/api/3yNrDssc/produtos')
        setProducts(response.data.filter((produto: { idRestaurante: number | string }) => produto.idRestaurante == props.restaurant.id))
    }

    function updateProductCart(value: Array<Pedidos>) {
        setProductsCart(value)
    }

    const onModal = () => {
        setViewModal(!viewModal)
    }

    return (
        <>
            <Header modalFunction={onModal} />
            {viewModal ? <ModalCart pedidos={productsCart} restaurant={props.restaurant} modalFunction={onModal} updateProductCart={updateProductCart} /> : null}

            <Main>
                <SectionRestaurant restaurant={props.restaurant} />
                {errorProducts ? <h1>Error loading products...</h1>
                    :
                    <SectionProducts
                        products={products}
                        productsCart={productsCart}
                        updateProductCart={updateProductCart}
                    />}
            </Main>
        </>
    )

}

export default TemplatePopeye