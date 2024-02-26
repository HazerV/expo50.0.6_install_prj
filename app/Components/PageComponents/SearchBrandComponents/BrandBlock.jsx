import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {config} from "../../../config";
import ExampleImg from './ExampleImg.png'
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {useNavigation} from "@react-navigation/native";
const BrandBlock = ({letter, img}) => {
    letter = 'A'
    img = ExampleImg
    const navigation = useNavigation()
    return (
        <View>
            <Text style={styles.letterStyle}>
                {letter}
            </Text>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('SelectedBrandPage')}>
                    <Image style={styles.imageStyle} source={img}/>
                </TouchableOpacity>
                <Image style={styles.imageStyle} source={img}/>
                <Image style={styles.imageStyle} source={img}/>
                <Image style={styles.imageStyle} source={img}/>
                <Image style={styles.imageStyle} source={img}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        rowGap: wp(3),
        columnGap: wp(3),
        flexWrap: 'wrap',
    },
    letterStyle: {
        fontFamily: config.familyBold,
        fontSize: config.fontLarge,
        lineHeight: config.lineLarge,
        color: 'black',
        paddingBottom: wp(3)
    },
    imageStyle: {
        resizeMode: 'cover',
        width: wp(46),
        height: wp(23)
    }
})
export default BrandBlock
