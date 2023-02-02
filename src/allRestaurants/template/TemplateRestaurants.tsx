import axios from "axios"
import { useEffect, useState } from "react"
import Modal from "../molecules/Modal"
import NavBar from "../molecules/NavBar"
import Restaurants from "../molecules/Restaurants"
import SelectInput from "../molecules/SelectInput"
import { DivModal } from "../styled-components"

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
    const [findRestaurant, setFindRestaurant] = useState<string>('')
    const [isModalVisible, setModalVisible] = useState<boolean>(false)

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
            {isModalVisible ?
                <DivModal>
                    <Modal onClose={() => setModalVisible(false)} />
                </DivModal> : null
            }

            <NavBar findRestaurant={findRestaurant} setFindRestaurant={setFindRestaurant} onClick={() => setModalVisible(true)} />

            <SelectInput restaurants={restaurants} />
            <Restaurants restaurants={restaurants} findRestaurant={findRestaurant} />
        </>
    )
}

export default TemplateRestaurants