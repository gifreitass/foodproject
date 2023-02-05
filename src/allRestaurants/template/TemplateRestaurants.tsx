import { ChangeEvent, useState } from "react"
import Modal from "../molecules/Modal"
import NavBar from "../molecules/NavBar"
import Restaurants from "../molecules/Restaurants"
import SelectInput from "../molecules/SelectInput"
import { DivModal } from "../styled-components"
import { useContext } from "react"
import { GetRestaurantsContext } from "../../context/GetRestaurantsContext"
import { iGetRestaurants } from "../../interfaces/Interfaces"


const TemplateRestaurants: React.FC = () => {
    const { restaurants, setRestaurants } = useContext(GetRestaurantsContext)

    const [findRestaurant, setFindRestaurant] = useState<string>('')
    const [isModalVisible, setModalVisible] = useState<boolean>(false)
    const [filterCategory, setFilterCategory] = useState<string>('')
    const [filterOrder, setFilterOrder] = useState<string>('')

    const onChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
        setFilterCategory(e.target.value)
    }

    const onChangeOrder = (e: ChangeEvent<HTMLSelectElement>) => {
        setFilterOrder(e.target.value)
        if (filterOrder == "crescente") {
            setRestaurants(restaurants.sort((a: iGetRestaurants, b: iGetRestaurants) => b.avaliacao - a.avaliacao))
        } else if (filterOrder == "decrescente") {
            setRestaurants(restaurants.sort((a: iGetRestaurants, b: iGetRestaurants) => a.avaliacao - b.avaliacao))
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