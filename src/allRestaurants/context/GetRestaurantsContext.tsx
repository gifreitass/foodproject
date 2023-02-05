import React, { createContext, useEffect, useState } from "react"
import { iGetRestaurants } from "../template/TemplateRestaurants"
import axios from "axios"

interface IContext {
    restaurants: iGetRestaurants[],
    setRestaurants: React.Dispatch<React.SetStateAction<iGetRestaurants[]>>
}

export const GetRestaurantsContext = createContext<IContext>({restaurants: [], setRestaurants: () => {}})

function GetRestaurantsProvider (props: any) {
    const [restaurants, setRestaurants] = useState<iGetRestaurants[]>([])
    

    const getRestaurantsApi = async () => {
        const response = await axios.get('https://apigenerator.dronahq.com/api/dstqgR3A/restaurantes')
        setRestaurants(response.data)
    }


    useEffect(() => {
        getRestaurantsApi()
    }, [])

    console.log({ aRestaurante: restaurants}) 

    return (
        <GetRestaurantsContext.Provider value={{restaurants, setRestaurants}}>
            {props.children}
        </GetRestaurantsContext.Provider>
    )
}

export default GetRestaurantsProvider