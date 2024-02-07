import {createContext, useState} from "react";

const PageContext = createContext()

const Context = ({children}) => {

    const [route, setRoute] = useState('')
    const page_ctx = {
        route,
        setRoute
    }
    return (
        <PageContext.Provider value={page_ctx}>
            {children}
        </PageContext.Provider>
    )
}

export {
    Context,
    PageContext
}
