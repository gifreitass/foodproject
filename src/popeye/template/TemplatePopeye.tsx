import axios from "axios"
import { useEffect, useState } from "react"
import { iGetProducts, iGetRestaurants } from "../../interfaces/Interfaces"
import Header from "../organisms/Header"
import ModalCart from "../organisms/ModalCart"
import ModalConfirmation from "../organisms/ModalConfirmation"
import SectionProducts from "../organisms/SectionProducts"
import SectionRestaurant from "../organisms/SectionRestaurant"

export interface Pedidos {
    id?: string | number
    idRestaurante?: number,
    nome?: string,
    valor?: number,
    qtd?: number;
    urlRestaurant?: string;
    nomeRestaurant?: string;
    descricao?: string,
}

const TemplatePopeye: React.FC<{ restaurant: iGetRestaurants }> = (props) => {
    const [products, setProducts] = useState<iGetProducts[]>([])
    const [productsCart, setProductsCart] = useState<Array<Pedidos>>([]);
    const [viewModalCart, setViewModalCart] = useState<boolean>(false)
    const [viewModalConfirmation, setViewModalConfirmation] = useState<boolean>(false)
    const [errorProducts, setErrorProducts] = useState<boolean>(false)

    useEffect(() => {
        setErrorProducts(false)
        getProductRestaurantApi().catch(() => setErrorProducts(true))
        const localData = localStorage.getItem(props.restaurant.id + "_restaurant")
        if (localData) {
            setProductsCart(JSON.parse(localData))
        }
    }, [])

    const getProductRestaurantApi = async () => {
        const response = await axios.get('https://apigenerator.dronahq.com/api/3yNrDssc/produtos')
        setProducts(response.data.filter((produto: { idRestaurante: number | string }) => produto.idRestaurante == props.restaurant.id))
    }

    function updateProductCart(value: Array<Pedidos>) {
        setProductsCart(value)
    }
    //https://pt.stackoverflow.com/questions/528754/remover-um-objeto-dentro-de-um-array-salvo-no-localstorage
    const Storage = {
        set(value: any) {
            localStorage.setItem(props.restaurant.id + "_restaurant", JSON.stringify(value))
        },
        remove(values: any) {
            localStorage.setItem(props.restaurant.id + "_restaurant", JSON.stringify(values))
        }
    }

    const onModalCart = () => {
        setViewModalCart(!viewModalCart)
    }

    const onModalConfirmation = () => {
        setViewModalConfirmation(!viewModalConfirmation)
        setViewModalCart(!viewModalCart)
    }


    return (
        <>
            {viewModalCart ?
                <ModalCart
                    pedidos={productsCart}
                    restaurant={props.restaurant}
                    modalFunction={onModalCart}
                    updateProductCart={updateProductCart}
                    updateLocalProductCart={Storage}
                    onModalConfirmation={onModalConfirmation}
                />
                : null}
            <Header modalFunction={onModalCart} />

            {viewModalConfirmation ?
                <ModalConfirmation
                    restaurant={props.restaurant}
                    modalFnc={onModalConfirmation}
                    updateLocalProductCart={Storage}
                    pedidos={productsCart} />
                : null
            }

            <main>
                <SectionRestaurant restaurant={props.restaurant} />
                {errorProducts ? <h1>Error loading products...</h1>
                    :
                    <SectionProducts
                        products={products}
                        productsCart={productsCart}
                        updateProductCart={updateProductCart}
                        updateLocalProductCart={Storage}
                        restaurant={props.restaurant}
                    />
                }
            </main>

        </>
    )

}

export default TemplatePopeye