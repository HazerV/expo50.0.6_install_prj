import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {config} from "../../../../config";
import {useNavigation} from "@react-navigation/native";
const NavButtons = ({text, route}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate(`${route}`)}>
            <View style={styles.container}>
                <Text style={styles.textStyle}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 12
    },
    textStyle: {
        fontSize: config.fontMedium,
        fontFamily: config.familyRegular,
        lineHeight: config.lineMedium
    }
})

export default NavButtons
