import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import GoBackBlackJs from "../../../../../assets/icons/GoBack/GoBackBlackJs";
import TrashBlackJs from "../../../../../assets/icons/TrashBlackJs";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {useNavigation} from "@react-navigation/native";
import {config} from "../../../../config";
const SearchHeader = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.button}>
                    <GoBackBlackJs />
                </View>
            </TouchableOpacity>
            <Text style={styles.text}>
                Поиску
            </Text>
            <TouchableOpacity>
                <View style={styles.button}>
                    <TrashBlackJs />
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: wp(13),
        width: wp(100),
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: wp(2.5),
        paddingBottom: wp(2.7),
    },
    button: {
        width: wp(10),
        height: wp(10),
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: config.fontLarge,
        fontFamily: config.familyBold,
        lineHeight: config.lineLarge
    }
})
export default SearchHeader
