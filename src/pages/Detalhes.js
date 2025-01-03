import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../axios";

export const Detalhes = () => {
    const [dados, setDados] = useState()
    const {id} = useParams()

    
    async function buscar_curso() {
        try {
            const { data } = await api.get(`${id}`);
            setDados(data.fields); 
        } catch (error) {
            console.error("Erro ao buscar o curso:", error);
        }
    }
    useEffect(()=>{
        buscar_curso()
    }, [id])

    return(
        <>
            <h1>Detalhes</h1>
            {dados && <>
                <p>{dados.titulo}</p>
                <p>{dados.subtitulo}</p>
                <img src={dados.fotos}/>
                <p>{dados.descricao}</p>
                <p>{dados.duracao}</p>
                <p>{dados.sobre}</p>
            </>}
            
        </>
    )
}