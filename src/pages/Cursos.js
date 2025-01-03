import { Link } from "react-router-dom"

export const Cursos = () => {
    return(
        <>
            <h1>Lista de cursos: </h1>
            <ul>
                <li>
                    <Link to="/detalhes/programacao">Programação Fullstack</Link>
                </li>
                <li>
                    <Link to="/detalhes/data">Data Science</Link>
                </li>
                <li>
                    <Link to="/detalhes/marketing">Marketing Digital</Link>
                </li>
                <li>
                    <Link to="/detalhes/design">Design Fullstack</Link>
                </li>

                <li>
                    <Link to="/detalhes/art">Art Design</Link>
                </li>
                <li>
                    <Link to="/detalhes/film">Film Design</Link>
                </li>
                <li>
                    <Link to="/detalhes/fotografia">Fotografia Design</Link>
                </li>
            </ul>
        </>
    )
}