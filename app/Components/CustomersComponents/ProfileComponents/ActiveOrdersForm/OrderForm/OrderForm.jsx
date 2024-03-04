import React from "react";
import {View, StyleSheet, Text} from "react-native";
import {config} from "../../../../../config";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";

function OrderForm ({order_id, sum, status, date}) {
    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <Text style={styles.order_id}>
                    Заказ №{order_id}
                </Text>
                <Text style={styles.textInForm}>
                    {sum} руб
                </Text>
            </View>
            <View style={styles.block}>
                <Text style={styles.textInForm}>
                    {status}
                </Text>
                <Text style={[styles.textInForm, {alignSelf: 'flex-end'}]}>
                    {date}
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: config.backgroundIcons,
        width: wp(95),
        borderRadius: wp(2),
        padding: wp(4),
        borderColor: '#CCCCCC',
        borderWidth: wp(0.5)
    },
    order_id: {
        fontSize: config.fontLarge,
        fontFamily: config.familyBold,
        lineHeight: config.lineLarge
    },
    block: {
        flexDirection: 'column',
        rowGap: wp(2)
    },
    textInForm: {
        fontSize: config.fontMedium,
        fontFamily: config.familyRegular,
        lineHeight: config.lineMedium
    }
})
export default OrderForm
