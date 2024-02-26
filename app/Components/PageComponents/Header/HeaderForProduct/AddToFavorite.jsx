import React, {useState} from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../../../config";
import WhiteHeart from '../../../../../assets/icons/ProductPage/HeartWhiteJs'
import BlackHeart from '../../../../../assets/icons/ProductPage/HeartBlackJS'

const AddToFavorite = () => {
    const [like, setLike] = useState(false)

    return (
        <TouchableOpacity onPress={() => {
            if (like === false) {
                setLike(true)
            } else {
                setLike(false)
            }
        }}>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: wp(10),
                height: wp(10),
                backgroundColor: like === false ? config.backgroundIcons : '#593780',
                borderRadius: wp(2)
            }}>
                {
                    like === false ? (
                        <BlackHeart />
                    ) : (
                        <WhiteHeart />
                    )
                }
            </View>
        </TouchableOpacity>
    )
}

export default AddToFavorite

