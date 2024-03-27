import {config} from "../../../config";
import React, {useContext} from "react";
import {View, Image, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import {useNavigation} from "@react-navigation/native";
import {ProductContext} from "../../../context/ProductContext";
const GoodsInCategory = ({id, name, quantity, newPrice, firstPrice, imageSrc, route}) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('ProductPage', {
                        id: id
                })
            }}>
                <Image
                    style={styles.imageStyle}
                    source={{uri: `${imageSrc}`}}/>
                <Text style={styles.nameText}>
                    {name}
                </Text>
            </TouchableOpacity>
            <Text style={styles.descriptionText}>
                Доступен от {quantity} мл
            </Text>
            <View style={styles.priceRow}>
                <Text style={styles.newPriceText}>
                    {newPrice}
                </Text>
                <Text style={styles.firstPriceText}>
                    {firstPrice}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: wp(46),
        height: wp(54),
    },
    nameText: {
        fontSize: config.fontSmall,
        fontFamily: config.familyBold,
        lineHeight: config.lineSmall,
        paddingTop: wp(1.5),
        paddingBottom: wp(1.5)
    },
    imageStyle: {
        resizeMode: 'cover',
        width: wp(45),
        height: wp(34),
        overflow: 'hidden',
        borderRadius: wp(2),
        borderWidth: wp(0.5),
        borderColor: config.backgroundIcons,
    },
    descriptionText: {
        fontSize: config.fontSmall,
        lineHeight: 12,
        fontFamily: config.familyRegular,
        paddingBottom: wp(1.5)
    },
    priceRow: {
        flexDirection: 'row',
        columnGap: wp(1.5)
    },
    newPriceText: {
        fontSize: config.fontMedium,
        lineHeight: config.lineMedium,
        fontFamily: config.familyBold
    },
    firstPriceText: {
        fontSize: config.fontMedium,
        lineHeight: config.lineMedium,
        fontFamily: config.familyRegular,
        color: '#CCCCCC',
        textDecorationLine: 'line-through'
    }
})

export default GoodsInCategory
