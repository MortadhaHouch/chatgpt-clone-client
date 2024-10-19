"use client"
import React, { createContext, useState } from 'react'
type LoginContextType = {
    isLoggedIn: boolean
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}
const LoginContext = createContext<LoginContextType>({
    isLoggedIn: false,
    setIsLoggedIn: () => {}
});
function LoginContextProvider({children}:never) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <LoginContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
            {children}
        </LoginContext.Provider>
    )
}
export {LoginContext,LoginContextProvider}