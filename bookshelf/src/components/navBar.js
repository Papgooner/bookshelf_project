import { Link } from "react-router-dom";
import "./navBar.css";

function NavBar() {
    return (
        <nav>
            <Link className="NavLinks" to="/">Front-Page</Link>
            <Link className="NavLinks" to="/Shelf">Shelf</Link>
        </nav>
    )
}

export default NavBar;