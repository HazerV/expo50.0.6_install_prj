import React from "react";
import {View, StyleSheet, ScrollView} from "react-native";
import ProfileHeader from "../../../Components/PageComponents/Header/ProfileHeader/ProfileHeader";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../../config";
import UnderHeaderSigns from "../../../Components/PageComponents/ProfilePageComponents/ProfilePageComponents/UnderHeaderSigns/UnderHeaderSigns";
import AddAdressForm from "../../../Components/PageComponents/ProfilePageComponents/AdressPageComponents/NewAdrPagComp/AddAdressForm";
import MyAdressesForm from "../../../Components/PageComponents/ProfilePageComponents/AdressPageComponents/MyAdressesForm";
import {AddressContext} from "../../../context/AddressContext";
function AdressPage() {
    const {selected} = React.useContext(AddressContext)

    return (
        <View>
            <ScrollView style={styles.scrollView}>
                <ProfileHeader/>
                <UnderHeaderSigns/>
                <View style={styles.container}>
                    {selected === 'myAddress' && <MyAdressesForm/>}
                    {selected === 'newAddress' && <AddAdressForm/>}
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
