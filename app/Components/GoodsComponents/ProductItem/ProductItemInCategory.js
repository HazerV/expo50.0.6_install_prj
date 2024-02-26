import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import {config} from "../../../config";
import Example from '../../../../assets/images/RectangleEx.png'
const ProductitemInCategory = ({name, description, value, price, firstPrice}) => {

    return (
        <View style={styles.container}>
            <Image source={Example} />
            <Text style={styles.textName}>
                {name}
            </Text>
            <Text style={styles.textDescription}>
                {description}
            </Text>
            <View style={{
                flexDirection: 'row'
            }}>
                <Text style={styles.textPrice}>
                    {price + ' '}
                </Text>
                <Text style={styles.textFirstPrice}>
                    {firstPrice}
                </Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        // borderWidth: 2,
        gap: 6
    },
    textName: {
        fontSize: config.fontMedium,
        fontFamily: config.familyBold,
        lineHeight: config.lineMedium,
        width: 132
    },
    textDescription: {
        fontSize: config.fontSmall,
        fontFamily: config.familyRegular,
        lineHeight: config.lineSmall
    },
    textPrice: {
        fontSize: config.fontMedium,
        fontFamily: config.familyRegular,
        lineHeight: config.lineMedium
    },
    textFirstPrice: {
        fontSize: config.fontMedium,
        fontFamily: config.familyRegular,
        lineHeight: config.lineMedium,
        color: '#CCCCCC',
        textDecorationLine: 'line-through'
    }
})

export default ProductitemInCategory
