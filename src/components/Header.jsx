import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header>
                 <h1> Hello </h1>
                <div className="menu">
                    <Link to={'/home'}> Home </Link>
                    <Link to={'/answers'}> Answers </Link>
                    <Link to={'/newQuestion'}> New Question </Link>
                    <Link to={'/newAnswer'}> New Answer </Link>
                </div>
                    <div className="logreg">
                        <Link to={'/login'}> Log in </Link>
                        <Link to={'/register'}> Register </Link>
                    </div>
        </header>
    )
}

export default Header;