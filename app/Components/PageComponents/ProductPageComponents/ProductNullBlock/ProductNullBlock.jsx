import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../../../config";

const ProductNullBlock = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textHead}>
                Товар сейчас отстутствует на наших складах.
                Вы можете подписаться на уведоления о поступлении.
            </Text>
            <TouchableOpacity>
                <View style={styles.notifyBlock}>
                    <Text style={styles.textInBlock}>
                        Уведомить о поступлени
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    notifyBlock: {
        width: wp(52),
        backgroundColor: '#F5F5F5',
        borderWidth: wp(0.5),
        borderRadius: wp(4),
        borderColor: '#E1E1E1',
        height: wp(12),
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHead: {
        fontSize: config.fontMedium,
        lineHeight: config.lineMedium,
        fontFamily: config.familyRegular,
        paddingBottom: wp(4),
    },
    textInBlock: {
        fontSize: config.fontLarge,
        lineHeight: config.lineLarge,
        fontFamily: config.familyBold
    }
})

export default ProductNullBlock
