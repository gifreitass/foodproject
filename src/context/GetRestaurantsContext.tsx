import React, { createContext, useEffect, useState } from "react"
import axios from "axios"
import { iGetRestaurants } from "../interfaces/Interfaces"

interface IContext {
    restaurants: iGetRestaurants[],
    setRestaurants: React.Dispatch<React.SetStateAction<iGetRestaurants[]>>,
    errorRequest?: boolean
}

export const GetRestaurantsContext = createContext<IContext>({ restaurants: [], setRestaurants: () => { } })

function GetRestaurantsProvider(props: any) {
    const [restaurants, setRestaurants] = useState<iGetRestaurants[]>([])
    const [errorRequest, setErrorRequest] = useState(false)


    const getRestaurantsApi = async () => {
        const response = await axios.get('https://foodproject-api.vercel.app/restaurantes')
        setRestaurants(response.data)
    }

    useEffect(() => {
        setErrorRequest(false)
        getRestaurantsApi().catch(() => setErrorRequest(true))
    }, [])

    return (
        <GetRestaurantsContext.Provider value={{ restaurants, errorRequest, setRestaurants }}>
            {props.children}
        </GetRestaurantsContext.Provider>
    )
}

export default GetRestaurantsProvider