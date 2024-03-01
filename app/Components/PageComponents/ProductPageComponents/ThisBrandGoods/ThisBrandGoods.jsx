import React from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import {config} from "../../../../config";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import ProductitemInCategory from "../../../GoodsComponents/ProductItem/ProductItemInCategory";
const ThisBrandGoods = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textHead}>
                Товары этого бренда
            </Text>
            <ScrollView
                style={{paddingTop: wp(3), columnGap: 16}}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.block}>
                    <ProductitemInCategory description={'Доступен от 3 мл'} price={'1890'} firstPrice={2450}
                                           name={'Духи AMOUAGE Beach Hut (на распив)'}/>
                    <ProductitemInCategory description={'Доступен от 3 мл'} price={'1890'} firstPrice={2450}
                                           name={'Духи AMOUAGE Beach Hut (на распив)'}/>
                    <ProductitemInCategory description={'Доступен от 3 мл'} price={'1890'} firstPrice={2450}
                                           name={'Духи AMOUAGE Beach Hut (на распив)'}/>
                    <ProductitemInCategory description={'Доступен от 3 мл'} price={'1890'} firstPrice={2450}
                                           name={'Духи AMOUAGE Beach Hut (на распив)'}/>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: wp(5),
        marginLeft: -wp(2.5)
    },
    textHead: {
        fontSize: config.fontLarge,
        lineHeight: config.lineLarge,
        fontFamily: config.familyBold,
        paddingLeft: wp(2.5)
    },
    block: {
        flexDirection: 'row',
        columnGap: wp(2),
        paddingLeft: wp(2.5)
    }
})

export default ThisBrandGoods
