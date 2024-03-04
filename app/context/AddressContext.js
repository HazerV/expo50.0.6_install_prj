import React, {createContext} from "react";

const AddressContext = createContext()
const SelectedAddressContext = createContext()

function NewAddressContexts({children}) {
    const [selected, setSelected] = React.useState('myAddress')
    const [selectedAddress, setSelectedAddress] = React.useState('')
    console.log(selectedAddress)
    return (
        <AddressContext.Provider value={{selected, setSelected}}>
            <SelectedAddressContext.Provider value={{selectedAddress, setSelectedAddress}}>
                {children}
            </SelectedAddressContext.Provider>
        </AddressContext.Provider>
    )
}

export {
    NewAddressContexts,
    AddressContext,
    SelectedAddressContext
}
