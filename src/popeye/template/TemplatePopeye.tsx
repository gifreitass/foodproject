import axios from "axios"
import { useEffect, useState } from "react"
import { iGetRestaurants } from "../../interfaces/Interfaces"
import { iGetProducts } from "../../mcDonalds/templates/TemplateProducts"
import Header from "../organisms/Header"
import SectionProducts from "../organisms/SectionProducts"
import SectionRestaurant from "../organisms/SectionRestaurant"

const TemplatePopeye: React.FC<{ restaurant: iGetRestaurants }> = (props) => {
    const [products, setProducts] = useState<iGetProducts[]>([])
    const [errorProducts, setErrorProducts] = useState<boolean>(false)

    const getProductRestaurantApi = async () => {
        const response = await axios.get('https://apigenerator.dronahq.com/api/3yNrDssc/produtos')
        setProducts(response.data.filter((produto: { idRestaurante: number | string }) => produto.idRestaurante == props.restaurant.id))
    }

    useEffect(() => {
        setErrorProducts(false)
        getProductRestaurantApi().catch(() => setErrorProducts(true))
    }, [])

    return (
        <>
            <Header />
            <SectionRestaurant restaurant={props.restaurant} />
            {errorProducts ? <h1>Error loading products...</h1> : <SectionProducts products={products}/>}
        </>
    )

}

export default TemplatePopeye