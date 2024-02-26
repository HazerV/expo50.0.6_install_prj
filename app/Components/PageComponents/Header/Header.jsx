import React, {useState, useContext} from "react";
import HeaderSvg from '../../../../assets/icons/HeaderIcons/HeaderJs'
import SearchSvg from '../../../../assets/icons/HeaderIcons/SearchJs'
import NavigationSvg from '../../../../assets/icons/HeaderIcons/NavigationJs'
import {config} from "../../../config";
import ButtonComponents from "../../GoodsComponents/ButtonComponent/ButtonComponents";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {View, TouchableOpacity, Text, StyleSheet} from "react-native";
import {ThemeContext} from "../../../context/Context";
import {useNavigation} from "@react-navigation/native";
const Header = ({city}) => {
    const navigation = useNavigation()
    const {theme} = useContext(ThemeContext)
    const dynSt = {
        bgColor: theme==='light' ? 'white' : 'black'
    }
    return (
        <View>
            <View style={[styles.container, {backgroundColor: dynSt.bgColor}]}>
                <TouchableOpacity>
                    <View style={styles.block}>
                        <NavigationSvg/>
                        <Text style={styles.textInBlock}>
                            {city}
                        </Text>
                    </View>
                </TouchableOpacity>
                <HeaderSvg/>
                <TouchableOpacity onPress={() => navigation.navigate('SearchPage')}>
                    <View style={styles.block}>
                        <SearchSvg/>
                        <Text style={styles.textInBlock}>
                            Поиск
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.lowBlock}>
                <ButtonComponents text={'Оплата'} />
                <ButtonComponents text={'Доставка'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: wp(12),
        justifyContent: 'center',
        width: wp(100),
        columnGap: 55,
        paddingBottom: 12,
        // backgroundColor: 'white'
    },
    block: {
        height: wp(10),
        width: wp(22.39),
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 4,
        alignItems: 'center'
    },
    textInBlock: {
        fontSize: config.fontSmall,
        lineHeight: config.lineSmall,
        fontFamily: config.familyRegular
    },
    boldText: {
        fontSize: config.fontMedium,
        lineHeight: config.lineMedium,
        fontFamily: config.familyBold
    },
    lowBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: wp(3.05),
        backgroundColor: 'white'
    }
})

export default Header
