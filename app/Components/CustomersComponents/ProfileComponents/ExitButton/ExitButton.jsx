import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {AuthContext} from "../../../../context/Context";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../../../config";
function ExitButton() {
    const {setCurrentForm} = React.useContext(AuthContext)
    return (
        <TouchableOpacity style={styles.container} onPress={() => setCurrentForm(0)}>
            <Text style={styles.text}>
                Выйти
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        height: wp(10),
        width: wp(20),
        borderRadius: wp(2),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: config.backgroundIcons
    },
    text: {
        fontSize: config.fontLarge,
        fontFamily: config.familyBold,
        lineHeight: config.lineLarge
    }
})
export default ExitButton
