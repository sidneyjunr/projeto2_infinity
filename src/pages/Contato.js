import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Contato = ()=>{
    
    
        const navegacao = useNavigate()
    
        const [nome, setNome] = useState("")
        const [email, setEmail] = useState("")
        const [mensagem, setMsg] = useState("")
        
    
        function enviar_dados(e){
            e.preventDefault()
            navegacao("/sucesso", {
                state:{nome,email,mensagem}
            })
           
            
            }
        return(
            <>
                <h1>Entre em Contato!</h1>
                <form onSubmit={enviar_dados}>
                    <label>Nome</label>
                    <br></br>
                    <input onChange={(e)=> setNome(e.target.value)} required type="text"/>
                    <br></br>
    
                    <label>Email</label>
                    <br></br>
                    <input onChange={(e)=> setEmail(e.target.value)} required type="email"/>
                    <br></br>
    
                    <label>Mensagem</label>
                    <br></br>
                    <textarea onChange={(e)=> setMsg(e.target.value)}required cols ={20} rows= {5}/>
                    <br></br>
                    
    
                    <button>Enviar</button>
                </form>
                
            </>
        )
}


export default Contato