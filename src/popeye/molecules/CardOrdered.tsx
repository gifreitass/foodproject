import styled from "styled-components"

const Card = styled.div`
    width: 100%;
    height: 100px;
    margin: 10px 0px;
    background-color: red;
`

const CardOrdered = (props:any) => {
    return (
        <Card>
            <h1>{props.nome}</h1>
        </Card>
    )
}

export default CardOrdered