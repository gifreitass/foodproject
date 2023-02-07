import { useContext } from "react"
import { iGetProducts } from "../../interfaces/Interfaces"
import { CartContext } from "../CartProvider"
import { DivAddProduct, DivImageProduct, DivPriceProduct, DivProductStyle, DivTextProduct, ImageAddProduct, ImageProduct, PriceAndStock } from "../styled-components"

interface IPropsDivProducts extends iGetProducts {
    onClick: (evt: React.MouseEvent<HTMLImageElement>) => void,
}

const DivProducts: React.FC<IPropsDivProducts> = (props) => {
    const { numberProduct } = useContext(CartContext)

    return (
        <DivProductStyle>
            <DivTextProduct>
                <h2>{props.nome}</h2>
                <p>{props.descricao}</p>
                {props.promocao === "true" ?
                    <DivPriceProduct>
                        <PriceAndStock><s>R${props.valor}</s></PriceAndStock>
                        <PriceAndStock>R${props.valorPromocional}</PriceAndStock>
                    </DivPriceProduct>
                    :
                    <PriceAndStock>R${props.valor}</PriceAndStock>
                }
            </DivTextProduct>
            <DivImageProduct>
                <DivAddProduct>
                    <ImageAddProduct id={props.nome} onClick={props.onClick} src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="soma" />
                    <PriceAndStock>{`${numberProduct(props.nome)}`}</PriceAndStock>
                </DivAddProduct>
                <ImageProduct src={props.url} alt={props.descricao} />
            </DivImageProduct>
        </DivProductStyle>
    )
}

export default DivProducts