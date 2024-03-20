import React from "react";
import {View, StyleSheet, Text} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import {config} from "../../../../config";
import {ModalContext} from "../../../../context/ModalContexts";
function SortingModal () {
    return (
        <View style={styles.containerModal}>
            <View style={styles.bottomView}>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    containerModal: {
        height: hp(100),
        width: wp(100),
        backgroundColor: 'black',
        opacity: 0.5
    },
    bottomView: {
        width: wp(100),
        height: wp(100),
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default SortingModal
