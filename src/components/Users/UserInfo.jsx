import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";

const UserInfo = () => {

    const {isLoggedIn, setIsLoggedIn} = useContext(UserContext);
    const navigate = useNavigate();

    const out = () => {
        setIsLoggedIn(null);
        navigate('/home');
    }
    return(
        <>
        <div className="info">
            <img src={isLoggedIn.avatar} alt="avatar" style={{height:'50px'}} />
            <p>{isLoggedIn.username}</p>
            <button onClick={out}> Log Out</button>
        </div>
        </>
    )
}

export default UserInfo; 