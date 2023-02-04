import styled, { css } from "styled-components";
import { Link } from "react-router-dom"

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
    align-items: center;
    text-align: left;
    border-radius: 10px;
    padding: 15px;
    min-height: 35vh;
    gap: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 0.3s
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
    font-size: large
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
`

export const DivContainsAllProducts = styled.div`
    text-align: center
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