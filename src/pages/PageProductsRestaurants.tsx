import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GetRestaurantsContext } from "../context/GetRestaurantsContext"
import TemplateAllProducts from "../allRestaurants/template/TemplateAllProducts"
import TemplateProducts from "../mcDonalds/templates/TemplateProducts"
import TemplatePopeye from "../popeye/template/TemplatePopeye"

const PageProductsRestaurants: React.FC<{}> = () => {
    const { id } = useParams()
    const { restaurants, errorRequest } = useContext(GetRestaurantsContext)

    const currentRestaurant = restaurants.find((restaurant) => restaurant.id === Number(id))
    
    if (id) {
        if (parseInt(id) == 1 && currentRestaurant) {
            return (
                <TemplateProducts restaurant={currentRestaurant} />
            )
        } else if (parseInt(id) == 2 && currentRestaurant) {
            return (
                <TemplatePopeye restaurant={currentRestaurant} />
            )
        } else {
            if (errorRequest) {
                return <h1>Erro de Conexão com a API</h1>
            } else {
                if (currentRestaurant) {
                    return <TemplateAllProducts restaurant={currentRestaurant} />
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