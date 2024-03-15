import axios from "../axios";
import {useContext} from "react";
import {AuthContext} from "../../context/Context";

export async function getCustomer(authToken) {
    return await axios.get('/customers/me/get', {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }
    )
        .then((res) => {console.log('in axs ' + authToken)
            console.log(res.data.status)
        })
}
