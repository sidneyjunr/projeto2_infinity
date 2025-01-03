import { useLocation } from "react-router-dom"

export const Sucesso = ()=>{

    const localizacao = useLocation()
    return(
        <>
        <h1> Mensagem Enviada com sucesso</h1>
        <p>Nome: {localizacao.state.nome}</p>
        <p>Email: {localizacao.state.email}</p>
        <p>Mensagem: {localizacao.state.mensagem}</p>
        </>
    )
}