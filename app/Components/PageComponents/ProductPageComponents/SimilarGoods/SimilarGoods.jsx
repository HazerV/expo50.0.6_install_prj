import React from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import ProductitemInCategory from "../../../GoodsComponents/ProductItem/ProductItemInCategory";
import {config} from "../../../../config";

const SimilarGoods = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textHead}>
                Похожие товары
            </Text>
            <ScrollView
                style={{paddingTop: wp(3)}}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={{
                    flexDirection: 'row',
                    columnGap: wp(2)
                }}>
                    <ProductitemInCategory description={'Доступен от 3 мл'} price={'1890'} firstPrice={2450}
                                           name={'Духи AMOUAGE Beach Hut (на распив)'}/>
                    <ProductitemInCategory description={'Доступен от 3 мл'} price={'1890'} firstPrice={2450}
                                           name={'Духи AMOUAGE Beach Hut (на распив)'}/>
                    <ProductitemInCategory description={'Доступен от 3 мл'} price={'1890'} firstPrice={2450}
                                           name={'Духи AMOUAGE Beach Hut (на распив)'}/>
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
        paddingTop: wp(5)
    },
    textHead: {
        fontSize: config.fontLarge,
        lineHeight: config.lineLarge,
        fontFamily: config.familyBold,
    }
})
export default SimilarGoods
