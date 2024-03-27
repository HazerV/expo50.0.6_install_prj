import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../../../config";

const SliderProduct = ({image}) => {
    return (
        <View style={{ marginLeft: -wp(2.5) }}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.photoSlider}>
                    <Image
                        style={styles.image}
                        source={{uri: `${image}`}}/>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
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
        paddingLeft: wp(2.5)
    },
    nameText: {
        fontSize: config.fontLarge,
        fontFamily: config.familyBold,
        lineHeight: config.lineLarge,
        paddingBottom: wp(4),
        paddingTop: wp(4),
        paddingLeft: wp(2.5)
    }
})
export default SliderProduct
