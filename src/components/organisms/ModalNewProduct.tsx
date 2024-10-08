import axios from "axios";
import { useFormik } from "formik"
import * as Yup from 'yup';
import { DivFormik, ImageModal, ModalButton, ModalForm, ModalFormInputs, ModalInput, ModalLabel, ModalStyle, ModalTextArea, TitleModal } from "../styled-components";
import { iGetProducts } from "../../interfaces/Interfaces";

const ModalNewProduct: React.FC<{ onClose: () => void, restauranteId: number, setProducts: React.Dispatch<React.SetStateAction<iGetProducts[]>>, setModalProductVisible: React.Dispatch<React.SetStateAction<boolean>> }> = (props) => {
    const formik = useFormik({
        initialValues: {
            url: "",
            nome: "",
            valor: "",
            promocao: "",
            valorPromocional: "",
            descricao: "",
        },
        validationSchema:
            Yup.object().shape({
                nome: Yup.string()
                    .required('Campo obrigatório')
                    .max(30, 'O restaurante deve possuir menos de 30 caracteres'),
                url: Yup.string()
                    .required('Campo obrigatório'),
                valor: Yup.number()
                    .typeError('O campo precisa ser preenchido com um número, se quiser preencher um número decimal, utilize o ponto')
                    .required('Campo obrigatório'),
                valorPromocional: Yup.number()
                    .typeError('O campo precisa ser preenchido com um número, se quiser preencher um número decimal, utilize o ponto'),
                descricao: Yup.string()
                    .required('Campo obrigatório')
            }),
        onSubmit: async () => {
            const newProduct = {
                nome: formik.values.nome,
                valor: Number(formik.values.valor),
                promocao: formik.values.promocao,
                valorPromocional: Number(formik.values.valorPromocional),
                descricao: formik.values.descricao,
                url: formik.values.url,
                restauranteId: Number(props.restauranteId)
            }
            try {
                await axios.post(`https://foodproject-api.vercel.app/produtos`, newProduct)
                formik.resetForm()
                props.setProducts(product => [...product, newProduct])
                props.setModalProductVisible(false)
            } catch (error) {
                alert('Erro ao cadastrar produto, tente novamente preenchendo todos os campos necessários')
            }
        }
    })

    return (
        <ModalStyle>
            <TitleModal>Cadastrar Produto</TitleModal>
            <ImageModal src="https://cdn-icons-png.flaticon.com/512/2734/2734822.png" alt="imagem com símbolo para fechar a janela" onClick={props.onClose} />
            <ModalForm onSubmit={formik.handleSubmit}>
                <ModalFormInputs>
                    <ModalLabel htmlFor="nome">Nome:</ModalLabel>
                    <ModalInput type="text" id="nome" onChange={formik.handleChange} value={formik.values.nome} />
                    {formik.errors.nome && (<DivFormik>{formik.errors.nome}</DivFormik>)}
                    <ModalLabel htmlFor="valor">Valor:</ModalLabel>
                    <ModalInput type="text" id="valor" onChange={formik.handleChange} value={formik.values.valor} />
                    {formik.errors.valor && (<DivFormik>{formik.errors.valor}</DivFormik>)}
                    <ModalLabel htmlFor="promocao">Está em promoção (Sim ou não)?</ModalLabel>
                    <select value={formik.values.promocao} name="promocao" onChange={formik.handleChange}>
                        <option value='' label="Escolha uma opção">Escolha uma opção</option>
                        <option value='true' label="Sim">Sim</option>
                        <option value='false' label="Não">Não</option>
                    </select>
                    {formik.errors.promocao && (<DivFormik>{formik.errors.promocao}</DivFormik>)}
                    <ModalLabel htmlFor="valorPromocional">Valor promocional (se houver):</ModalLabel>
                    <ModalInput type="text" id="valorPromocional" onChange={formik.handleChange} value={formik.values.valorPromocional} />
                    {formik.errors.valorPromocional && (<DivFormik>{formik.errors.valorPromocional}</DivFormik>)}
                </ModalFormInputs>
                <ModalFormInputs>
                    <ModalLabel htmlFor="descricao">Descrição:</ModalLabel>
                    <ModalInput type="text" id="descricao" onChange={formik.handleChange} value={formik.values.descricao} />
                    {formik.errors.descricao && (<DivFormik>{formik.errors.descricao}</DivFormik>)}
                    <ModalLabel htmlFor="url">Url da imagem:</ModalLabel>
                    <ModalInput type="text" id="url" onChange={formik.handleChange} value={formik.values.url} />
                    {formik.errors.url && (<DivFormik>{formik.errors.url}</DivFormik>)}
                    <ModalButton type="submit">Cadastrar</ModalButton>
                </ModalFormInputs>
            </ModalForm>
        </ModalStyle>
    )
}

export default ModalNewProduct