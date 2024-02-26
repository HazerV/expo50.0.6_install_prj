import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Modal from "react-native-modal";

const ModalInSorting = () => {
    return (
        <View>
            <Modal isVisible={true}>
                <View style={{flex: 1}}>
                    <Text>
                        TEST TEXT
                    </Text>
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {

    }
})
export default ModalInSorting
