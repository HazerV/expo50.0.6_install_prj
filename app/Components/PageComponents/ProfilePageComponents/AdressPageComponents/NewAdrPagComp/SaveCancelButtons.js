import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {config} from "../../../../../config";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {AddressContext} from "../../../../../context/AddressContext";
function SaveButton() {
    const dynSt = {
        bgColor: config.accentColor,
        color: 'white'
    }
    return (
        <View style={[styles.container, {backgroundColor: dynSt.bgColor}]}>
            <Text style={[styles.textInsideButton, {color: dynSt.color}]}>
                Сохранить
            </Text>
        </View>
    )
}
function CancelButton() {
    const dynSt = {
        bgColor: config.backgroundIcons,
        color: 'black'
    }
    const {setSelected} = React.useContext(AddressContext)
    return (
        <TouchableOpacity onPress={() => setSelected('myAddress')}>
            <View style={[styles.container, {backgroundColor: dynSt.bgColor}]}>
                <Text style={[styles.textInsideButton, {color: dynSt.color}]}>
                    Отменить
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: wp(10),
        borderRadius: wp(2),
        padding: wp(2),
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInsideButton: {
        fontSize: config.fontMedium,
        fontFamily: config.familyBold,
        lineHeight: config.lineMedium,
        textAlign: 'center'
    }
})
export {
    SaveButton,
    CancelButton
}
