import React, {useContext} from "react";
import {
    View,
    ScrollView,
    StyleSheet,
} from "react-native";
import Header from "../../Components/PageComponents/Header/Header";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import Footer from "../../Components/PageComponents/Footer/Footer";
import ButtonsInFooter from "../../Components/PageComponents/Footer/ButtonsInFooter/ButtonsInFooter";
import {ThemeContext} from "../../context/Context";
import BrandsScroll from "../../Components/GoodsComponents/BrandsScroll/BrandsScroll";
import HistoriesBlockScroll from "../../Components/GoodsComponents/HistoriesBlockScroll/HistoriesBlockScroll";
import CategoriesBlock from "../../Components/GoodsComponents/CategoriesBlock/CategoriesBlock";
import TopSellsGoods from "../../Components/GoodsComponents/TopSellsGoods/TopSellsGoods";
import BannerSlider from "../../Components/GoodsComponents/BannerSlider/BannerSlider";

const HomePage = () => {
    // const {theme} = useContext(ThemeContext)
    return (
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false} >
                <Header city={'Москва'}/>
                <View style={styles.container}>
                    <View style={styles.mainBlock}>
                        <BannerSlider/>
                        <HistoriesBlockScroll/>
                        <BrandsScroll/>
                        <CategoriesBlock/>
                        <TopSellsGoods/>
                    </View>
                    <Footer/>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <ButtonsInFooter/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: wp(100),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    mainBlock: {
        paddingLeft: wp(2.5),
        width: wp(100),
        paddingBottom: wp(4),
        paddingTop: wp(3)
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        left: 0,
        right: 0,
        paddingBottom: wp(5)
    }
})

export default HomePage
