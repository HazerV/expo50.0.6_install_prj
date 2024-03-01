import React from "react";
import {Text, View, StyleSheet} from "react-native";
import ParamsBlackJs from "../../../../../../../assets/icons/Filtering/ParamsBlackJs";
import {config} from "../../../../../../config";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
const Filters = () => {
    return (
        <View style={styles.container}>
            <ParamsBlackJs />
            <Text style={styles.text}>
                Фильтры
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        gap: wp(2),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: config.fontMedium,
        fontFamily: config.familyRegular,
        lineHeight: config.lineMedium
    }
})
export default Filters
