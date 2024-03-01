import React from "react";
import {View, StyleSheet, Text, ScrollView} from "react-native";
import ProfileHeader from "../../../Components/PageComponents/Header/ProfileHeader/ProfileHeader";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../../config";
import UnderHeaderSigns
    from "../../../Components/PageComponents/ProfilePageComponents/ProfilePageComponents/UnderHeaderSigns/UnderHeaderSigns";
import AdressForm from "../../../Components/PageComponents/ProfilePageComponents/AdressPageComponents/AdressForm";

function AdressPage() {
    return (
        <View>
            <ScrollView style={styles.scrollView}>
                <ProfileHeader/>
                <UnderHeaderSigns/>
                <View style={styles.container}>
                    <Text style={styles.textHead}>
                        Мои адреса
                    </Text>
                    <View>
                        <AdressForm name={'Офис'} text={'г. Оренбург, ул. Салмышская, д. 58/2, офис 3'}/>
                        <AdressForm name={'Офис'} text={'г. Оренбург, ул. Салмышская, д. 58/2, офис 3'}/>
                        <AdressForm name={'Офис'} text={'г. Оренбург, ул. Салмышская, д. 58/2, офис 3'}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
        height: '100%'
    },
    container: {
        // paddingLeft: wp(2.5),
        paddingBottom: wp(35),
        alignItems: 'center',
        justifyContent: 'center'
    },
    textHead: {
        fontSize: config.fontLarge,
        fontFamily: config.familyBold,
        lineHeight: config.lineLarge,
        paddingBottom: wp(4)
    }
})
export default AdressPage
