import { Link } from "react-router-dom";

export const Menu = ()=>{

    return(
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/cursos">Cursos</Link>
                </li>
                <li>
                    <Link to="/contato">Contato</Link>
                </li>

            </ul>
        </>
    )
}
