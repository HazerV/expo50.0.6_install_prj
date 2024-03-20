import axios from "../axios";
import {useContext} from "react";
import {AuthContext} from "../../context/Context";

export async function getCustomer(authToken) {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    return await axios.get('/customers/me/get', {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }
    )
        .then((res) => {
            if (res.data.status === 'ok') {
                setIsAuth(true)
                console.log(isAuth, 'in ax')
            }
        })
}
