import { createContext, useState } from "react";

export const Context = createContext()

const ContextProvider = ({children}) => {
    const [IsShowSidebar, setIsShowSidebar] = useState(false)
    const [IsShowSearchBox, setIsShowSearchBox] = useState(false)

    return (
        <Context.Provider value={{IsShowSidebar, setIsShowSidebar, IsShowSearchBox, setIsShowSearchBox} }>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider