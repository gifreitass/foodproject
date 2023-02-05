import { useEffect, useState } from "react"
import { iGetRestaurants } from "../../interfaces/Interfaces"
import { SectionFilter } from "../styled-components"

const SelectInput: React.FC<{ restaurants: iGetRestaurants[], changeCategory: any, changeOrder: any }> = (props) => {
    const [filterCategory, setFilterCategory] = useState<string[]>([])

    //Remove as categorias iguais dentro do objeto
    useEffect(() => {
        props.restaurants.map((restaurant) => {
            setFilterCategory(filterCategory => [...filterCategory, restaurant.categoria])
        })
        setFilterCategory(filterCategory => [...new Set(filterCategory)])
    }, [props.changeCategory])

    return (
        <SectionFilter>
            <select defaultValue=" " onChange={props.changeCategory}>
               
                <option value="all">Todas as categorias</option>
                {/* renderizar as options com as categorias dos restaurantes */}
                {filterCategory.map((item, index) => {
                    return <option key={index} value={item}>{item}</option>
                })}
            </select>
            <select defaultValue=" " onChange={props.changeOrder}>
                <option value="ordem">Ordem de avaliação</option>
                <option value="crescente">Crescente</option>
                <option value="decrescente">Decrescente</option>
            </select>
        </SectionFilter>
    )
}

export default SelectInput