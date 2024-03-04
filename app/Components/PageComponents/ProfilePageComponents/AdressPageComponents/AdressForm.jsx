import React, {useContext, useState} from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {config} from "../../../../config";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {SelectedAddressContext} from "../../../../context/AddressContext";
function AdressForm({name, text}) {
    const [isActive, setIsActive] = useState(false)
    const {selectedAddress, setSelectedAddress} = useContext(SelectedAddressContext)
    const dynStyles = {
        bdColor: selectedAddress !== name ? '#E1E1E1' : config.accentColor
    }
    return (
        <TouchableOpacity
            style={{paddingBottom: wp(4)}}
            onPress={() => {
                if (selectedAddress) {
                    setSelectedAddress(`${name}`);
                    setIsActive(false)
                }
                setSelectedAddress(`${name}`)
                isActive === true ? (setIsActive(false)) : (setIsActive(true))
            }}>
            <View style={[styles.container, {borderColor: dynStyles.bdColor}]}>
                <Text style={styles.headText}>
                    {name}
                </Text>
                <Text style={styles.lowText}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        width: wp(70),
        borderRadius: wp(3),
        borderWidth: wp(0.5),
        padding: wp(4),
        backgroundColor: config.backgroundIcons,
    },
    headText: {
        paddingBottom: wp(1),
        fontSize: config.fontMedium,
        fontFamily: config.familyBold,
        lineHeight: config.lineMedium
    },
    lowText: {
        fontSize: config.fontMedium,
        fontFamily: config.familyRegular,
        lineHeight: config.lineMedium,
    }
})
export default AdressForm
