import React from "react";
import {View, Text, StyleSheet, ScrollView, Image, Linking, TouchableOpacity, Pressable} from "react-native";
import BrandEx from '../../../../assets/images/BrandEx.png'
import ArrowSvg from '../../../../assets/icons/ArrowJs'
import {config} from "../../../config";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {useNavigation} from "@react-navigation/native";
const BrandsScroll = ({img}) => {
    img = BrandEx
    const navigation = useNavigation()
    return (
        <View style={{
            marginLeft: -wp(2.5)
        }}>
            <View style={styles.align}>
                <Text style={styles.allBrandsText}>
                    Бренды
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('BrandPage') }>
                    <View style={styles.allBrands}>
                        <Text style={styles.allBrandsText}>
                            Все
                        </Text>
                        <ArrowSvg/>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                <View style={styles.imageBlock}>
                    <TouchableOpacity onPress={() => navigation.navigate('SelectedBrandPage')}>
                        <Image source={img}/>
                    </TouchableOpacity>
                    <Image source={img}/>
                    <Image source={img}/>
                    <Image source={img}/>
                    <Image source={img}/>
                    <Image source={img}/>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    containerBrands: {
        marginLeft: -200,
        paddingBottom: wp(8),
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    align: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imageBlock: {
        columnGap: wp(3),
        paddingBottom: wp(3),
        flexDirection: 'row',
        paddingLeft: wp(2.5)
    },
    allBrands: {
        height: wp(10),
        columnGap: wp(1.5),
        borderRadius: wp(2),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: wp(2.5)
    },
    allBrandsText: {
        fontSize: config.fontLarge,
        fontFamily: config.familyBold,
        lineHeight: config.lineLarge,
        paddingLeft: wp(2.5)

    }
})

export default BrandsScroll
