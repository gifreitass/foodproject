import axios from "axios"
import { ChangeEvent, useEffect, useState } from "react"
import Modal from "../molecules/Modal"
import NavBar from "../molecules/NavBar"
import Restaurants from "../molecules/Restaurants"
import SelectInput from "../molecules/SelectInput"
import { DivModal } from "../styled-components"
import { useContext } from "react"
import { GetRestaurantsContext } from "../context/GetRestaurantsContext"

export interface iGetRestaurants {
    url: string,
    nome: string,
    categoria: string,
    avaliacao: number,
    sobre: string,
    id: number | string,
}

const TemplateRestaurants: React.FC = () => {
    const { restaurants, setRestaurants } = useContext(GetRestaurantsContext)

    const [findRestaurant, setFindRestaurant] = useState<string>('')
    const [isModalVisible, setModalVisible] = useState<boolean>(false)
    const [filterCategory, setFilterCategory] = useState<string>('')

    const onChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
        setFilterCategory(e.target.value)
    }

    const onChangeOrder = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedFilter = e.target.value
        const newRestaurants = Array.from(restaurants)

        if (selectedFilter == "crescente") {
            setRestaurants(newRestaurants.sort((a: iGetRestaurants, b: iGetRestaurants) => a.avaliacao - b.avaliacao))
        } else if (selectedFilter == "decrescente") {
            setRestaurants(newRestaurants.sort((a: iGetRestaurants, b: iGetRestaurants) => b.avaliacao - a.avaliacao))
        } else (
            null
        )
    }

    return (
        <>
            {isModalVisible ?
                <DivModal>
                    <Modal onClose={() => setModalVisible(false)} />
                </DivModal> : null
            }
            <NavBar findRestaurant={findRestaurant} setFindRestaurant={setFindRestaurant} onClick={() => setModalVisible(true)} />
            <SelectInput restaurants={restaurants} changeCategory={onChangeCategory} changeOrder={onChangeOrder} />
            <Restaurants restaurants={restaurants} findRestaurant={findRestaurant} filterCategory={filterCategory} />
        </>
    )
}

export default TemplateRestaurants