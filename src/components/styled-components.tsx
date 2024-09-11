import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Image = styled.img`
    width: 40px;
    margin: 10px;
    cursor: pointer;
`
export const DescribreRestaurant = styled.div`
    font-size: 15px;
`

export const ImageRate = styled.img`
    width: 20px;
`

export const ImageRestaurant = styled.img`
    width: 80px;
`

export const NavBarStyle = styled.nav`
    background-color: #F4A460;
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const InputStyle = styled.input`
    border-radius: 5px;
    padding: 10px 20px 10px 20px;
    width: fit-content;
    background-color: #EEEEEE;
`

export const SelectInputStyle = styled.select`
    font-size: 14px;
    margin: 15px;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer
`

export const DivRestaurantStyle = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    text-align: left;
    border-radius: 10px;
    padding: 10px;
    min-height: 20vh;
    gap: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    transition: 0.3s;
    cursor: pointer;
    color: black;
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }
    
    @media only screen and (max-width: 900px) {
        min-height: 30vh;
    }
`

export const SectionFilter = styled.div`
   text-align: center;
   background-color: #eeeeee;
   min-height: 5vh;
`

export const RestaurantsMainStyle = styled.main`
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    grid-gap: 20px;
    width: 80vw;
    padding: 20px;
    margin: 0px auto;
    align-items: stretch;
    &>a{
        text-decoration: none;
    }
    @media only screen and (max-width: 665px) {
       display: flex;
       flex-direction: column;
    }
`

export const DivContainsRestaurants = styled.div`
    text-align: center;
    background-color: #eeeeee;
    min-height: 85vh;
    
`

export const TextRestaurantRate = styled.div`
    display: flex;
    gap: 5px;
`

export const ModalStyle = styled.div`
    background-color: #808080;
    width: 45vw;
    border-radius: 10px;
    text-align: center;
    position: absolute;
    padding: 30px;
    @media only screen and (max-width: 665px) {
        width: 80vw;
    }
`

export const DivTitleModal = styled.div`
    display: flex;
    justify-content: space;
`

export const ModalForm = styled.form`
    display: flex;
    justify-content: space-evenly;
`

export const ModalFormInputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
    gap: 10px;
`

export const TitleModal = styled.p`
    padding: 10px;
    color: white;
    font-size: 1.5em;
`

export const ModalInput = styled.input`

    background-color: #EEEEEE;
    border-radius: 5px;
    padding: 5px;
    border: none;
`

export const ModalTextArea = styled.textarea`

    background-color: #EEEEEE;
    border-radius: 5px;
    height: 5vw;
    width: 15vw;
`

export const ModalLabel = styled.label`
    color: white;
`

export const ModalButton = styled.button`
    background-color: #000000;
    color: white;
    padding: 5px 20px 5px 20px;
    border-radius: 5px;
    cursor: pointer;
    width: fit-content;
`

export const DivModalNewRestaurant = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(2px);
    background-color: rgba(169, 169, 169, 0.3);
`

export const ImageModal = styled.img`
    width: 30px;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
`

export const DivFormik = styled.div`
    font-size: 13px;
    font-weight: 500;
`

export const DivReturnRestaurants = styled.div`
    display: flex;
    align-items: center
`

export const TitleReturnRestaurants = styled.p`
    font-size: large;
    color: black
`

export const LinkReturnRestaurant = styled(Link)`
    text-decoration: none
`

export const ImageProduct = styled.img`
    width: 120px
`

export const ImageAddProduct = styled.img`
    width: 30px;
    cursor: pointer
`

export const DivProductStyle = styled.div`
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    border-radius: 10px;
    padding: 15px;
    min-height: fit-content;
    gap: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 0.3s;
    &:hover {
        box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.2);
        height: 100%;
    }
`
export const DivAddProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 5px
`

export const DivTextProduct = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px
`

export const DivImageProduct = styled.div`
    display: flex;
    gap: 10px
`

export const DivPriceProduct = styled.div`
    display: flex;
    gap: 10px
`

export const PriceAndStock = styled.p`
    font-size: large;
    font-weight: 700;
`

export const MainProducts = styled.main`
    background-color: #eeeeee;
`

export const AllProductsStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    grid-gap: 20px;
    width: 80vw;
    padding: 20px;
    justify-content: center;
    margin: 0 auto;
    @media only screen and (max-width: 800px){
        grid-template-columns: repeat(1, 1fr);
    }
`

export const DivContainsAllProducts = styled.div`
    text-align: center;
    margin-top: 20px
`

export const TitleRestaurantStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    background-color: white;
    width: fit-content;
    margin: 30px auto 10px auto;
    border-radius: 10px;
    padding: 20px 40px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    @media only screen and (max-width: 800px){
        margin: 40px;
        text-align: center;
        /* width: 70vw; */
        flex-wrap: wrap;
    }
`

export const ImageTitleRestaurant = styled.img`
    width: 80px
`

const sharedTitle = css`
    font-size: 28px;
    font-weight: 500
`

export const TextTitleRestaurant = styled.p`
    ${sharedTitle}
`

export const TextRateTitleRestaurant = styled.p`
    ${sharedTitle};
    color: #ffc107
`

export const ImageRateTitleRestaurant = styled.img`
    width: 28px
`

export const DivModalShoppingCart = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: end;
    align-items: center;
    backdrop-filter: blur(2px);
    background-color: rgba(169, 169, 169, 0.3);
    top: 0;
`

export const ModalStyleShoppingCart = styled.div`
    background-color: #F4A460;
    width: 25vw;
    height: 100vh;
    text-align: left;
    position: fixed;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 800px){
        width: 50vw;
    }
`

export const ImageCloseModal = styled.img`
    width: 30px;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
`

export const DivContainsProductOnShoppingCart = styled.div`
    background-color: white;
    margin-top: 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    padding: 15px;
`

export const DivProductOnShoppingCart = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 500;
`

export const TitleRestaurantShoppingCart = styled.p`
    padding: 10px 0 0 15px;
    font-size: 25px;
    font-weight: 500;
`

export const TitleShoppingCart = styled.p`
    padding: 10px 0 0 15px;
    font-size: 20px;
    font-weight: 400;
    margin-top: 20px;
`

export const RemoveButton = styled.p`
    cursor: pointer;
    color: red;
    font-weight: 500;
    position: relative;
    text-align: right;
`

export const DivProducts = styled.div`
    flex: 1;
`

export const DivFinalShoppingCart = styled.div`
    padding: 15px;
    margin: 10px 0 10px 0;
    text-align: center;
`

export const DivTotal = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 20px;
`

export const ButtonShoppingCart = styled.button`
    background-color: #000000;
    color: white;
    padding: 10px 40px 10px 40px;
    font-weight: 500;
    font-size: 15px;
    margin-top: 15px;
    cursor: pointer;
`

export const DivModalClient = styled.div`
    position: fixed;
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const DivProductsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`