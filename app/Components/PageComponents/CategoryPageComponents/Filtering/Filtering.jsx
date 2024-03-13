import TrashSvg from "../../../../../assets/icons/TrashBlackJs";
import ButtonsInFilter from "./ButtonsInFilter";
import React from "react";
import {View, StyleSheet, Text, ScrollView, TouchableOpacity} from "react-native";
import {config} from "../../../../config";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import ParamsBlack from "../../../../../assets/icons/Filtering/ParamsBlackJs";
const Filtering = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.forTrash}>
                    <TrashSvg/>
                </View>
            </TouchableOpacity>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.buttonsContainer}>
                    <ButtonsInFilter text={'0 - 2000 р'}/>
                    <ButtonsInFilter text={'Верхние ноты: цитрусовые'}/>
                    <ButtonsInFilter text={'100 р'}/>
                    <ButtonsInFilter text={'null'}/>
                    <ButtonsInFilter text={'Верхние ноты: не цитрусовые'}/>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: wp(2.5)
    },
    buttonsContainer: {
        columnGap: wp(3.05),
        flexDirection: 'row',
        paddingBottom: wp(4.1),
        paddingLeft: wp(4)
    },
    forTrash: {
        width: wp(10),
        height: wp(10),
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: config.backgroundIcons
    },
    textForFilters: {
        fontSize: config.lineMedium,
        fontFamily: config.familyRegular,
        lineHeight: config.lineMedium
    }
})

export default Filtering
