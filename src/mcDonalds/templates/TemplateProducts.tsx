import { useEffect, useState } from "react"
import AllProducts from "../molecules/AllProducts"
import NavBarMc from "../molecules/NavBarMc"
import TitleRestaurant from "../molecules/TitleRestaurant"
import axios from "axios"
import { DivModalShoppingCart, MainProducts } from "../styled-components"
import { iGetRestaurants } from "../../interfaces/Interfaces"
import ModalShoppingCart from "../molecules/ModalShoppingCart"

export interface iGetProducts {
    idRestaurante?: number,
    nome: string,
    url: string,
    valor: number,
    promocao: string,
    valorPromocional: number,
    descricao: string
}

const TemplateProducts: React.FC<{ restaurant: iGetRestaurants }> = (props) => {
    const [products, setProducts] = useState<iGetProducts[]>([])
    const [isModalVisible, setModalVisible] = useState<boolean>(false)

    const getProductsApi = async () => {
        const response = await axios.get('https://apigenerator.dronahq.com/api/3yNrDssc/produtos')
        setProducts(response.data)
    }

    useEffect(() => {
        getProductsApi()
    }, [])

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
                <AllProducts products={products} />
            </MainProducts>
        </>
    )
}

export default TemplateProducts