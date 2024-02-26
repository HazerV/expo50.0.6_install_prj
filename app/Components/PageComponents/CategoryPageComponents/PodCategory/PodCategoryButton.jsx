import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {config} from "../../../../config";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {useNavigation} from "@react-navigation/native";


const PodCategoryButton = ({text, route}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.text}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        width: wp(30.03),
        height: wp(10.18),
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5'
    },
    text: {
        textAlign: 'center',
        fontSize: config.fontMedium,
        lineHeight: config.lineMedium,
        fontFamily: config.familyBold
    }
})

export default PodCategoryButton
