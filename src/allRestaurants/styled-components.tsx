import styled from "styled-components";

export const Image = styled.img`
    width: 40px;
    margin: 10px;
    cursor: pointer
`

export const ImageRate = styled.img`
    width: 15px
`

export const ImageRestaurant = styled.img`
    width: 60px;
`

export const NavBarStyle = styled.nav`
    background-color: #F4A460;
    display: flex;
    justify-content: space-between;
    align-items: center
`

export const InputStyle = styled.input`
    border-radius: 5px;
    padding: 10px;
    width: 20vw;
    background-color: #EEEEEE
`

export const DivRestaurantStyle = styled.div`
    background-color: white;
    display: flex;
    width: 20vw;
    height: 35vh;
    border-radius: 10px;
    margin: 10px;
    padding: 15px;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    gap: 15px
`

export const RestaurantsMainStyle = styled.main`
    display: flex;
    justify-content: center;
    flex-wrap: wrap
`

export const DivContainsRestaurants = styled.div`
    text-align: center;
    margin-top: 30px;
`

export const TextRestaurantRate = styled.p`
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center
`

export const ModalStyle = styled.div`
    background-color: #808080;
    width: 45vw;
    border-radius: 10px;
    text-align: center;
    position: absolute;
    padding: 30px
`

export const DivTitleModal = styled.div`
    display: flex;
    justify-content: space
`

export const ModalForm = styled.form`
    display: flex;
    justify-content: space-evenly
`

export const ModalFormInputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
    gap: 10px
`

export const TitleModal = styled.p`
    padding: 10px;
    color: white;
    font-size: 1.5em
`

export const ModalInput = styled.input`
    background-color: #EEEEEE;
    border-radius: 5px;
    padding: 5px;
    border: none
`

export const ModalTextArea = styled.textarea`
    background-color: #EEEEEE;
    border-radius: 5px;
    height: 5vw;
    width: 15vw
`

export const ModalLabel = styled.label`
    color: white
`

export const ModalButton = styled.button`
    background-color: #000000;
    color: white;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    width: 8vw;
`

export const DivModal = styled.div`
    position: absolute;
    width: 100vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(169, 169, 169, 0.7)
`

export const ImageModal = styled.img`
    width: 30px;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer
`

export const DivFormik = styled.div`
    font-size: 13px;
    font-weight: 500
`