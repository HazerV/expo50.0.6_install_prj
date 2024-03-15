import React from "react";


const CustomerAddContext = React.createContext()
const CustomerInfoContext = React.createContext()

function NewCustomersContext({children}) {
    const [customer, setCustomer] = React.useState(1)
    const [id, setId] = React.useState('')
    const [name, setName] = React.useState('')
    const [lastname, setLastname] = React.useState('')
    const [middlename, setMiddlename] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [addresses, setAddresses] = React.useState([])

    const authStore = {
        id: id,
        name: name,
        lastname: lastname,
        middlename: middlename,
        phone: phone,
        email: email,
        addresses: addresses
    }
    const cust_ctx = {
        authStore,
        id, setId,
        name, setName,
        lastname, setLastname,
        middlename, setMiddlename,
        phone, setPhone,
        email, setEmail,
        addresses, setAddresses

    }
    return (
        <CustomerAddContext.Provider value={{customer, setCustomer}}>
            <CustomerInfoContext.Provider value={cust_ctx}>
                {children}
            </CustomerInfoContext.Provider>
        </CustomerAddContext.Provider>
    )
}

export {
    CustomerAddContext,
    CustomerInfoContext,
    NewCustomersContext
}
