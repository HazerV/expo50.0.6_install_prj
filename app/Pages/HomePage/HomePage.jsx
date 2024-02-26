import React, {useContext} from "react";
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    StyleSheet,
    Image,
    TouchableOpacity,
    Pressable
} from "react-native";
import Header from "../../Components/PageComponents/Header/Header";
import SliderBox from './SliderBox.png'
import {config} from "../../config";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import ArrowSvg from '../../../assets/icons/ArrowJs'
import RectangleEx from '../../../assets/images/RectangleExJs'
import Footer from "../../Components/PageComponents/Footer/Footer";
import ButtonsInFooter from "../../Components/PageComponents/Footer/ButtonsInFooter/ButtonsInFooter";
import Parfum from '../../../assets/images/Parfum.png'
import {useNavigation} from "@react-navigation/native";
import ProductitemInCategory from "../../Components/GoodsComponents/ProductItem/ProductItemInCategory";
import {ThemeContext} from "../../context/Context";
const HomePage = () => {

    // const {theme, setTheme} = useContext(ThemeContext)
    // const dynamicStyles = {}
    const navigation = useNavigation()
    const {theme} = useContext(ThemeContext)
    return (
        // <SafeAreaView
        //     style={{
        //     // flex: 1,
        //     backgroundColor: 'white',
        // }}>
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <Header city={'Москва'}/>
                <View style={styles.container}>
                    <View style={styles.mainBlock}>
                        <View style={styles.sliderBox}>
                            <Image
                                style={styles.imageInSlider}
                                source={SliderBox}/>
                        </View>
                        <View>
                            <View>
                                <Text style={styles.textCommon}>
                                    Истории
                                </Text>
                                <View style={styles.allArrow}>
                                    <Pressable hitSlop={20} onPress={() => navigation.navigate('BrandPage')}>
                                        <Text style={styles.textCommon}>
                                            Все
                                        </Text>
                                    </Pressable>
                                    <View style= {{paddingTop: wp(1)}}>
                                        <ArrowSvg/>
                                    </View>
                                </View>
                            </View>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                <View style={styles.commonBlock}>
                                    <RectangleEx/>
                                    <RectangleEx/>
                                    <RectangleEx/>
                                    <RectangleEx/>
                                    <RectangleEx/>
                                </View>
                            </ScrollView>
                        </View>
                        <Text style={styles.textCommon}>
                            Категории
                        </Text>
                        <View style={styles.categoryBlock}>
                            <TouchableOpacity onPress={() => navigation.navigate('CategoryPage')}>
                                <Image
                                    style={{
                                        width: wp(45.8),
                                        height: wp(45.8)
                                    }} source={Parfum} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('CategoryPage')}>
                                <Image
                                    style={{
                                        width: wp(45.8),
                                        height: wp(45.8)
                                    }} source={Parfum} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('CategoryPage')}>
                                <Image
                                    style={{
                                        width: wp(45.8),
                                        height: wp(45.8)
                                    }} source={Parfum} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('CategoryPage')}>
                                <Image
                                    style={{
                                        width: wp(45.8),
                                        height: wp(45.8)
                                    }} source={Parfum} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.textCommon}>
                                Лидер продаж
                            </Text>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                <View style={styles.commonBlock}>
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
                    </View>
                    <Footer/>
                </View>
            </ScrollView>
            <View style={{
                position: 'absolute',
                bottom: 0,
                alignItems: 'center',
                left: 0,
                right: 0,
                paddingBottom: wp(5)
            }}>
                <ButtonsInFooter />
            </View>
        </View>
         // {/*</SafeAreaView>*/}

    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    mainBlock: {
        width: wp(95),
        paddingBottom: wp(4.1),
        paddingTop: wp(3.05)
    },
    sliderBox: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: wp(4.1)
    },
    imageInSlider: {
        resizeMode: 'contain',
        height: hp(30),
        width: wp(95)
    },
    commonBlock: {
        columnGap: wp(3.05),
        flexDirection: 'row',
        paddingBottom: wp(4.1),
    },
    textCommon: {
        paddingBottom: wp(4.1),
        fontFamily: config.familyBold,
        fontSize: config.fontLarge,
        lineHeight: config.lineLarge
    },
    categoryBlock: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: wp(3.05),
        paddingBottom: wp(8.7)
    },
    allArrow: {
        flexDirection: 'row',
        columnGap: 1,
        position: 'absolute',
        alignContent: 'center',
        right: wp(0.5),
    },
})

export default HomePage
