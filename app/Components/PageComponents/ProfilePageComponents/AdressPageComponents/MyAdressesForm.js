import {Text, View, StyleSheet} from "react-native";
import AdressForm from "./AdressForm";
import AddAdressButton from "./AddAdressButton";
import AddAdressForm from "./NewAdrPagComp/AddAdressForm";
import React from "react";
import {config} from "../../../../config";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";

function MyAdressesForm () {
    return (
        <View>
            <Text style={styles.textHead}>
                Мои адреса
            </Text>
            <View>
                <AdressForm name={'Офис'} text={'г. Оренбург, ул. Салмышская, д. 58/2, офис 3'}/>
                <AdressForm name={'Офис'} text={'г. Оренбург, ул. Салмышская, д. 58/2, офис 3'}/>
                <AdressForm name={'Офис'} text={'г. Оренбург, ул. Салмышская, д. 58/2, офис 3'}/>
                <View style={{alignSelf: 'flex-start'}}>
                    <AddAdressButton/>
                </View>
                <AddAdressForm/>
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
