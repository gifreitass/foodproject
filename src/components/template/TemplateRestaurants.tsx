import { ChangeEvent, useState } from "react"
import ModalNewRestaurant from "../organisms/ModalNewRestaurant"
import Restaurants from "../organisms/Restaurants"
import SelectInput from "../molecules/SelectInput"
import { DivModalNewRestaurant } from "../styled-components"
import { useContext } from "react"
import { GetRestaurantsContext } from "../../context/GetRestaurantsContext"
import { iGetRestaurants } from "../../interfaces/Interfaces"
import NavBarHome from "../organisms/NavBarHome"


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
                <DivModalNewRestaurant>
                    <ModalNewRestaurant setRestaurants={setRestaurants} setModalVisible={setModalVisible} onClose={() => setModalVisible(false)} />
                </DivModalNewRestaurant> : null
            }
            <NavBarHome findRestaurant={findRestaurant} setFindRestaurant={setFindRestaurant} onClick={() => setModalVisible(true)} />
            <SelectInput restaurants={restaurants} changeCategory={onChangeCategory} changeOrder={onChangeOrder} />
            <Restaurants restaurants={restaurants} findRestaurant={findRestaurant} filterCategory={filterCategory} />
        </>
    )
}

export default TemplateRestaurants