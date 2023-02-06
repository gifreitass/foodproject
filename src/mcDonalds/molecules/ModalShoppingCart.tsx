import { iGetRestaurants } from "../../interfaces/Interfaces"
import { DivContainsProductOnShoppingCart, DivProductOnShoppingCart, ImageCloseModal, ModalStyleShoppingCart, RemoveButton, TitleShoppingCart, TitleRestaurantShoppingCart, DivTotal, DivProducts, DivFinalShoppingCart, ButtonShoppingCart } from "../styled-components"
import { iGetProducts } from "../templates/TemplateProducts"

const ModalShoppingCart: React.FC<{onClose: () => void, products: iGetProducts[], restaurant: iGetRestaurants}> = (props) => {
    return (
        <ModalStyleShoppingCart>
            <ImageCloseModal src="https://cdn-icons-png.flaticon.com/512/2734/2734822.png" alt="imagem com símbolo para fechar a janela" onClick={props.onClose}/>
            <TitleShoppingCart>Seu pedido em</TitleShoppingCart>
            <TitleRestaurantShoppingCart>{props.restaurant.nome}</TitleRestaurantShoppingCart>
            {/* renderizar os produtos */}
            <DivProducts>
                <DivContainsProductOnShoppingCart>
                    <DivProductOnShoppingCart>
                        <p>1x Produto 1</p>
                        <p>R$25,9</p>
                    </DivProductOnShoppingCart>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsa, maxime facilis obcaecati architecto, aliquid suscipit molestias a</p>
                    <RemoveButton>Remover</RemoveButton>
                </DivContainsProductOnShoppingCart>
                <DivContainsProductOnShoppingCart>
                    <DivProductOnShoppingCart>
                        <p>1x Produto 1</p>
                        <p>R$25,9</p>
                    </DivProductOnShoppingCart>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsa, maxime facilis obcaecati architecto, aliquid suscipit molestias a</p>
                    <RemoveButton>Remover</RemoveButton>
                </DivContainsProductOnShoppingCart>
            </DivProducts>
            <DivFinalShoppingCart>
                <DivTotal>
                    <p>Total</p>
                    <p>R$130,9</p>
                </DivTotal>
                <ButtonShoppingCart>Finalizar pedido</ButtonShoppingCart>
            </DivFinalShoppingCart>
        </ModalStyleShoppingCart>
    )
}

export default ModalShoppingCart