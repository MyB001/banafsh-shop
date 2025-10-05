import { createContext, useState } from "react";

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [token, setToken] = useState(null)
    const [userInfos, setUserInfos] = useState({})

    const login = (user, token) => {
        setToken(token)
        setIsLoggedIn(true)
        setUserInfos(user)
        localStorage.setItem('user', JSON.stringify({ token }))
    }

    const logout = () => {
        setToken(null)
        setUserInfos({})
        localStorage.removeItem('user')
    }

    return (
        <AuthContext.Provider value={{
            isLoggedIn, setIsLoggedIn,
            token, setToken,
            userInfos, setUserInfos,
            login, logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider