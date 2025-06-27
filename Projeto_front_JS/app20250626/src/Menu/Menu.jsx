import { Link } from "react-router-dom";

function Menu(){
    return(
        <nav>
            <Link to="/">Homepage</Link>
            <Link to="/sobre">Sobre nós</Link>
        </nav>
    )
}

export default Menu;