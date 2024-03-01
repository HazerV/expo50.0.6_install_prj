import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {config} from "../../../config";
import {useNavigation} from "@react-navigation/native";
const UnderlineRouteText = ({text, route}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate(`${route}`)}>
            <Text style={styles.textStyle}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: config.fontMedium,
        fontFamily: config.familyRegular,
        lineHeight: config.lineMedium,
        textDecorationLine: 'underline',
        textAlign: 'center'
    }
})

export default UnderlineRouteText
