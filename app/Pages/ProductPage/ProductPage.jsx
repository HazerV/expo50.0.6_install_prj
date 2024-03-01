import React, {useContext, useState} from "react";
import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image, Platform} from "react-native";
import {config} from "../../config";
import HeaderForProduct from "../../Components/PageComponents/Header/HeaderForProduct/HeaderForProduct";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import ChooseValue from "../../Components/PageComponents/ProductPageComponents/ChooseValue";
import ButtonsInFooter from "../../Components/PageComponents/Footer/ButtonsInFooter/ButtonsInFooter";
import BrandParfumeBlock from "../../Components/PageComponents/ProductPageComponents/BrandParfume/BrandParfumeBlock";
import ThisBrandGoods from "../../Components/PageComponents/ProductPageComponents/ThisBrandGoods/ThisBrandGoods";
import SimilarGoods from "../../Components/PageComponents/ProductPageComponents/SimilarGoods/SimilarGoods";
import Footer from "../../Components/PageComponents/Footer/Footer";
import ProductNullBlock from "../../Components/PageComponents/ProductPageComponents/ProductNullBlock/ProductNullBlock";
import SliderProduct from "../../Components/PageComponents/ProductPageComponents/SliderProduct/SliderProduct";
const ProductPage = ({count}) => {
    return (
        <View>
            <SafeAreaView style={{backgroundColor: 'white', paddingTop: wp(2)}}>
                <HeaderForProduct/>
            </SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}
                        style={{height: '100%', backgroundColor: 'white'}}>
                <View style={styles.container}>
                    <SliderProduct />
                    {
                        count === 0 ? (
                            <ProductNullBlock />
                        ) : (
                            <ChooseValue/>
                        )
                    }
                    <View style={styles.descBlock}>
                        <Text style={styles.descriptionHead}>
                            Описание
                        </Text>
                        <Text style={styles.descriptionText}>
                            Carbone de Balmain Eau de Toilette Balmain (в России известен как «Бальман Карбон»), выпущенный в 2010 году, классифицируется как аромат для мужчин и принадлежит семействам Пряные и Древесные.
                        </Text>
                    </View>
                    <View style={{paddingBottom: wp(6), width: wp(95)}}>
                        <Text style={styles.descriptionHead}>
                            Ноты
                        </Text>
                        <Text style={styles.descriptionText}>
                            Композицию составляют следующие ноты и аккорды: Бензоин, Благовония, Бурбон, Элеми, Инжир, Лист фиалки, Мускус, Плющ и Ветивер.
                        </Text>
                    </View>
                    <View style={{paddingBottom: wp(4)}}>
                        <Text style={styles.charectText}>
                            Характеристики:
                        </Text>
                        <View style={styles.textInBlock}>
                            <Text style={styles.brandName}>
                                Бренд
                            </Text>
                            <View style={styles.border} />
                            <Text style={styles.nameOfBrand}>
                                Bruno Banani
                            </Text>
                        </View>
                        <View style={styles.textInBlock}>
                            <Text style={styles.brandName}>
                                Бренд
                            </Text>
                            <View style={styles.border} />
                            <Text style={styles.nameOfBrand}>
                                Bruno Banani
                            </Text>
                        </View>
                    </View>
                        <BrandParfumeBlock />
                        <ThisBrandGoods />
                        <SimilarGoods />
                </View>
                <Footer />
            </ScrollView>
            <View style={styles.footer}>
                <ButtonsInFooter />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingLeft: wp(2.5),
        backgroundColor: 'white',
        paddingBottom: wp(15)
    },
    image: {
        resizeMode: 'cover',
        width: wp(33),
        height: wp(47),
        overflow: 'hidden',
        borderRadius: wp(2),
        borderWidth: wp(0.5),
        borderColor: config.backgroundIcons,
    },
    photoSlider: {
        flexDirection: 'row',
        gap: wp(3),
        paddingBottom: wp(6),
    },
    nameText: {
        fontSize: config.fontLarge,
        fontFamily: config.familyBold,
        lineHeight: config.lineLarge,
        paddingBottom: wp(4),
        paddingTop: wp(4)
    },
    descBlock: {
        paddingTop: wp(6),
        paddingBottom: wp(6)
    },
    descriptionHead: {
        fontSize: config.fontMedium,
        fontFamily: config.familyBold,
        lineHeight: config.lineMedium,
        paddingBottom: wp(2)
    },
    descriptionText: {
        fontSize: config.fontMedium,
        fontFamily: config.familyRegular,
        lineHeight: config.lineMedium
    },
    charectText: {
        paddingBottom: wp(2),
        fontSize: config.fontMedium,
        lineHeight: config.lineMedium,
        fontFamily: config.familyBold
    },
    textInBlock: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        columnGap: wp(1),
        paddingBottom: wp(2),
    },
    brandName: {
        fontSize: config.fontMedium,
        lineHeight: config.lineMedium,
        fontFamily: config.familyRegular
    },
    border: {
        borderWidth: 2,
        borderTopColor: 'white',
        borderLeftColor: 'white',
        borderRightColor: 'white',
        borderBottomColor: '#CCCCCC',
        flex: 1
    },
    nameOfBrand: {
        fontSize: config.fontMedium,
        lineHeight: config.lineMedium,
        fontFamily: config.familyRegular,
        paddingRight: wp(2.5)
    },
    footer: {
        paddingTop: 50,
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        left: 0,
        right: 0,
        padding: Platform.OS==='ios' ? wp(30) : wp(15)
    }
})

export default ProductPage
