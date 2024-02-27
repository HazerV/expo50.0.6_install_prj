import React from "react";
import {View, StyleSheet, Image} from "react-native";
import SliderBox from "../../../Pages/HomePage/SliderBox.png";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
const BannerSlider = () => {
    return (
        <View style={styles.sliderBox}>
            <Image
                style={styles.imageInSlider}
                source={SliderBox}/>
        </View>
    )
}
const styles = StyleSheet.create({
    sliderBox: {
        marginLeft: '-2.5%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: wp(4),
        paddingRight: wp(2.5)
    },
    imageInSlider: {
        resizeMode: 'contain',
        height: hp(30),
        width: wp(95),

    },
})
export default BannerSlider
