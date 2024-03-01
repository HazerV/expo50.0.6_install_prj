import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {config} from "../../../../../../config";

const EmailSendNotification = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headText}>
                Восстановить пароль
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    headText: {
        fontSize: config.fontLarge,
        fontFamily: config.familyBold,
        lineHeight: config.lineLarge,
        textAlign: 'center'
    }
})
export default EmailSendNotification
