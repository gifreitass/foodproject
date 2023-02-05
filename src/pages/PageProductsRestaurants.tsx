import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GetRestaurantsContext } from "../allRestaurants/context/GetRestaurantsContext"
import TemplateAllProducts from "../allRestaurants/template/TemplateAllProducts"
import TemplateProducts from "../mcDonalds/templates/TemplateProducts"
import TemplatePopeye from "../popeye/template/TemplatePopeye"

const PageProductsRestaurants: React.FC<{}> = () => {
    const { id } = useParams()
    const { restaurants } = useContext(GetRestaurantsContext)


    const [products, setProducts] = useState()
    const [error, setError] = useState(false)

    useEffect(() => {
        setError(false)
        getProductRestaurantApi().catch(() => setError(true))
    }, [])

    const currentRestaurant = restaurants.find((restaurant) => restaurant.id === Number(id))
    console.log(currentRestaurant)

    const getProductRestaurantApi = async () => {
        const response = await axios.get('https://apigenerator.dronahq.com/api/3yNrDssc/produtos')
        setProducts(response.data.filter((produto: { idRestaurante: number | string }) => produto.idRestaurante == id))
    }

    if (id) {
        if (parseInt(id) == 1 && currentRestaurant) {
            return (
                <TemplateProducts restaurant={currentRestaurant} />
            )
        } else if (parseInt(id) == 2) {
            return (
                <TemplatePopeye restaurant={currentRestaurant} products={products} />
            )
        } else {
            if (error || !currentRestaurant) {
                return <h1>Not Found 404</h1>
            } else {
                if (currentRestaurant && products) {
                    return <TemplateAllProducts restaurant={currentRestaurant} products={products} />
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