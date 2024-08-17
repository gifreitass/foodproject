import { useFormik } from "formik"
import axios from "axios"
import * as Yup from 'yup';
import { ModalStyle, ModalForm, ModalFormInputs, TitleModal, ModalInput, ModalTextArea, ModalLabel, ModalButton, ImageModal, DivFormik } from "../styled-components"

const ModalNewRestaurant: React.FC<{onClose: () => void}> = (props) => {

    const formik = useFormik({
        initialValues: {
            url: "",
            nome: "",
            categoria: "",
            avaliacao: "",
            sobre: ""
        },
        validationSchema: 
            Yup.object().shape({
                nome: Yup.string()
                    .required('Campo obrigatório')
                    .max(30, 'O restaurante deve possuir menos de 30 caracteres'),
                url: Yup.string()
                    .required('Campo obrigatório'),
                categoria: Yup.string()
                    .required('Campo obrigatório'),
                avaliacao: Yup.number()
                    .required('Campo obrigatório')
                    .typeError('O campo deve ser preenchido com um número')
                    .max(5, 'A avaliação máxima é de 5 estrelas'),
                sobre: Yup.string()
                    .required('Campo obrigatório')
                    .min(10, 'O campo de sobre precisa ter pelo menos 10 caracteres')
            }),
        onSubmit: async () => {
            await axios.post('http://localhost:3000/restaurantes', {
                url: formik.values.url,
                nome: formik.values.nome,
                categoria: formik.values.categoria,
                avaliacao: Number(formik.values.avaliacao),
                sobre: formik.values.sobre
            })
            formik.resetForm()
        }
    })

    return (
        <ModalStyle>
            <TitleModal>Cadastrar Restaurante</TitleModal>
            <ImageModal src="https://cdn-icons-png.flaticon.com/512/2734/2734822.png" alt="imagem com símbolo para fechar a janela" onClick={props.onClose} />
            <ModalForm onSubmit={formik.handleSubmit}>
                <ModalFormInputs>
                    <ModalLabel htmlFor="nome">Nome:</ModalLabel>
                    <ModalInput type="text" id="nome" onChange={formik.handleChange} value={formik.values.nome} />
                    {formik.errors.nome && (<DivFormik>{formik.errors.nome}</DivFormik>)}
                    <ModalLabel htmlFor="categoria">Categoria:</ModalLabel>
                    <ModalInput type="text" id="categoria" onChange={formik.handleChange} value={formik.values.categoria} />
                    {formik.errors.categoria && (<DivFormik>{formik.errors.categoria}</DivFormik>)}
                    <ModalLabel htmlFor="avaliacao">Avaliação:</ModalLabel>
                    <ModalInput type="text" id="avaliacao" onChange={formik.handleChange} value={formik.values.avaliacao} />
                    {formik.errors.avaliacao && (<DivFormik>{formik.errors.avaliacao}</DivFormik>)}
                    <ModalLabel htmlFor="url">Url do logo:</ModalLabel>
                    <ModalInput type="text" id="url" onChange={formik.handleChange} value={formik.values.url} />
                    {formik.errors.url && (<DivFormik>{formik.errors.url}</DivFormik>)}
                </ModalFormInputs>
                <ModalFormInputs>
                    <ModalLabel htmlFor="sobre">Sobre:</ModalLabel>
                    <ModalTextArea id="sobre" onChange={formik.handleChange} value={formik.values.sobre} />
                    {formik.errors.sobre && (<DivFormik>{formik.errors.sobre}</DivFormik>)}
                    <ModalButton type="submit">Cadastrar</ModalButton>
                </ModalFormInputs>
            </ModalForm>
        </ModalStyle>
    )
}

export default ModalNewRestaurant