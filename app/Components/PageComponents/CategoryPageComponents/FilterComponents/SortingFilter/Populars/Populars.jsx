import React from "react";
import {Text, View, StyleSheet} from "react-native";
import OpenAllBlackJs from "../../../../../../../assets/icons/Filtering/OpenAllBlackJs";
import {config} from "../../../../../../config";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";

const Populars = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                По популярности
            </Text>
            <OpenAllBlackJs />
        </View>
        )
}
const styles = StyleSheet.create( {
    container: {
        flexDirection: 'row',
        gap: wp(2),
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: config.fontMedium,
        fontFamily: config.familyRegular,
        lineHeight: config.lineMedium
    }
})
export default Populars
