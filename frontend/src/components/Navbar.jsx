import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className="nav__logo">ELECTIONS APP</Link>
            <div>
                <menu>
                    <NavLink to="/elections">Elections</NavLink>
                    <NavLink to="/results">Results</NavLink>
                    <NavLink to="/logout">Logout</NavLink>
                </menu>
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar
