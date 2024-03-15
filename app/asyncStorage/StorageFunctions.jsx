import AsyncStorage from "@react-native-async-storage/async-storage";
import {useContext} from "react";
import {AuthContext} from "../context/Context";
export async function UpdateToken(newValue) {
    await AsyncStorage.setItem('token', newValue)
    console.log('Success', newValue)
}

export async function GetToken() {
    let token = await AsyncStorage.getItem('token')
    return token
}
