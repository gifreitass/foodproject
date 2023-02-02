import { iGetRestaurants } from "../template/TemplateRestaurants"

const SelectInput: React.FC<{restaurants: iGetRestaurants[]}> = (props) => {
    return (
        <div>
            <select>
                <option value="categorias" selected>Categorias</option>
                {/* renderizar as options com as categorias dos restaurantes */}
                {props.restaurants.map((restaurant) => {
                    return <option value={restaurant.categoria}>{restaurant.categoria}</option>
                })}
            </select>
            <select>
                <option value="ordem" selected>Ordem de avaliação</option>
                <option value="crescente">Crescente</option>
                <option value="decrescente">Decrescente</option>
            </select>
        </div>
    )
}

export default SelectInput