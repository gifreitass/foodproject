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
    const [listOrder, setListOrder] = useState<Array<Pedidos>>([])
    const [products, setProducts] = useState<iGetProducts[]>([])
    const [viewModal, setViewModal] = useState<boolean>(false)
    const [errorProducts, setErrorProducts] = useState<boolean>(false)

    useEffect(() => {
        setErrorProducts(false)
        getProductRestaurantApi().catch(() => setErrorProducts(true))
    }, [])

    useEffect(() => {
        localStorage.setItem(props.restaurant.id + "_Products", JSON.stringify(listOrder))
    }, [listOrder])

    const getProductRestaurantApi = async () => {
        const response = await axios.get('https://apigenerator.dronahq.com/api/3yNrDssc/produtos')
        setProducts(response.data.filter((produto: { idRestaurante: number | string }) => produto.idRestaurante == props.restaurant.id))
    }

    const addOrderCart = (pedido: Pedidos) => {
        removerPorId(listOrder, pedido.id)
        setListOrder([...listOrder, pedido])
    }

    //Fonte: https://pt.stackoverflow.com/questions/209702/como-excluir-um-item-de-um-array-pelo-valor-do-atributo
    const removerPorId = (array: Array<Pedidos>, id: any) => {
        var result = array.filter(function (el) {
            return el.id == id;
        });
        for (var elemento of result) {
            var index = array.indexOf(elemento);
            array.splice(index, 1);
        }

    }

    const onModal = () => {
        setViewModal(!viewModal)
    }

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