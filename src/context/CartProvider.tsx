import { createContext, useEffect, useMemo, useState } from "react";
import { iGetProducts } from "../interfaces/Interfaces";
import { Pedidos } from "../allRestaurants/template/TemplateProducts";

interface ICartContext {
    productsCart: iGetProducts[],
    setProductsCart: (productsCart: iGetProducts[]) => void,
    numberProduct: (nameProduct: string) => number,
    removeProduct: (id: number) => void,
    totalCart: number,
    createOrder: (pedido: Pedidos[]) => void
}

export const CartContext = createContext<ICartContext>({ productsCart: [], setProductsCart: () => { }, numberProduct: () => 0, removeProduct: () => { }, totalCart: 0, createOrder: () => {} })

export default function CartProvider (props: any) {
    const [productsCart, setProductsCart] = useState<iGetProducts[]>([])

    const totalCart = useMemo(() => {
        const total = productsCart.reduce((acc, product) => {
            if (Number(product.valorPromocional) > 0){
                return acc + Number(product.valorPromocional)
            }
            return acc + Number(product.valor)
        }, 0)
        return total
    }, [productsCart])

    function numberProduct(nameProduct: string) {
        const number = productsCart.filter((productCart) => productCart.nome === nameProduct).length
        return number
    }

    function removeProduct(id: number) {
        const index = productsCart.findIndex((product) => product.id === id)
        const copyProductsCart = [...productsCart]
        copyProductsCart.splice(index, 1)
        setProductsCart(copyProductsCart)
    }

    function createOrder (pedido: Pedidos[]) {
        const pedidosStorage = localStorage.getItem("mcPedidos")
        const parsedPedidosStorage = JSON.parse(pedidosStorage || '[]')
        parsedPedidosStorage.push(pedido)
        localStorage.setItem("mcPedidos", JSON.stringify(parsedPedidosStorage))
    }

    return (
        <CartContext.Provider value={{ productsCart, setProductsCart, numberProduct, removeProduct, totalCart, createOrder }}>
            {props.children}
        </CartContext.Provider>
    )
}