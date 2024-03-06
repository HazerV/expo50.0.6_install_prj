import React from "react";
const HomeContext = React.createContext()

function HomePageContext ({children}) {
    const [Banners, SetBanners] = React.useState([])
    const [Category, SetCategory] = React.useState([])
    const [History, SetHistory] = React.useState([])
    const ctx_home = {
        Banners,
        SetBanners,
        Category,
        SetCategory,
        History,
        SetHistory
    }
    return (
        <HomeContext.Provider value={ctx_home}>
            {children}
        </HomeContext.Provider>
    )
}
export {
    HomeContext,
    HomePageContext
}
