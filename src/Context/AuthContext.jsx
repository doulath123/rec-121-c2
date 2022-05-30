import React, {useState} from 'react';
export const AuthContext= React.createContext();
function AuthcontextProvider({children}){ 
    const[isAuth, setAuth]=useState(false);
    return (
        <AuthContext.Provider value={[isAuth,setAuth]}>
            {children}
        </AuthContext.Provider>
    )

}