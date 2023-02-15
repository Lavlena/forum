import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";

const UserContext = createContext();

const UserProvider = ({children}) =>{
    
const [users, setUsers] = useState (null);
const [isLoggedIn, setIsLoggedIn] = useState (false);

//STATE FUNCTION
const addUser = (newUser) => {
setUsers ([...users,newUser]); 
postUser(newUser);
}


//CRUD FUNCTIONS
 const postUser = (newUser) => {
    fetch ('http://localhost:5000/users', {
        method: 'POST',
        headers: {'Content-Type':"aplication/json"},
        body: JSON.stringify(newUser),
    });
 }

 const getUsers = async () => {
    const data = await fetch ('http://localhost:5000/users')
    .then(res => res.json());
    setUsers(data);
 }

 useEffect(() => {
    getUsers();
 }, []);

    return(
       
        < UserContext.Provider
        value={{
            users,
            setUsers,
            isLoggedIn,
            setIsLoggedIn,
            postUser,
            addUser
        }}>
        {children}
        </ UserContext.Provider>
    )
}

export {UserProvider};
export default UserContext;