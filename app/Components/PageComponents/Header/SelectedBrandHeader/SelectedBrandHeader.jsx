import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {config} from "../../../../config";
import GoBackBlackJs from "../../../../../assets/icons/GoBack/GoBackBlackJs";
import HeartBlackJS from "../../../../../assets/icons/ProductPage/HeartBlackJS";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {useNavigation} from "expo-router";
const SelectedBrandHeader = ({name}) => {
    const navigation = useNavigation()
    const [like, setLike] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.align}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={styles.button}>
                        <GoBackBlackJs />
                    </View>
                </TouchableOpacity>
                <Text style={styles.nameBrand}>
                    {name}
                </Text>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <HeartBlackJS />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center'
    },
    align: {
        width: wp(100),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        alignContent: 'center',
        paddingTop: wp(12),
        paddingBottom: 12,
    },
    nameBrand: {
        fontSize: config.fontLarge,
        fontFamily: config.familyBold,
        lineHeight: config.lineLarge
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: wp(10),
        height: wp(10),
        borderRadius: 2,
        backgroundColor: '#F5F5F5'
    }
})
export default SelectedBrandHeader
