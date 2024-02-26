import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import MinusBlack from '../../../../assets/icons/Counter/BlackMinusJs'
import PlusBlack from '../../../../assets/icons/Counter/BlackPlusJs'
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../../config";


const Counter = ({id, value}) => {

    const [count, setCount] = useState(0)
    // const count = 5
    console.log(count)

    if (count === 0) {
        return (
            <TouchableOpacity onPress={() => setCount(count + 1)}>
                <View style={styles.null}>
                    <PlusBlack/>
                </View>
            </TouchableOpacity>
        )
    } else {
        return (
            <View style={styles.counter}>
                <TouchableOpacity
                    hitSlop={wp(3.5)}
                    onPress={() => setCount(count - 1)}>
                    <MinusBlack/>
                </TouchableOpacity>
                <Text style={styles.count}>
                    {count}
                </Text>
                <TouchableOpacity
                    hitSlop={wp(3.5)}
                    onPress={() => setCount(count+1)}>
                    <PlusBlack/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: wp(46),
        height: wp(12),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: wp(4)
    },
    null: {
        width: wp(24),
        height: wp(12),
        borderRadius: wp(4.1),
        backgroundColor: '#E1E1E1',
        borderWidth: wp(0.5),
        borderColor: '#CCCCCC',
        alignItems: 'center',
        justifyContent: 'center',
        padding: wp(4.6),
        flexDirection: 'row',
    },
    counter: {
        width: wp(24),
        height: wp(12),
        borderRadius: wp(4.1),
        backgroundColor: 'white',
        borderWidth: wp(0.5),
        borderColor: config.accentColor,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: wp(3),
        flexDirection: 'row'
    },
    count: {
        // borderWidth: 1,
        fontSize: 18,
        lineHeight: 22,
        fontFamily: config.familyBold,
        color: 'black'
    }
})

export default Counter
