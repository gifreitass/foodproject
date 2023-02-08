import { useContext, useEffect, useState } from "react"
import TemplateOrders from "../allRestaurants/template/TemplateOrders"

const PageOrders = () => {
    const [pedidos, setPedidos] = useState([])

    const localData = JSON.parse(localStorage.getItem("pedidos") || '')

    useEffect(() => {
        setPedidos(localData)
    }, [])

    return (
        <TemplateOrders pedidos={pedidos} />
    )
}

export default PageOrders