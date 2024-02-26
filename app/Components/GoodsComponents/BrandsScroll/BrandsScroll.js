import React from "react";
import {View, Text, StyleSheet, ScrollView, Image, Linking, TouchableOpacity} from "react-native";
import BrandEx from '../../../../assets/images/BrandEx.png'
import ArrowSvg from '../../../../assets/icons/ArrowJs'
import {config} from "../../../config";
const BrandsScroll = ({img}) => {
    img = BrandEx
    return (
        <View style={{paddingBottom: 32}}>
            <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                <View style={styles.imageBlock}>
                    <Image source={img}/>
                    <Image source={img}/>
                    <Image source={img}/>
                    <Image source={img}/>
                    <Image source={img}/>
                    <Image source={img}/>
                </View>
            </ScrollView>
            <TouchableOpacity>
                <View style={styles.allBrands}>
                    <Text style={styles.allBrandsText}>
                        Все бренды
                    </Text>
                    <ArrowSvg/>
                </View>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    imageBlock: {
        columnGap: 12,
        flexDirection: 'row',
        paddingBottom: 12,
    },
    allBrands: {
        width: 130,
        height: 40,
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        columnGap: 4
    },
    allBrandsText: {
        fontSize: config.fontMedium,
        fontFamily: config.familyBold,
        lineHeight: config.lineMedium,
    }
})

export default BrandsScroll
