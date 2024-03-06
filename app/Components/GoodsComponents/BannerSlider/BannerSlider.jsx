import React from "react";
import {View, StyleSheet, Image, ScrollView} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import SliderBox from '/home/vova/WebstormProjects/Polflakona/app/Pages/HomePage/SliderBox.png'
const BannerSlider = ({key, img}) => {
    return (
        <View style={styles.sliderBox}>
            <ScrollView snapToInterval={wp(100)} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.block}>
                    <Image
                        style={styles.imageInSlider}
                        source={SliderBox}
                        // source={{uri: `${img}`}}
                    />
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    sliderBox: { marginLeft: '-2.5%'},
    imageInSlider: {
        height: hp(30),
        width: wp(95),
        resizeMode: 'contain',
    },
    block: {
        columnGap: wp(2.5),
        borderRadius: wp(2),
        paddingRight: wp(2.5),
        paddingLeft: wp(2.5),
        justifyContent: 'center',
        flexDirection: 'row'
    }
})
export default BannerSlider

