import React from "react";
import {View, StyleSheet, Text, TouchableOpacity, Image} from "react-native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import Parfum from "../../../../assets/images/Parfum.png";
import {config} from "../../../config";
import {useNavigation} from "@react-navigation/native";
const CategoriesBlock = () => {
    const navigation = useNavigation()
    return (
        <View>
            <Text style={styles.textCommon}>
                Категории
            </Text>
            <View style={styles.categoryBlock}>
                <TouchableOpacity onPress={() => navigation.navigate('CategoryPage')}>
                    <Image
                        style={{
                            width: wp(45.8),
                            height: wp(45.8)
                        }} source={Parfum}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CategoryPage')}>
                    <Image
                        style={{
                            width: wp(45.8),
                            height: wp(45.8)
                        }} source={Parfum}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CategoryPage')}>
                    <Image
                        style={{
                            width: wp(45.8),
                            height: wp(45.8)
                        }} source={Parfum}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CategoryPage')}>
                    <Image
                        style={{
                            width: wp(45.8),
                            height: wp(45.8)
                        }} source={Parfum}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    categoryBlock: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: wp(3.05),
        paddingBottom: wp(8.7)
    },
    textCommon: {
        paddingBottom: wp(4.1),
        fontFamily: config.familyBold,
        fontSize: config.fontLarge,
        lineHeight: config.lineLarge
    }
})
export default CategoriesBlock
