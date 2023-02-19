import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import UserInfo from "./Users/UserInfo";

const Header = () => {
    const {isLoggedIn} = useContext(UserContext);
    return(
        <header>
                 <h1> Hello </h1>
                <div className="menu">
                    <Link to={'/home'}> Home </Link>
                    <Link to={'/answers'}> Answers </Link>
                    <Link to={'/newQuestion'}> New Question </Link>
                    <Link to={'/newAnswer'}> New Answer </Link>
                </div>

                {isLoggedIn ?
                   <UserInfo />
                    :
                    <div className="logreg">
                        <Link to={'/login'}> Login </Link>
                        <Link to={'/register'}> Register </Link>
                    </div>
                }
                    {/* <div className="logreg">
                        <Link to={'/login'}> Login </Link>
                        <Link to={'/register'}> Register </Link>
                    </div> */}
        </header>
    )
}

export default Header;