import React from "react";
import {View, Text, StyleSheet} from "react-native";
import OrderForm from "./OrderForm/OrderForm";
import {config} from "../../../../config";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
function ActiveOrdersForm () {
    return (
        <View style={styles.container}>
            <Text style={styles.textHead}>
                Активные заказы
            </Text>
            <OrderForm sum={'15 000'} order_id={121} date={'24.04.21'} status={'Оформлен'} />
            <OrderForm sum={'15 000'} order_id={121} date={'24.04.21'} status={'Оформлен'} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        rowGap: wp(2),

    },
    textHead: {
        fontSize: config.fontLarge,
        fontFamily: config.familyBold,
        lineHeight: config.lineLarge
    }
})
export default ActiveOrdersForm
