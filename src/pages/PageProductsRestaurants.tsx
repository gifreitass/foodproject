import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import TemplateAllProducts from "../allRestaurants/template/TemplateAllProducts"
import TemplateProducts from "../mcDonalds/templates/TemplateProducts"
import TemplatePopeye from "../popeye/template/TemplatePopeye"

const PageProductsRestaurants: React.FC<{}> = () => {
    const { id } = useParams()

    const [restaurant, setRestaurant] = useState()
    const [products, setProducts] = useState()
    const [error, setError] = useState(false)

    useEffect(() => {
        setError(false)
        getRestaurantApi().catch(() => setError(true))
        getProductRestaurantApi().catch(() => setError(true))
    }, [])

    const getRestaurantApi = async () => {
        const response = await axios.get('https://apigenerator.dronahq.com/api/dstqgR3A/restaurantes/' + id)
        setRestaurant(response.data)
    }

    const getProductRestaurantApi = async () => {
        const response = await axios.get('https://apigenerator.dronahq.com/api/3yNrDssc/produtos')
        setProducts(response.data.filter((produto: { idRestaurante: number | string }) => produto.idRestaurante == id))
    }

    if (id) {
        if (parseInt(id) == 1) {
            return (
                <TemplateProducts />
            )
        } else if (parseInt(id) == 2) {
            return (
                <TemplatePopeye restaurant={restaurant} products={products} />
            )
        } else {
            if (error) {
                return <h1>Not Found 404</h1>
            } else {
                if (restaurant && products) {
                    return <TemplateAllProducts restaurant={restaurant} products={products} />
                } else {
                    return <h1>Loading...</h1>
                }
            }
        }
    } else {
        return <h1>Erro: Id não identificado</h1>
    }

}

export default PageProductsRestaurants