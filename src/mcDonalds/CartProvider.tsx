import { createContext, useState } from "react";
import { iGetProducts } from "../interfaces/Interfaces";

interface ICartContext {
    productsCart: iGetProducts[],
    setProductsCart: any,
    addProductCart: (id: number) => void
    numberProduct: (nameProduct: string) => void
}

export const CartContext = createContext<ICartContext>({ productsCart: [], setProductsCart: () => { }, addProductCart: () => { }, numberProduct: () => { } })

export default function CartProvider (props: any) {
    const [productsCart, setProductsCart] = useState<iGetProducts[]>([])

    function addProductCart (id: number) {
        const copyProductsCart = [...productsCart]

        const item = copyProductsCart.find((product) => {product.id === id})

        console.log(item)

        if (!item) {
            
        }
    }

    function numberProduct (nameProduct: string) {
        const number = productsCart.filter((productCart) => productCart.nome === nameProduct).length
        return number
    }

    return (
        <CartContext.Provider value={{ productsCart, addProductCart, setProductsCart, numberProduct }}>
            {props.children}
        </CartContext.Provider>
    )
}