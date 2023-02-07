import { ModalStyle, ModalForm, ModalFormInputs, TitleModal, ModalInput, ModalTextArea, ModalLabel, ModalButton, ImageModal, SelectInputStyle } from "../../allRestaurants/styled-components"

const ModalClient: React.FC<{onClose: () => void}> = (props) => {
    return (
        <ModalStyle>
            <TitleModal>Finalizar pedido</TitleModal>
            <ImageModal src="https://cdn-icons-png.flaticon.com/512/2734/2734822.png" alt="imagem com símbolo para fechar a janela" onClick={props.onClose} />
            <ModalForm>
                <ModalFormInputs>
                    <ModalLabel htmlFor="nome">Nome completo:</ModalLabel>
                    <ModalInput type="text" id="nome" />
                    <ModalLabel htmlFor="telefone">Telefone:</ModalLabel>
                    <ModalInput type="text" id="telefone"/>
                    <ModalLabel htmlFor="email">E-mail:</ModalLabel>
                    <ModalInput type="text" id="email"/>
                    <SelectInputStyle>
                        <option value="pagamento">Forma de pagamento</option>
                        <option value="pagamento">Pix</option>
                        <option value="pagamento">Cartão de crédito</option>
                        <option value="pagamento">Vale Refeição</option>
                    </SelectInputStyle>
                </ModalFormInputs>
                <ModalFormInputs>
                    <ModalLabel htmlFor="sobre">Observação do pedido:</ModalLabel>
                    <ModalTextArea id="sobre"/>
                    <ModalButton type="submit">Finalizar</ModalButton>
                </ModalFormInputs>
            </ModalForm>
        </ModalStyle>
    )
}

export default ModalClient