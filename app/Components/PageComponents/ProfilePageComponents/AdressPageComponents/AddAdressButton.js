import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {config} from "../../../../config";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {useNavigation} from "@react-navigation/native";
import {AddressContext} from "../../../../context/AddressContext";
function AddAdressButton() {
    const {selected, setSelected} = React.useContext(AddressContext)
    return (
        <TouchableOpacity onPress={() => setSelected('newAddress')}>
            <View style={styles.container}>
                <Text style={styles.text}>
                    Добавить адрес
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: wp(10),
        borderRadius: wp(2),
        backgroundColor: config.accentColor,
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp(2)
    },
    text: {
        fontSize: config.fontLarge,
        fontFamily: config.familyBold,
        lineHeight: config.lineLarge,
        color: 'white'
    }
})
export default AddAdressButton
