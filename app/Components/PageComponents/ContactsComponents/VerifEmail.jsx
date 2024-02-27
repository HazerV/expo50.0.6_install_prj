import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {config} from "../../../config";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {useNavigation} from "@react-navigation/native";
const VerifEmail = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.text}>
                    Подтвердить email
                </Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        width: wp(38),
        borderRadius: 8,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: config.fontLarge,
        fontFamily: config.familyBold,
        lineHeight: config.lineLarge,
        padding: wp(2),
        textAlign: 'center'
    }
})
export default VerifEmail
