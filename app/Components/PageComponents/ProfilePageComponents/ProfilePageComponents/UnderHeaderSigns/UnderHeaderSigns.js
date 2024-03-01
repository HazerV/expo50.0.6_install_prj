import React from "react";
import {StyleSheet, View, Text} from "react-native";
import {config} from "../../../../../config";
import ButtonInProfile from "./ButtonInProfile";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {useRoute} from "@react-navigation/native";
const UnderHeaderSigns = () => {
    const route = useRoute()
    const dynStBg = {
        bgColorProfile: route.name === 'ProfilePage' ? config.accentColor : '#F5F5F5',
        bgColorOrders: route.name === 'OrdersPage' ? config.accentColor : '#F5F5F5',
        bgColorAdress: route.name === 'AdressPage' ? config.accentColor : '#F5F5F5',
        bgColorSaved: route.name === 'SavedPage' ? config.accentColor : '#F5F5F5',
    }
    const dyncStTxt = {
        txtColorProfile: route.name === 'ProfilePage' ? 'white' : 'black',
        txtColorOrders: route.name === 'Orders' ? 'white' : 'black',
        txtColorAdress: route.name === 'AdressPage' ? 'white' : 'black',
        txtColorSaved: route.name === 'SavedPage' ? 'white' : 'black'
    }
    return (
        <View style={styles.container}>
            <ButtonInProfile route={'ProfilePage'} text={'Профиль'} bgButtonColor={dynStBg.bgColorProfile} textColor={dyncStTxt.txtColorProfile}/>
            <ButtonInProfile route={'OrdersPage'} text={'Заказы'} bgButtonColor={dynStBg.bgColorOrders} textColor={dyncStTxt.txtColorOrders}/>
            <ButtonInProfile route={'AdressPage'} text={'Адреса'} bgButtonColor={dynStBg.bgColorAdress} textColor={dyncStTxt.txtColorAdress}/>
            <ButtonInProfile route={'SavedPage'} text={'Избранное'} bgButtonColor={dynStBg.bgColorSaved} textColor={dyncStTxt.txtColorSaved}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        columnGap: wp(3),
        paddingLeft: wp(2.5),
        paddingBottom: wp(6)
    }
})
export default UnderHeaderSigns
