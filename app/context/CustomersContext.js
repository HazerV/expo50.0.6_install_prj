import React from "react";

const CustomerAddContext = React.createContext()
function NewCustomersContext ({children}) {
    const [customer, setCustomer] = React.useState(1)
    return (
        <CustomerAddContext.Provider value={{customer, setCustomer}}>
            {children}
        </CustomerAddContext.Provider>
    )
}
export {
    CustomerAddContext,
    NewCustomersContext
}
