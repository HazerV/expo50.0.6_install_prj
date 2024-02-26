import React from "react";
import {View, StyleSheet, Text, ScrollView} from "react-native";
import ProductitemInCategory from "../ProductItem/ProductItemInCategory";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../../config";

const TopSellsGoods = () => {
    return (
        <View>
            <Text style={styles.textCommon}>
                Лидер продаж
            </Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.commonBlock}>
                    <ProductitemInCategory description={'Доступен от 3 мл'} price={'1890'}
                                           firstPrice={2450}
                                           name={'Духи AMOUAGE Beach Hut (на распив)'}/>
                    <ProductitemInCategory description={'Доступен от 3 мл'} price={'1890'}
                                           firstPrice={2450}
                                           name={'Духи AMOUAGE Beach Hut (на распив)'}/>
                    <ProductitemInCategory description={'Доступен от 3 мл'} price={'1890'}
                                           firstPrice={2450}
                                           name={'Духи AMOUAGE Beach Hut (на распив)'}/>
                    <ProductitemInCategory description={'Доступен от 3 мл'} price={'1890'}
                                           firstPrice={2450}
                                           name={'Духи AMOUAGE Beach Hut (на распив)'}/>
                    <ProductitemInCategory description={'Доступен от 3 мл'} price={'1890'}
                                           firstPrice={2450}
                                           name={'Духи AMOUAGE Beach Hut (на распив)'}/>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    textCommon: {
        paddingBottom: wp(4.1),
        fontFamily: config.familyBold,
        fontSize: config.fontLarge,
        lineHeight: config.lineLarge
    },
    commonBlock: {
        columnGap: wp(3.05),
        flexDirection: 'row',
        paddingBottom: wp(4.1),
    }
})
export default TopSellsGoods
