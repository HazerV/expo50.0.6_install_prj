import React from "react";
import {View, StyleSheet, Text} from "react-native";
import Header from "../../../../../assets/images/HeaderJs";
import {GoBack, SwitchTheme} from "./HeaderInfoButtons/HeaderInfoButtons";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import {config} from "../../../../config";
const HeaderForInfo = () => {
    return (
        <View style={{ backgroundColor: 'white', alignItems: 'center' }}>
            <View style={styles.align}>
                <GoBack/>
                <Header/>
                <SwitchTheme/>
            </View>
            <View style={{ paddingBottom: 24 }}>
                <Text style={styles.upText}>
                    Оригинальные ароматы известных брендов
                </Text>
                <View style={styles.attentionTextBox}>
                    <Text style={styles.textInAttBox}>
                        Очень важный текст с информацией для очень важных клиентов
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    align: {
        width: wp(100),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        // columnGap: wp(30),
        paddingTop: wp(12),
        paddingBottom: 12,
    },
    attentionTextBox: {
        width: 305,
        height: 65,
        backgroundColor: '#593780',
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center'
    },
    upText: {
        fontSize: config.fontMedium,
        fontFamily: config.familyRegular,
        lineHeight: config.lineMedium,
        paddingBottom: 12
    },
    textInAttBox: {
        fontSize: config.fontMedium,
        lineHeight: config.lineMedium,
        fontFamily: config.familyRegular,
        color: 'white',
        textAlign: 'center'
    }
})

export default HeaderForInfo
