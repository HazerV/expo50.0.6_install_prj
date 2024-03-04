import React from "react";
import {CustomerAddContext} from "../../../../../context/CustomersContext";
import {TouchableOpacity, View, Text, StyleSheet} from "react-native";
import {config} from "../../../../../config";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
function SaveButton () {
    const {customer, setCustomer} = React.useContext(CustomerAddContext)
    return (
        <TouchableOpacity onPress={() => setCustomer(1)}>
            <View style={styles.containerSaveButton}>
                <Text style={styles.textSaveButton}>
                    Сохранить
                </Text>
            </View>
        </TouchableOpacity>
    )
}
function CancelButton () {
    const {customer, setCustomer} = React.useContext(CustomerAddContext)
    return (
        <TouchableOpacity onPress={() => setCustomer(1)}>
            <View style={styles.containerCancelButton}>
                <Text style={styles.textCancelButton}>
                    Отменить
                </Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    containerSaveButton: {
        height: wp(10),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: config.accentColor,
        padding: wp(2),
        borderRadius: wp(2)
    },
    containerCancelButton: {
        height: wp(10),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: config.backgroundIcons,
        padding: wp(2),
        borderRadius: wp(2)
    },
    textSaveButton: {
        fontFamily: config.familyBold,
        fontSize: config.fontLarge,
        lineHeight: config.lineLarge,
        color: 'white'
    },
    textCancelButton: {
        fontFamily: config.familyBold,
        fontSize: config.fontLarge,
        lineHeight: config.lineLarge,
        color: 'black'
    }
})
export {
    SaveButton,
    CancelButton
}
