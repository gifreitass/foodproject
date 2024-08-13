import { useContext } from "react"
import { iGetProducts, iGetRestaurants } from "../../interfaces/Interfaces"
import removeDuplicatesByNome from "../../utils/removeDuplicatesByNome"
import { CartContext } from "../../context/CartProvider"
import { DivContainsProductOnShoppingCart, DivProductOnShoppingCart, ImageCloseModal, ModalStyleShoppingCart, RemoveButton, TitleShoppingCart, TitleRestaurantShoppingCart, DivTotal, DivProducts, DivFinalShoppingCart, ButtonShoppingCart } from "../styled-components"

const ModalShoppingCart: React.FC<{ onClose: () => void, products: iGetProducts[], restaurant: iGetRestaurants, onClick: () => void }> = (props) => {
    const { productsCart, numberProduct, removeProduct, totalCart } = useContext(CartContext)

    const handleClickRemoveButton = (id: number) => {
        removeProduct(id)
    }

    return (
        <ModalStyleShoppingCart>
            <ImageCloseModal src="https://cdn-icons-png.flaticon.com/512/2734/2734822.png" alt="imagem com símbolo para fechar a janela" onClick={props.onClose} />
            <TitleShoppingCart>Seu pedido em</TitleShoppingCart>
            <TitleRestaurantShoppingCart>{props.restaurant.nome}</TitleRestaurantShoppingCart>
            <DivProducts>
                {removeDuplicatesByNome(productsCart).map((productCart: iGetProducts, index: number) => {
                    return <DivContainsProductOnShoppingCart key={`productCart-item${index}`}>
                        <DivProductOnShoppingCart>
                            <p>{`${numberProduct(productCart.nome)}x ${productCart.nome}`}</p>
                            {productCart.valorPromocional > 0 ?
                                <p>R${productCart.valorPromocional}</p> :
                                <p>R${productCart.valor}</p>
                            }
                        </DivProductOnShoppingCart>
                        <p>{productCart.descricao}</p>
                        <RemoveButton onClick={() => handleClickRemoveButton(Number(productCart.id))}>Remover</RemoveButton>
                    </DivContainsProductOnShoppingCart>
                })}
            </DivProducts>
            <DivFinalShoppingCart>
                <DivTotal>
                    <p>Total</p>
                    <p>R${totalCart.toFixed(1)}</p>
                </DivTotal>
                <ButtonShoppingCart onClick={props.onClick}>Finalizar pedido</ButtonShoppingCart>
            </DivFinalShoppingCart>
        </ModalStyleShoppingCart>
    )
}

export default ModalShoppingCart