import React from "react";
import {View, StyleSheet, Text} from "react-native";
import {GoBackComponent, SearchButtonComponent} from "../../../GoodsComponents/ButtonComponent/ButtonComponents";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../../../config";
const ProfileHeader = () => {
    return (
        <View style={styles.container}>
            <GoBackComponent />
            <Text style={styles.text}>
                Кабинет
            </Text>
            <SearchButtonComponent />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: wp(12),
        width: wp(100),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: wp(2.5),
        paddingRight: wp(2.5),
        paddingBottom: wp(8),
    },
    text: {
        fontSize: config.fontLarge,
        fontFamily: config.familyBold,
        lineHeight: config.lineLarge
    }
})
export default ProfileHeader
