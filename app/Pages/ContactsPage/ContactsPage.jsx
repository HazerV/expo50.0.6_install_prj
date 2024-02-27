import React from "react";
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from "react-native";
import HeaderJs from "../../../assets/icons/HeaderIcons/HeaderJs";
import {config} from "../../config";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import VerifEmail from "../../Components/PageComponents/ContactsComponents/VerifEmail";

const ContactsPage = () => {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.container}>
                <HeaderJs/>
                <View style={styles.block}>
                    <Text style={styles.textHead}>
                        Контакты
                    </Text>
                    <Text style={styles.textContacts}>
                        Какие-то тест контакты текст много текста хахахахахахахах хихихихихи
                    </Text>
                </View>
                <VerifEmail/>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: wp(10),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    block: {
        paddingTop: wp(10),
        alignItems: 'center',
        justifyContent: 'center',
        width: wp(50),
        paddingBottom: wp(5)
    },
    textHead: {
        fontSize: config.fontMedium,
        fontFamily: config.familyBold,
        lineHeight: config.lineMedium,
        paddingBottom: wp(4)
    },
    textContacts: {
        fontSize: config.fontSmall,
        fontFamily: config.familyRegular,
        lineHeight: config.lineSmall,
        textAlign: 'center',

    }
})
export default ContactsPage
