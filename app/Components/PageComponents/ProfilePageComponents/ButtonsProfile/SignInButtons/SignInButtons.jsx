import {useNavigation} from "@react-navigation/native";
import {Text, StyleSheet, TouchableOpacity, View} from "react-native";
import React from "react";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../../../../config";

const SignInButtons = ({text, action}) => {
    const navigation = useNavigation()
    return (
            <View style={styles.container}>
                <Text style={styles.buttonText}>
                    {text}
                </Text>
            </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: wp(10),
        backgroundColor: '#F5F5F5',
        borderRadius: wp(2),
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        // paddingTop: wp(4),
        // paddingBottom: wp(4),
        paddingLeft: wp(3),
        paddingRight: wp(3),
        fontSize: config.fontMedium,
        fontFamily: config.familyBold,
        lineHeight: config.lineMedium
    }
})
export default SignInButtons
