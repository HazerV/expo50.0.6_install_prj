import React from "react";
const ModalContext = React.createContext()
const ModalContexts = ({children}) => {
    const [firstModalVisible, setFirstModalVisible] = React.useState(false)

    return (
        <ModalContext.Provider value={{firstModalVisible, setFirstModalVisible}}>
            {children}
        </ModalContext.Provider>
    )
}
export {
    ModalContext,
    ModalContexts
}
