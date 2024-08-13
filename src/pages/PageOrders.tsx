import { useEffect, useState } from "react"
import TemplateOrders from "../allRestaurants/template/TemplateOrders"
import { Pedidos } from "../allRestaurants/template/TemplateProducts"

const PageOrders = () => {
    const [pedidos, setPedidos] = useState<Pedidos[]>([])

    const localData: Pedidos[] = JSON.parse(localStorage.getItem("pedidos") || '[]')
    const giLocalData: Pedidos[] = JSON.parse(localStorage.getItem("mcPedidos") || '[]')
    const mergedLocalData = [...localData, ...giLocalData]

    useEffect(() => {
        setPedidos(mergedLocalData)
    }, [])

    return (
        <TemplateOrders pedidos={pedidos} />
    )
}

export default PageOrders