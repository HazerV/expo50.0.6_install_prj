import {config} from "../../../config";
import React from "react";
import {View, Image, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import {useNavigation} from "@react-navigation/native";

const GoodsInCategory = ({id, name, description, newPrice, firstPrice, imageSrc, route}) => {

    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate(route)}>
                <Image
                    style={styles.imageStyle}
                    source={{
                        uri: 'https://s3-alpha-sig.figma.com/img/fd1d/793f/7419a8bfb34be304ca51ab84ee3a6076?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vtguw4QeMqQKRsCpAxWgg0fCKTvEup5SdeuUrIML-4P1sGiixeJob0jIs7lct0W~YVsbx2tL2POocr3m3uE6mAII2A~Ute~~CR5g1jduf1k8bfcXA-DRHudD0IZ6BDn~VYoaPm2U3VduyWtiAgs3M8rZROCjwQQWRsZr4qfyRO~QcA6Jm-dACo1VeKBsr8ZRVfIdgdIisQv-sFn8nlKn52BN5qIclfuVHsvfXocJgT7HzMAWV0-r~p6uhedOjZbq3b9W0FNSpIB7cv~5gt7D6-p3QeWpPhH0D7e4VVqqjT3UC-vYeRCjugb1yhtX6wVjyo9wXjXrs~T8xV-lbcnbKw__'
                    }}/>
                <Text style={styles.nameText}>
                    {name}
                </Text>
            </TouchableOpacity>
            <Text style={styles.descriptionText}>
                {description}
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
