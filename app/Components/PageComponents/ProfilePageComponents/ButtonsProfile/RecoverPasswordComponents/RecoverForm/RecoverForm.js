import React, {useState} from "react";
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../../../../../config";
import ButtonAccentColor from "../../ButtonAccentColor/ButtonAccentColor";
const RecoverForm = () => {
    const [recover, setRecover] = useState(0)
    function HandlerRecover () {
        if (recover===0) {
            return (
                <View style={styles.container}>
                    <Text style={styles.textHead}>
                        Восстановить пароль
                    </Text>
                    <View style={{paddingBottom: wp(6)}}>
                        <Text style={styles.textTopInput}>
                            Email или телефон
                        </Text>
                        <TextInput style={styles.textInput}/>
                    </View>
                    <TouchableOpacity onPress={() => setRecover(1)}>
                        <ButtonAccentColor text={'Начать восстановление'}/>
                    </TouchableOpacity>
                </View>
            )
        }
    }
    if (recover===1) {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.textHead}>
                    Восстановить пароль
                </Text>
                <Text style={styles.textTopInput}>
                    На указанный email отправлено сообщение с ссылкой восстановления пароля.
                    Пожалуйста, перейдите по ссылке, чтобы назначить новый пароль.
                    Старый пароль будет изменен только после назначении нового пароля.
                </Text>
            </View>
        )
    }
    return (
        <HandlerRecover />
    )
}
const styles = StyleSheet.create({
    container: {
        width: wp(80),
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        padding: wp(4),
        borderRadius: wp(4)
    },
    textHead: {
        fontSize: config.fontLarge,
        fontFamily: config.familyBold,
        lineHeight: config.lineLarge,
        textAlign: 'center',
        paddingBottom: wp(8)
    },
    textTopInput: {
        fontSize: config.fontMedium,
        fontFamily: config.familyRegular,
        lineHeight: config.lineMedium,
        textAlign: 'center',
        paddingBottom: wp(2)
    },
    textInput: {
        height: wp(12),
        borderRadius: wp(2),
        borderColor: '#F5F5F5',
        backgroundColor: 'white',
        width: wp(72),
    }
})
export default RecoverForm
