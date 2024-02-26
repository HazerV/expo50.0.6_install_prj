import React, {useState, useContext} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {config} from "../../../config";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import AvailableValues from "./AvailableValues";
import {ValueContext} from "../../../context/Context";
import Counter from "./Counter";

const ChooseValue = ({id}) => {

    const {value} = useContext(ValueContext)
    const price = 5000

    return (
        <View style={styles.container}>
            <View style={styles.elements}>
                <Text style={styles.chooseText}>
                    Выберите объем:
                </Text>
                <View style={styles.values}>
                    <AvailableValues count={2}/>
                    <AvailableValues count={5}/>
                    <AvailableValues count={15}/>
                    <AvailableValues count={30}/>
                </View>
                <View style={{flexDirection: 'row', columnGap: wp(3) }}>
                    <Counter />
                    <View style={{flexDirection: 'column', justifyContent: 'center' }}>
                        <Text style={styles.textPrice}>
                            {price} руб
                        </Text>
                        <Text style={styles.textValue}>
                            {value} мл
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: config.backgroundIcons,
        borderRadius: 16,
        width: wp(95),
        height: wp(43),
        justifyContent: 'center'
    },
    values: {
        flexDirection: 'row',
        columnGap: wp(2),
        paddingBottom: wp(3),
    },
    elements: {
        padding: wp(4),
        flexDirection: 'column',
    },
    chooseText: {
        fontSize: config.fontMedium,
        fontFamily: config.familyBold,
        lineHeight: config.lineMedium,
        paddingBottom: wp(2)
    },
    textPrice: {
        fontSize: config.fontLarge,
        fontFamily: config.familyBold,
        lineHeight: config.lineLarge
    },
    textValue: {
        fontSize: config.fontMedium,
        fontFamily: config.familyRegular,
        lineHeight: config.lineMedium,
        color: '#474747'
    }
})

export default ChooseValue
