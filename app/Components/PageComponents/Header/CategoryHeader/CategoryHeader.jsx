import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import SearchSvg from "../../../../../assets/icons/HeaderIcons/SearchJs";
import ArrowSvg from "../../../../../assets/icons/ArrowJs";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../../../config";
import {useNavigation} from "@react-navigation/native";

const CategoryHeader = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
                <View style={styles.go_back}>
                    <ArrowSvg/>
                </View>
            </TouchableOpacity>
            <Text style={styles.text_head}>
                Парфюмерия
            </Text>
            <View style={styles.search}>
                <SearchSvg/>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 32,
        width: wp(100),
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        // columnGap: wp(30),
        paddingBottom: 12,
    },
    text_head: {
        fontSize: config.fontLarge,
        fontFamily: config.familyBold,
        lineHeight: config.lineLarge
    },
    go_back: {
        width: wp(10),
        height: wp(10),
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    search: {
        width: wp(10),
        height: wp(10),
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CategoryHeader
