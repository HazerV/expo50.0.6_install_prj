import React from "react";
import {View, Text, StyleSheet, TextInput} from "react-native";
import {config} from "../../../../../config";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {SaveButton, CancelButton} from "./SaveCancelButtons";
import ProfileHeader from "../../../Header/ProfileHeader/ProfileHeader";
import UnderHeaderSigns from "../../ProfilePageComponents/UnderHeaderSigns/UnderHeaderSigns";
function AddAdressForm () {
    return (
        <View style={styles.container}>
            <Text style={styles.headText}>
                Мои адреса
            </Text>
            <View style={{paddingBottom: wp(4)}}>
                <Text style={styles.textTopInput}>
                    Название
                </Text>
                <TextInput style={styles.textInput}/>
            </View>
            <View style={{paddingBottom: wp(4)}}>
                <Text style={styles.textTopInput}>
                    Город
                </Text>
                <TextInput style={styles.textInput}/>
            </View>
            <View style={{paddingBottom: wp(4)}}>
                <Text style={styles.textTopInput}>
                    Адрес (улица, дом, квартира)
                </Text>
                <TextInput style={styles.textInput}/>
            </View>
            <View style={styles.buttonsBlock}>
                <SaveButton />
                <CancelButton />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: wp(80),
        padding: wp(4),
        backgroundColor: config.backgroundIcons,
        borderRadius: wp(2)
    },
    headText: {
        fontSize: config.fontLarge,
        fontFamily: config.familyBold,
        lineHeight: config.lineLarge,
        textAlign: 'center',
        paddingBottom: wp(4)
    },
    textTopInput: {
        fontSize: config.fontMedium,
        fontFamily: config.familyRegular,
        lineHeight: config.lineMedium,
        paddingBottom: wp(1),
        paddingLeft: wp(3)
    },
    textInput: {
        height: wp(10),
        width: wp(73),
        backgroundColor: 'white',
        borderRadius: wp(2),
    },
    buttonsBlock: {
        flexDirection: 'row',
        columnGap: wp(2)
    }
})
export default AddAdressForm
