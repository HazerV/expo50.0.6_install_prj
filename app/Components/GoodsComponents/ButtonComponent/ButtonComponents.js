import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../../config";

const ButtonComponents = ({text, route}) => {

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.buttonText}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: wp(10.18),
        width: wp(19.08),
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: config.fontMedium,
        fontFamily: config.familyBold,
        lineHeight: config.lineMedium
    }
})

export default ButtonComponents
