import React from "react";
import {View, Text, StyleSheet, SafeAreaView, ScrollView, FlatList, TouchableOpacity, Image} from "react-native";
import HeaderForInfo from "../../Components/PageComponents/Header/HeaderForInfo/HeaderForInfo";
import {config} from "../../config";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import ParfumeProduct from "../../Components/PageComponents/InfoPageComp/ParfumeProduct/ParfumeProduct";
import BrandsScroll from "../../Components/GoodsComponents/BrandsScroll/BrandsScroll";
import PaymentBlock from "../../Components/PageComponents/InfoPageComp/PaymentBlock/PaymentBlock";
import FooterInfo from "../../Components/PageComponents/InfoPageComp/FooterInfo/FooterInfo";
import LogoSvg from '../../../assets/Logo'
import MapBanner from "../../Components/PageComponents/InfoPageComp/MapBanner/MapBanner";

const InfoPage = () => {
    return (
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    height: '100%',
                    backgroundColor: 'white'
                }}>
                <HeaderForInfo/>
                <View style={styles.container}>
                    <View style={styles.mainBlock}>
                        <View>
                            <Text style={{
                                fontSize: config.fontLarge,
                                lineHeight: config.lineLarge,
                                fontFamily: config.familyBold,
                                alignSelf: 'center',
                                paddingBottom: 12
                            }}>
                                Парфюмерный бар
                            </Text>
                            <View style={styles.scrollProducts}>
                                <ParfumeProduct/>
                                <ParfumeProduct/>
                                <ParfumeProduct/>
                                <ParfumeProduct/>
                                <ParfumeProduct/>
                                <ParfumeProduct/>
                            </View>
                        </View>
                        <BrandsScroll/>
                        <View style={{justifyContent: 'center', alignItems: 'center', paddingBottom: 32}}>
                            <MapBanner/>
                        </View>
                        <PaymentBlock/>
                        <FooterInfo/>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingBottom: 100
                    }}>
                        <View style={{
                            paddingRight: wp(10)
                        }}>
                            <LogoSvg />
                        </View>
                        <Text style={{
                            fontSize: config.fontMedium,
                            lineHeight: config.lineMedium,
                            fontFamily: config.familyRegular,
                            alignSelf: 'center'
                        }}>
                            ©2024. Платформа TrueStudio
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center'
    },
    mainBlock: {
        width: wp(95),
        paddingBottom: 16,
    },
    scrollProducts: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 24,
        gap: wp(3.05)
    }
})

export default InfoPage
