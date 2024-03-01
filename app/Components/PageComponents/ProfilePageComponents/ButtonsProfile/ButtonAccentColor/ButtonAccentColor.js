import React from "react";
import {View, StyleSheet, TouchableOpacity, Text} from "react-native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../../../../config";
const ButtonAccentColor = ({text, action}) => {
    return (
            <View style={styles.signButton}>
                <Text style={styles.signInText}>
                    {text}
                </Text>
            </View>
    )
}
const styles = StyleSheet.create({
    signButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: wp(12),
        borderRadius: wp(2),
        backgroundColor: config.accentColor,
        width: wp(53),

    },
    signInText: {
        fontSize: config.fontMedium,
        fontFamily: config.familyBold,
        lineHeight: config.lineMedium,
        color: 'white'
    }
})
export default ButtonAccentColor
