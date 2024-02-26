import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import {config} from "../../../../config";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import {useNavigation} from "@react-navigation/native";

const ButtonsInFilter = ({text, route}) => {

    const navigate = useNavigation()

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.text}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        height: wp(10.2),
        backgroundColor: config.accentLightColor,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        padding: wp(3)
    },
    text: {
        fontSize: config.fontMedium,
        lineHeight: config.lineMedium,
        fontFamily: config.familyBold,
        color: 'white'
    }
})

export default ButtonsInFilter
