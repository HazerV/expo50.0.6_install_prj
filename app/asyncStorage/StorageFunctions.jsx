import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {TokenContext} from "../context/Context";
let OnlyCheckTocken = async () => {
    try {
        const token = await AsyncStorage.getItem('token')
        console.log(token)
    } catch (e) {
        console.log(e)
    }
}
let getToken = async ({value}) => {
    try {
        let token = await AsyncStorage.getItem('token')
        if (token === null) {
            await AsyncStorage.setItem( 'token', `${value}`);
        }
        console.log('token: ', token)
    } catch (e) {
        console.log(e)
    }
}
export {
    OnlyCheckTocken,
    getToken
}
