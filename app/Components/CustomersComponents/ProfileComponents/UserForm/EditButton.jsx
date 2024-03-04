import React from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import EditBlackJs from "../../../../../assets/icons/customers/EditBlackJs";
import {config} from "../../../../config";
import {CustomerAddContext} from "../../../../context/CustomersContext";

function EditButton() {
    const {setCustomer} = React.useContext(CustomerAddContext)
    return (
        <TouchableOpacity onPress={() => setCustomer(0)}>
            <View style={styles.container}>
                <EditBlackJs/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: config.backgroundIcons,
        borderRadius: wp(2),
        width: wp(10),
        height: wp(10)
    }
})
export default EditButton
