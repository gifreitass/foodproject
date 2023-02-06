import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { iGetRestaurants } from "../../interfaces/Interfaces"
import { iGetProducts } from "../../mcDonalds/templates/TemplateProducts"
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
    const [errorProducts, setErrorProducts] = useState<boolean>(false)
    const [viewModal, setViewModal] = useState<boolean>(false)
    const [listOrder, setListOrder] = useState<Array<Pedidos>>([])

    const getProductRestaurantApi = async () => {
        const response = await axios.get('https://apigenerator.dronahq.com/api/3yNrDssc/produtos')
        setProducts(response.data.filter((produto: { idRestaurante: number | string }) => produto.idRestaurante == props.restaurant.id))
    }

    const addOrderCart = (pedido: Pedidos) => {
        setListOrder(listOrder => [...listOrder, pedido])
    }

    const onModal = () => {
        setViewModal(!viewModal)
    }

    useEffect(() => {
        setErrorProducts(false)
        getProductRestaurantApi().catch(() => setErrorProducts(true))
    }, [])

    return (
        <>
            <Header action={onModal} />
            {viewModal ? <ModalCart pedidos={listOrder} restaurant={props.restaurant} action={onModal} /> : null}

            <Main>
                <SectionRestaurant restaurant={props.restaurant} />
                {errorProducts ? <h1>Error loading products...</h1> : <SectionProducts products={products} action={addOrderCart} />}
            </Main>
        </>
    )

}

export default TemplatePopeye