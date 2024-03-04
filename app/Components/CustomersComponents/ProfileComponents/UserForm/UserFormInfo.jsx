import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../../../config";

function UserFormInfo({name, email, phone_number}) {

    return (
        <View style={styles.container}>
            <Text style={styles.name_Text}>
                {name}
            </Text>
            <Text style={styles.number_email_Text}>
                {email}
            </Text>
            <Text style={styles.number_email_Text}>
                {phone_number}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: wp(4),
        borderRadius: wp(2),
        flexDirection: 'column',
        rowGap: wp(3),
        backgroundColor: config.backgroundIcons,
        flex: 1
    },
    name_Text: {
        fontFamily: config.familyBold,
        fontSize: config.fontLarge,
        lineHeight: config.lineLarge
    },
    number_email_Text: {
        fontFamily: config.familyRegular,
        fontSize: config.fontMedium,
        lineHeight: config.lineMedium
    }
})
export default UserFormInfo
