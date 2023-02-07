import styled from "styled-components";

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
    padding: 10px;
    width: 20vw;
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

export const DivModal = styled.div`
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