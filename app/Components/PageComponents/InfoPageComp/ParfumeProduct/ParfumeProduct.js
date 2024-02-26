import React from "react";
import {View, Image, Text, StyleSheet} from "react-native";
import {config} from "../../../../config";
import HitProducts from '../../../../../assets/images/HitsProducts.png'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";

const ParfumeProduct = ({image}) => {

    image = HitProducts

    return (
        <View>
            <Image
                style={{
                    width: wp(29.52),
                    height: wp(29.52)
                }}
                source={image} />
        </View>
    )

}

export default ParfumeProduct
