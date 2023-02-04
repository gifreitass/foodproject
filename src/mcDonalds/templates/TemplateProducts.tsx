import { useEffect, useState } from "react"
import AllProducts from "../molecules/AllProducts"
import NavBarMc from "../molecules/NavBarMc"
import TitleRestaurant from "../molecules/TitleRestaurant"
import axios from "axios"
import { MainProducts } from "../styled.components"
import { iGetRestaurants } from "../../allRestaurants/template/TemplateRestaurants"

export interface iGetProducts {
    idRestaurante?: number,
    nome: string,
    url: string,
    valor: number,
    promocao: string,
    valorPromocional: number,
    descricao: string
}

const TemplateProducts: React.FC<{restaurant: iGetRestaurants}> = (props) => {
    const [products, setProducts] = useState<iGetProducts[]>([])

    const getProductsApi = async () => {
        const response = await axios.get('https://apigenerator.dronahq.com/api/3yNrDssc/produtos')
        setProducts(response.data)
    }

    useEffect(() => {
        getProductsApi()
    }, [])

    return (
        <MainProducts>
            <NavBarMc />
            <TitleRestaurant restaurant={props.restaurant} />
            <AllProducts products={products} />
        </MainProducts>
    )
}

export default TemplateProducts