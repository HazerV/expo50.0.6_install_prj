import {createContext, useState} from "react";

const PageContext = createContext()
const ValueContext = createContext()
const ThemeContext = createContext()

const Context = ({children}) => {

    const [theme, setTheme] = useState('light')
    const [value, setValue] = useState(0)
    const [route, setRoute] = useState('HomePage')
    const page_ctx = {
        route,
        setRoute
    }
    const theme_ctx = {
        theme,
        setTheme
    }
    const val_ctx = {
        value,
        setValue
    }
    console.log(route)
    console.log(theme)
    return (
        <PageContext.Provider value={page_ctx}>
            <ThemeContext.Provider value={theme_ctx}>
                <ValueContext.Provider value={val_ctx}>
                    {children}
                </ValueContext.Provider>
            </ThemeContext.Provider>
        </PageContext.Provider>
    )
}

export {
    Context,
    PageContext,
    ValueContext,
    ThemeContext
}
