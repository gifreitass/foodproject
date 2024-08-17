import { useEffect, useState } from "react"
import { iPedidos } from "../interfaces/Interfaces"
import TemplateOrders from "../components/template/TemplateOrders"

const PageOrders = () => {
    const [pedidos, setPedidos] = useState<iPedidos[]>([])

    const localData: iPedidos[] = JSON.parse(localStorage.getItem("pedidos") || '[]')
    const giLocalData: iPedidos[] = JSON.parse(localStorage.getItem("mcPedidos") || '[]')
    const mergedLocalData = [...localData, ...giLocalData]

    useEffect(() => {
        setPedidos(mergedLocalData)
    }, [])

    return (
        <TemplateOrders pedidos={pedidos} />
    )
}

export default PageOrders