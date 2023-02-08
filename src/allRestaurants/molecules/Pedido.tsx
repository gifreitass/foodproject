import styled from "styled-components"

const DivPedido = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: white;
    transition: 0.3s;
    height: 300px;
    overflow-y: auto;
    border-radius: 10px;
    font-size: 20px;

    @media only screen and (max-width: 600px) {
       flex-direction: column;
    }
  
`
const NameProduct = styled.h5`
    border-bottom: 2px dashed black;
    color: red;
`
const UnProduct = styled.span`
    color: black;
`


const Pedido: React.FC<{ pedidos: any }> = (props) => {
    return (
        <DivPedido  >
            <h3>Pedido</h3>
            <h5>{props.pedidos[0].nomeRestaurant}</h5>
            <img width={100} src={props.pedidos[0].urlRestaurant} alt="" />
            {
                props.pedidos.map((produto: { nome: any; qtd: any }) => {
                    return (
                        <>
                            <NameProduct key={Math.random().toString()}>{produto.nome} - <UnProduct>{produto.qtd}un</UnProduct></NameProduct>
                        </>
                    )
                })
            }

        </DivPedido>
    )
}

export default Pedido
