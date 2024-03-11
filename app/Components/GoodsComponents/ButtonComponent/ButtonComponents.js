import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../../config";
import SearchBoldJs from "../../../../assets/icons/CategoryHeader/SearchBoldJs";
import GoBackBoldJs from "../../../../assets/icons/CategoryHeader/GoBackBoldJs";
import {useNavigation} from "@react-navigation/native";
import navigation from "../../../routes/Navigation";

const GoBackComponent = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.goBackSearchButton}>
                <GoBackBoldJs/>
            </View>
        </TouchableOpacity>
    )
}
const SearchButtonComponent = () => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('SearchPage')}>
            <View style={styles.goBackSearchButton}>
                <SearchBoldJs/>
            </View>
        </TouchableOpacity>
    )
}
const ButtonComponents = ({text, route}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(`${route}`)}>
            {/*<View style={styles.container}>*/}
                <Text style={styles.buttonText}>
                    {text}
                </Text>
            {/*</View>*/}
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        height: wp(10),
        backgroundColor: '#F5F5F5',
        borderRadius: wp(2),
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp(2)
    },
    goBackSearchButton: {
        width: wp(10),
        height: wp(10),
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: wp(2)
    },
    buttonText: {
        // paddingTop: wp(4),
        // paddingBottom: wp(4),
        // paddingLeft: wp(3),
        // paddingRight: wp(3),
        fontSize: config.fontMedium,
        fontFamily: config.familyBold,
        lineHeight: config.lineMedium
    }
})

export {
    ButtonComponents,
    GoBackComponent,
    SearchButtonComponent
}
