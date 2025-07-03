import { Link } from "react-router-dom";

function Menu() {
    return ( 
        <nav>
            <Link to="/">Página inicial</Link>
            <Link to="/faleConosco">Fale conosco</Link>

        </nav>
     );
}

export default Menu;