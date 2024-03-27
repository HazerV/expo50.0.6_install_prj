import {createContext, useState} from "react";

const PageContext = createContext()
const ValueContext = createContext()
const ThemeContext = createContext()
const TokenContext = createContext()
const AuthContext = createContext()
const Context = ({children}) => {

    const [isAuth, setIsAuth] = useState(false)
    const [theme, setTheme] = useState('light')
    const [value, setValue] = useState(0)
    const [route, setRoute] = useState('HomePage')
    const [token, setToken] = useState('')
    const page_ctx = {route, setRoute}
    const theme_ctx = {theme, setTheme}
    const val_ctx = {value, setValue}
    console.log(isAuth, 'in ctx')
    return (
        <PageContext.Provider value={page_ctx}>
            <ThemeContext.Provider value={theme_ctx}>
                <ValueContext.Provider value={val_ctx}>
                    <AuthContext.Provider value={{isAuth, setIsAuth}}>
                        <TokenContext.Provider value={{token, setToken}}>
                            {children}
                        </TokenContext.Provider>
                    </AuthContext.Provider>
                </ValueContext.Provider>
            </ThemeContext.Provider>
        </PageContext.Provider>
    )
}

export {
    Context,
    PageContext,
    ValueContext,
    ThemeContext,
    AuthContext,
    TokenContext
}
