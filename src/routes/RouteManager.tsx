import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { GetRestaurantsContext } from "../allRestaurants/context/GetRestaurantsContext";
import TemplateProducts from "../mcDonalds/templates/TemplateProducts";
import PageAllRestaurants from "../pages/PageAllRestaurants";
import PageOrders from "../pages/PageOrders";

export default function RouteManager() {
    const { restaurants } = useContext(GetRestaurantsContext)
    const [routes, setRoutes] = useState([])

    useEffect(() => {
        restaurants.map((restaurant) => {
            //remove os espaços, remove aspas simples, converte para caixa baixa, dividi a string onde tiver hifen 
            var routeFormated = restaurant.nome.replace(/\s/g, '').replace(/(?<!^)\'(?!$)/, '').toLowerCase().split("-")
            //@ts-ignore ---> Ver com o luiz o erro abaixo -- remova o ts ignore para ver o erro
            setRoutes(routes => [...routes, routeFormated[0]])
        })

        setRoutes(routes => [...new Set(routes)])

    }, [restaurants])

    return (
        <Routes>
            <Route path='/' element={<PageAllRestaurants />} />
            <Route path='/pedido' element={<PageOrders />} />
            <Route path='/mcdonalds' element={<TemplateProducts />} />
            {/* {routes.map((item, index) => {
                console.log("/" + item)
                return <Route key={index} path={"/" + item} element={<TemplateProducts />} />
            })} */}
            <Route path='*' element={<h1>Not Found</h1>} /> {/* Rota para erros de páginas não encontradas */}
        </Routes>
    )
}