import React, {useContext, useEffect, useState} from "react";
import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image, Platform, ActivityIndicator} from "react-native";
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
import {ProductContext} from "../../context/ProductContext";
import {getProductById, getProductsByBrandIdLimit} from "../../api/products";
const ProductPage = ({count, route}) => {
    const id = route.params
    const [attributes, setAttributes] = useState([])
    const [photoProduct, setPhotoProduct] = useState([])
    const [productData, setProductData] = useState([])
    const [photoForBrandImage, setPhotoForBrandImage] = useState([])
    const [brandSlug, setBrandSlug] = useState([])
    const [offers, setOffers] = useState([])
    const [loading, setLoading] = useState(true)
    const [similarProducts, setSimilarProducts] = useState([])
    useEffect(() => {
        getProductById(id.id)
            .then((res) => {
                setOffers(res.data.offers)
                setProductData(res.data)
                setPhotoForBrandImage(res.data.brand_image.photo2x)
                setAttributes(res.data.attributes)
                setBrandSlug(res.data.brand_slug)
                setPhotoProduct(res.data.images)
                setSimilarProducts(res.data.similar_products)
                console.log(attributes)
                // getProductsByBrandIdLimit(brandSlug, 3)
                //     .then((res) => {
                //         // console.log('here', res.data)
                //     })
            })
            .catch((err) => console.error(err))
            .finally(
                setLoading(false)
            )
    }, [setOffers, setSimilarProducts, setPhotoProduct, setProductData, setPhotoForBrandImage, setAttributes, setLoading]);
    console.log('tut', typeof photoProduct)
    return (
        loading === false ? (
            <View>
                <SafeAreaView style={{backgroundColor: 'white', paddingTop: wp(2)}}>
                    <HeaderForProduct name={productData.name}/>
                </SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}
                            style={styles.scrollView}>
                    <View style={styles.container}>
                        {
                            photoProduct.map((i) =>
                                <SliderProduct image={i.photo} />
                            )
                        }
                        <SliderProduct image={photoProduct} />
                        {
                            productData.isAvailable === false ? (
                                <ProductNullBlock/>
                            ) : (
                                <ChooseValue props={offers}/>
                            )
                        }
                        {/*<ChooseValue />*/}
                        <View style={styles.descBlock}>
                            <Text style={styles.descriptionHead}>
                                Описание
                            </Text>
                            <Text style={styles.descriptionText}>
                                {productData.description}
                            </Text>
                        </View>
                        <View style={{paddingBottom: wp(4)}}>
                            <Text style={styles.charectText}>
                                Характеристики:
                            </Text>
                            {
                                attributes.map((item) =>
                                    <View style={styles.textInBlock}>
                                        <Text style={styles.brandName}>
                                            {item.name}
                                        </Text>
                                        <View style={styles.border}/>
                                        <Text style={styles.nameOfBrand}>
                                            {item.value}
                                        </Text>
                                    </View>
                                )
                            }
                        </View>
                        <BrandParfumeBlock brandUrl={photoForBrandImage} />
                        <ThisBrandGoods />
                        {
                            similarProducts.length !== 0  && (
                                <SimilarGoods props={similarProducts}/>
                            )
                        }
                    </View>
                    <Footer/>
                </ScrollView>
                <View style={styles.footer}>
                    <ButtonsInFooter/>
                </View>
            </View>
        ) : (
            <ActivityIndicator size={'large'} color={config.accentColor} style={styles.indicator}/>
        )

    )
}
const styles = StyleSheet.create({
    container: {
        paddingLeft: wp(2.5),
        backgroundColor: 'white',
        paddingBottom: wp(15)
    },
    scrollView: {
        height: '100%',
        backgroundColor: 'white'
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
        padding: Platform.OS === 'ios' ? wp(30) : wp(15)
    },
    indicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ProductPage

{/*<View style={{paddingBottom: wp(6), width: wp(95)}}>*/
}
{/*    <Text style={styles.descriptionHead}>*/
}
{/*        Ноты*/
}
{/*    </Text>*/
}
{/*    <Text style={styles.descriptionText}>*/
}
{/*        Композицию составляют следующие ноты и аккорды: Бензоин, Благовония, Бурбон, Элеми, Инжир,*/
}
{/*        Лист фиалки, Мускус, Плющ и Ветивер.*/
}
{/*    </Text>*/
}
{/*</View>*/
}
