import React, {useContext} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../../../config";
import ButtonAccentColor from "../ButtonsProfile/ButtonAccentColor/ButtonAccentColor";
import {AuthContext} from "../../../../context/Context";
const LoginFirstForm = () => {
    const {currentForm, setCurrentForm} = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <Text style={styles.headText}>
                Вход
            </Text>
            <View>
                <View style={{paddingBottom: wp(4)}}>
                    <Text style={styles.textTopInput}>
                        Email или телефон
                    </Text>
                    <TextInput style={styles.textInput}/>
                </View>
                <View style={{paddingBottom: wp(6)}}>
                    <Text style={styles.textTopInput}>
                        Пароль
                    </Text>
                    <TextInput style={styles.textInput} />
                </View>
            </View>
            <TouchableOpacity onPress={() => setCurrentForm(1)}>
                <ButtonAccentColor text={'Войти'} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: wp(80),
        borderRadius: wp(2),
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp(4)
    },
    headText: {
        paddingBottom: wp(4),
        fontSize: config.fontLarge,
        fontFamily: config.familyBold,
        lineHeight: config.lineLarge,
    },
    textTopInput: {
        fontSize: config.fontMedium,
        fontFamily: config.familyRegular,
        lineHeight: config.lineMedium,
        textAlign: 'center',
        paddingBottom: wp(1)
    },
    textInput: {
        height: wp(12),
        borderRadius: wp(2),
        borderColor: '#F5F5F5',
        backgroundColor: 'white',
        width: wp(72)
    },
    textInputSign: {
        height: wp(12),
        borderRadius: wp(2),
        backgroundColor: config.accentColor,
    },

})
export default LoginFirstForm
