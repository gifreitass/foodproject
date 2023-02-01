import axios from "axios"
import { useEffect, useState } from "react"
import NavBar from "../molecules/NavBar"
import Restaurants from "../molecules/Restaurants"
import SelectInput from "../molecules/SelectInput"

export interface iGetRestaurants {
    url: string,
    nome: string,
    categoria: string,
    avaliacao: number,
    sobre: string,
    id?: number
}

const TemplateRestaurants = () => {
    const [restaurants, setRestaurants] = useState<iGetRestaurants[]>([])

    const getRestaurantsApi = async () => {
        const response = await axios.get('https://apigenerator.dronahq.com/api/dstqgR3A/restaurantes')
        setRestaurants(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        getRestaurantsApi()
    }, [])

    return (
        <>
        <NavBar />
        <SelectInput />
        <Restaurants restaurants={restaurants} />
        </>
    )
}

export default TemplateRestaurants