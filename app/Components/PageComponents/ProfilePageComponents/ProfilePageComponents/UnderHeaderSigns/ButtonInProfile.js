import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {useRoute, useNavigation} from "@react-navigation/native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../../../../config";
const ButtonInProfile = ({text, route, bgButtonColor, textColor}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate(`${route}`)}>
            <View style={[styles.container, {
                backgroundColor: bgButtonColor
            }]}>
                <Text style={[styles.text, {
                    color: textColor
                }]}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        height: wp(10),
        borderRadius: wp(2),
        padding: wp(2),
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: config.fontLarge,
        fontFamily: config.familyBold,
        lineHeight: config.lineLarge,
    }
})
export default ButtonInProfile
