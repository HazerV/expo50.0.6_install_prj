import React from "react";
import {View, Text, StyleSheet, Modal, TouchableOpacity} from "react-native";
import ParamsBlackJs from "../../../../../assets/icons/Filtering/ParamsBlackJs";
import OpenAllBlackJs from "../../../../../assets/icons/Filtering/OpenAllBlackJs";
import {config} from "../../../../config";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import ModalInSorting from "../Modals/ModalInSorting/ModalInSorting";
// import Modal from "react-native-modal";
const SortingFilter = () => {
    const isVisible = true
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                return (
                    <View style={{flex: 1}}>
                        <Modal isVisible={isVisible}>
                            <View style={{flex: 1}}>
                                <Text>
                                    TEST TEXT
                                </Text>
                            </View>
                        </Modal>
                    </View>
                )
            }}>
                <View style={styles.oneBlock}>
                    <Text style={styles.text}>
                        По популярности
                    </Text>
                    <OpenAllBlackJs />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.oneBlock}>
                    <ParamsBlackJs />
                    <Text style={styles.text}>
                        Фильтры
                    </Text>
                </View>
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
