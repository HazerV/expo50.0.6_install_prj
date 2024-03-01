import React, {useState} from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {config} from "../../../../config";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";

function AdressForm({name, text}) {
    const [isActive, setIsActive] = useState(false)
    const dynStyles = {
        bdColor: isActive === true ? config.accentColor : '#E1E1E1'
    }
    return (
        <TouchableOpacity
            style={{paddingBottom: wp(4)}}
            onPress={() => {
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
        // alignItems: 'center',
        justifyContent: 'flex-start',
        width: wp(70),
        // height: wp(18),
        borderRadius: wp(3),
        borderWidth: wp(0.5),
        backgroundColor: config.backgroundIcons,
        padding: wp(4),
    },
    headText: {
        fontSize: config.fontMedium,
        fontFamily: config.familyBold,
        lineHeight: config.lineMedium,
        paddingBottom: wp(1)
    },
    lowText: {
        fontSize: config.fontMedium,
        fontFamily: config.familyRegular,
        lineHeight: config.lineMedium,
    }
})
export default AdressForm
