import React from "react";
import {View, Text, StyleSheet, Image, Pressable, ScrollView, TouchableOpacity} from "react-native";
import {config} from "../../../config";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import ArrowSvg from "../../../../assets/icons/ArrowJs";
import RectangleEx from "../../../../assets/images/RectangleExJs";
import {useNavigation} from "@react-navigation/native";
const HistoriesBlockScroll = () => {
    const navigation = useNavigation()
    return (
        <View style={{
            marginLeft: -wp(2.5)
        }}>
            <View style={styles.align}>
                <Text style={styles.textCommon}>
                    Истории
                </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('BrandPage')}>
                        <View style={styles.block}>
                            <Text style={styles.textCommon}>
                                Все
                            </Text>
                            <View style={{paddingTop: wp(1)}}>
                                <ArrowSvg/>
                            </View>
                        </View>
                    </TouchableOpacity>
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.commonBlock}>
                    <RectangleEx/>
                    <RectangleEx/>
                    <RectangleEx/>
                    <RectangleEx/>
                    <RectangleEx/>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    textCommon: {
        paddingBottom: wp(4.1),
        fontFamily: config.familyBold,
        fontSize: config.fontLarge,
        lineHeight: config.lineLarge,
        paddingLeft: wp(2.5)
    },
    align: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    allArrow: {
        flexDirection: 'row',
        columnGap: wp(1.5),
        position: 'absolute',
        alignContent: 'center',
        right: wp(0.5),
    },
    commonBlock: {
        columnGap: wp(3.05),
        flexDirection: 'row',
        paddingLeft: wp(2.5),
        paddingBottom: wp(4.1),
    },
    block: {
        height: wp(10),
        columnGap: wp(1.5),
        borderRadius: wp(2),
        justifyContent: 'center',
        paddingRight: wp(2.5),
        flexDirection: 'row',
    }
})
export default HistoriesBlockScroll
