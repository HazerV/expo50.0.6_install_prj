import React, {useState, useContext, useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity, ActivityIndicator} from "react-native";
import {config} from "../../../config";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import AvailableValues from "./AvailableValues";
import {ValueContext} from "../../../context/Context";
import Counter from "./Counter";

const ChooseValue = ({props}) => {
    const {value} = useContext(ValueContext)
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    useEffect(() => {
        try {
            const mapped = props.map((item) => item)
            const found = mapped.find(({quantity}) => quantity === value)
            setData(found)
        } catch (err) {
            console.error(err)
        }
        finally {
            setLoading(false)
        }
    }, [setData, setLoading]);
    return (
        loading === false ? (
            <View style={styles.container}>
                <View style={styles.elements}>
                    <Text style={styles.chooseText}>
                        Выберите объем:
                    </Text>
                    <View style={styles.values}>
                        {
                            props.map((item) =>
                                <View style={styles.values}>
                                    <AvailableValues count={item.quantity}/>
                                </View>
                            )
                        }
                    </View>
                    <View style={{flexDirection: 'row', columnGap: wp(3)}}>
                        <Counter/>
                        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                            <Text style={styles.textPrice}>
                                {/*{data.price} руб*/}
                            </Text>
                            <Text style={styles.textValue}>
                                {/*{data.quantity} мл*/}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            ) : (
                <ActivityIndicator color={config.accentColor} size={'large'} style={styles.indicator}/>
            )

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
    },
    indicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ChooseValue
