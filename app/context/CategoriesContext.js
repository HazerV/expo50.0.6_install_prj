import React, {useContext, createContext, useState} from "react";
const CategoryContext = createContext()
function CategoriesContext ({children}) {
    const [meshName, setMeshName] = useState('')
    console.log(meshName)
    return (
        <CategoryContext.Provider value={{meshName, setMeshName}}>
            {children}
        </CategoryContext.Provider>
    )
}
export {
    CategoryContext,
    CategoriesContext
}
