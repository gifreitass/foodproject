import React, { createContext, useState } from "react"
import { iGetRestaurants } from "../template/TemplateRestaurants"

interface IContext {
    restaurants: iGetRestaurants[],
    setRestaurants: React.Dispatch<React.SetStateAction<iGetRestaurants[]>>
}

export const GetRestaurantsContext = createContext<IContext>({restaurants: [], setRestaurants: () => {}})

function GetRestaurantsProvider (props: any) {
    const [restaurants, setRestaurants] = useState<iGetRestaurants[]>([])

    return (
        <GetRestaurantsContext.Provider value={{restaurants, setRestaurants}}>
            {props.children}
        </GetRestaurantsContext.Provider>
    )
}

export default GetRestaurantsProvider