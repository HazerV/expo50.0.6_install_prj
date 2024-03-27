import React, {createContext, useState} from "react";
const ProductContext = createContext()
function ProductContextInApp ({children}) {
    const [productId, setProductId] = useState()
    console.log(productId)
    return (
        <ProductContext.Provider value={{productId, setProductId}}>
            {children}
        </ProductContext.Provider>
    )
}
export {
    ProductContextInApp,
    ProductContext
}
