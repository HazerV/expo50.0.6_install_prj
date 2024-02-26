import React, {useState, useContext} from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../../config";
import {ValueContext} from "../../../context/Context";

const AvailableValues = ({count}) => {

    const {value, setValue} = useContext(ValueContext)
    const dynamicStyles = {
        bgColor: value === count ? config.accentLightColor : 'white',
        borderColor: value === count ? config.accentLightColor : '#CCCCCC'
    }

    return (
        <TouchableOpacity onPress={() => setValue(count)}>
            <View style={[styles.container, {
                backgroundColor: dynamicStyles.bgColor,
                borderColor: dynamicStyles.borderColor
            }]}>
                <Text style={styles.text}>
                    {count} мл
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: wp(2),
        borderWidth: wp(0.5),
        height: wp(10),
        width: wp(15)
    },
    text: {
        fontSize: config.fontMedium,
        lineHeight: config.lineMedium,
        fontFamily: config.familyBold,
    }
})

export default AvailableValues
