import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import ParamsBlackJs from "../../../../../../assets/icons/Filtering/ParamsBlackJs";
import OpenAllBlackJs from "../../../../../../assets/icons/Filtering/OpenAllBlackJs";
import {config} from "../../../../../config";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import Populars from "./Populars/Populars";
import Filters from "./Filters/Filters";
import Modal from "react-native-modal";
const SortingFilter = () => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <View style={styles.container}>
            {
                isVisible === false ? (
                    <TouchableOpacity onPress={() => setIsVisible(true)}>
                        <Populars />
                    </TouchableOpacity>
                ) : (
                    <View>
                     </View>
                )
            }

            <TouchableOpacity>
                <Filters />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: wp(2.5),
        paddingRight: wp(2.5),
        flexDirection: 'row',
        paddingBottom: wp(6.5),
    },
    text: {
        fontSize: config.fontMedium,
        fontFamily: config.familyRegular,
        lineHeight: config.lineMedium
    },
    oneBlock: {
        flexDirection: 'row',
        gap: wp(2),
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1
    }
})
export default SortingFilter
