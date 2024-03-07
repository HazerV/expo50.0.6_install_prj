import React, {useEffect} from "react";
import {View, Text, StyleSheet, ScrollView, Image, Linking, TouchableOpacity, Pressable} from "react-native";
import BrandEx from '../../../../assets/images/BrandEx.png'
import ArrowSvg from '../../../../assets/icons/ArrowJs'
import {config} from "../../../config";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {useNavigation} from "@react-navigation/native";
import {getBrands} from "../../../api/brands";

const BrandsScroll = ({img}) => {
    img = BrandEx
    const navigation = useNavigation()
    const [Brands, SetBrands] = React.useState([])
    const [Index, SetIndex] = React.useState()
    useEffect(() => {
        async function getData() {
            const get = await getBrands()
            SetBrands(get)
        }
        getData()
    }, []);
    console.log('ddd', Brands)
    return (
        <View style={{marginLeft: -wp(2.5)}}>
            <View style={styles.align}>
                <Text style={styles.allBrandsText}>
                    Бренды
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('BrandPage')}>
                    <View style={styles.allBrands}>
                        <Text style={styles.allBrandsText}>
                            Все
                        </Text>
                        <ArrowSvg/>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.imageBlock}>
                    {
                        Brands.map((item, index) => item.images)
                            .flat()
                            .map(
                                (image, index) => {
                                    image.photo_mobile
                                    return (
                                        <TouchableOpacity onPress={() => navigation.navigate('SelectedBrandPage')}>
                                            <Image style={styles.image} source={{uri: `${image.photo_mobile}`}}/>
                                        </TouchableOpacity>
                                    )
                                })
                    }
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    containerBrands: {
        // marginLeft: -wp(2.5),
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
    },
    image: {
        resizeMode: 'contain',
        width: wp(30),
        height: wp(15)
    }
})

export default BrandsScroll
