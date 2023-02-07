import { Link } from "react-router-dom"
import styled from "styled-components"

const ModalArea = styled.section` 
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(1px);
    background-color: rgba(0,0,0,0.3);
    top: 0;
`
const Form = styled.div`
    background-color: white;
    padding: 20px;
    position: fixed;
    align-items: center;
    width: 400px;
    @media only screen and (max-width: 460px) {
        width: 300px;
    }
`
const InputField = styled.div`
    display: flex;
    flex-direction: column;
`

const ButtonConfirm = styled.button`
    width: 100%;
`
const CloseModal = styled.button`
    background-color: white;
    border: none;
    cursor: pointer;
    height: min-content;
`
const ModalConfirmation: React.FC<{ modalFnc: any }> = (props) => {

    const AlertConfirm = ()=>{
        alert("Usúario Confirmado, Bon Appetit!")
    }

    return (
        <ModalArea>
            <Form>
                <CloseModal onClick={props.modalFnc} >
                    <img height={30} src="https://cdn.icon-icons.com/icons2/1993/PNG/512/cancel_circle_close_delete_discard_file_x_icon_123219.png" alt="close" />
                </CloseModal>
                <h1>Confirme seu Usuário</h1>
                <InputField>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" />
                </InputField>
                <InputField>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" />
                </InputField>
                <InputField>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" name="password" />
                </InputField>
                <InputField>
                    <label htmlFor="cpf">CPF:</label>
                    <input type="text" name="cpf" />
                </InputField>

                <Link onClick={AlertConfirm} to={"/pedido"}> <ButtonConfirm>Verificar</ButtonConfirm></Link>
            </Form>
        </ModalArea>
    )
}
export default ModalConfirmation