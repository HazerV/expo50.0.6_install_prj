import {Text, View, StyleSheet} from "react-native";
import AdressForm from "./AdressForm";
import AddAdressButton from "./AddAdressButton";
import React from "react";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../../../config";
function MyAdressesForm () {
    return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.textHead}>
                Мои адреса
            </Text>
            <View style={{alignItems: 'center'}}>
                <AdressForm name={'Офис'} text={'г. Оренбург, ул. Салмышская, д. 58/2, офис 3г. Оренбург, ул. Салмышская, д. 58/2, офис 3г. Оренбург, ул. Салмышская, д. 58/2, офис 3г. Оренбург, ул. Салмышская, д. 58/2, офис 3г. Оренбург, ул. Салмышская, д. 58/2, офис 3'}/>
                <AdressForm name={'Офис1'} text={'г. Оренбург, ул. Салмышская, д. 58/2, офис г. Оренбург, ул. Салмышская, д. 58/2, офис 33'}/>
                <AdressForm name={'Офис2'} text={'г. Оренбург, ул. Салмышская, д. 58/2, офис 3'}/>
                <View style={{alignSelf: 'flex-start'}}>
                    <AddAdressButton/>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    textHead: {
        fontSize: config.fontLarge,
        fontFamily: config.familyBold,
        lineHeight: config.lineLarge,
        paddingBottom: wp(4)
    }
})
export default MyAdressesForm
