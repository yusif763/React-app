import { createContext,useState,useContext } from "react";  

const UserContext = createContext();

export const UserProvider = function({children}) {
    const [user, setUser] = useState({
        name:'Yusif',
        surname:'Huseynli',
        hello :''
    });
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )}


export const UserProviderFunction = function() {
    return useContext(UserContext);
}

export default UserContext;