import {createContext, useState} from "react";

const PageContext = createContext()
const ValueContext = createContext()
const ThemeContext = createContext()
const AuthContext = createContext()
const Context = ({children}) => {

    const [currentForm, setCurrentForm] = useState(0)
    const [theme, setTheme] = useState('light')
    const [value, setValue] = useState(0)
    const [route, setRoute] = useState('HomePage')
    console.log(route)
    const profile_ctx = {currentForm, setCurrentForm}
    const page_ctx = {route, setRoute}
    const theme_ctx = {theme, setTheme}
    const val_ctx = {value, setValue}
    return (
        <PageContext.Provider value={page_ctx}>
            <ThemeContext.Provider value={theme_ctx}>
                <ValueContext.Provider value={val_ctx}>
                    <AuthContext.Provider value={profile_ctx}>
                        {children}
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
    AuthContext
}
