import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import UserContext from "../context/UserContext";
import UserInfo from "./Users/UserInfo";

const Header = () => {
    const {isLoggedIn} = useContext(UserContext);
    return(
        <header>
            <div className="headerlog">
            <div className="logo">
                    <img src="https://www.kindpng.com/picc/m/278-2785284_discussion-forum-icon-png-download-icon-discussion-forum.png" alt="logo" style={{height:'100px'}}/>
                 </div>
                <div className="menu">
                    <Link to={'/home'}> Home </Link>
                    {/* <Link to={'/answers'}> Answers </Link>
                    <Link to={'/newQuestion'}> New Question </Link>
                    <Link to={'/newAnswer'}> New Answer </Link> */}
                </div>

                {isLoggedIn ?
                   <UserInfo />
                    :
                    <div className="logreg">
                        <div>
                        <Link to={'/login'}> Login </Link>

                        </div>
                       <div>
                       <Link to={'/register'}> Register </Link>
                       </div>
                       
                    </div>
                }
            </div>
                
                <hr />
                <Outlet/>
                    {/* <div className="logreg">
                        <Link to={'/login'}> Login </Link>
                        <Link to={'/register'}> Register </Link>
                    </div> */}
        </header>
    )
}

export default Header;