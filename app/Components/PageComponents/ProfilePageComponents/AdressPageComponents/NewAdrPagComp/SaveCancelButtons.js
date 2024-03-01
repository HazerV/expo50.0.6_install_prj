import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {config} from "../../../../../config";
import {useNavigation} from "@react-navigation/native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
function SaveButton() {
    const navigation = useNavigation()
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
    const navigation = useNavigation()
    const dynSt = {
        bgColor: config.backgroundIcons,
        color: 'black'
    }
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
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
