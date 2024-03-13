import React, {useEffect, useState} from "react";
import {View, StyleSheet, Text, TouchableOpacity, TextInput, Alert} from "react-native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../../../config";
import ButtonAccentColor from "../ButtonsProfile/ButtonAccentColor/ButtonAccentColor";
import UnderlineRouteText from "../../../GoodsComponents/UnderlineRouteText/UnderlineRouteText";
import {signUp} from "../../../../api/auth";
import {signUpSchema} from "../../../../shemas";
import * as Yup from 'yup'
import {getToken} from "../../../../asyncStorage/StorageFunctions";
import {TokenContext} from "../../../../context/Context";

function RegistrationForm() {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [middlename, setMiddlename] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [success, setSuccess] = useState(false)
    const [errors, setErrors] = useState({})
    const MOBILE_TOKEN = config.MOBILE_TOKEN
    const {token, setToken} = React.useContext(TokenContext)
    const trySignUp = async () => {
        try {
            await signUpSchema.validate({
                name,
                lastname,
                middlename,
                phone,
                email,
                password,
                passwordConfirm
            }, {abortEarly: false})
            setErrors({})
            setSuccess(true)
            if (success === true) {
                await signUp(
                    {
                        name: name,
                        lastname: lastname,
                        middlename: middlename,
                        phone: phone,
                        email: email,
                        password: password,
                        mobile_token: MOBILE_TOKEN
                    })
                    .then((res) => {
                        const tkn = res.data.bearer
                        console.log(res.data)
                        if (res.data.status === 'err') {
                            Alert.alert('Ошибка!', `${res.data.errorMessage}, status: ${res.data.status}`)
                        } else if (res.data.status === 'ok') {
                            getToken(`${tkn}`)
                        }
                    })
            }
        } catch (err) {
            setSuccess(false)
            if (err instanceof Yup.ValidationError) {
                const yupErrors = {}
                err.inner.forEach((innerError) => {
                    yupErrors[innerError.path] = innerError.message
                })
                setErrors(yupErrors)
            }
        }
    }
    console.log(success)
    return (
        <View style={styles.container}>
            <Text style={styles.textHead}>
                Регистрация
            </Text>
            <View>
                <View style={{paddingBottom: wp(4)}}>
                    <Text style={styles.textTop}>Имя</Text>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        accessibilityLabel={'name'}
                        autoComplete={'name'}
                        style={styles.inputFormsBlock}/>
                    {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
                </View>
                <View style={{paddingBottom: wp(4)}}>
                    <Text style={styles.textTop}>Фамилия</Text>
                    <TextInput
                        value={lastname}
                        onChangeText={setLastname}
                        style={styles.inputFormsBlock}/>
                    {errors.lastname && <Text style={styles.errorText}>{errors.lastname}</Text>}
                </View>
                <View style={{paddingBottom: wp(4)}}>
                    <Text style={styles.textTop}>Отчество</Text>
                    <TextInput
                        value={middlename}
                        onChangeText={setMiddlename}
                        style={styles.inputFormsBlock}/>
                    {errors.middlename && <Text style={styles.errorText}>{errors.middlename}</Text>}
                </View>
                <View style={{paddingBottom: wp(4)}}>
                    <Text style={styles.textTop}>Телефон</Text>
                    <TextInput
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType={'number-pad'}
                        style={styles.inputFormsBlock}/>
                    {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}
                </View>
                <View style={{paddingBottom: wp(4)}}>
                    <Text style={styles.textTop}>Email</Text>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        keyboardType={'email-address'}
                        style={styles.inputFormsBlock}/>
                    {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                </View>
                <View style={{paddingBottom: wp(4)}}>
                    <Text style={styles.textTop}>Пароль</Text>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={styles.inputFormsBlock}/>
                    {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
                </View>
                <View style={{paddingBottom: wp(4)}}>
                    <Text style={styles.textTop}>Подтвердите пароль</Text>
                    <TextInput
                        value={passwordConfirm}
                        onChangeText={setPasswordConfirm}
                        secureTextEntry
                        style={styles.inputFormsBlock}/>
                    {errors.passwordConfirm && <Text style={styles.errorText}>{errors.passwordConfirm}</Text>}
                </View>
            </View>
            <View style={{alignItems: 'center', flexDirection: 'column', rowGap: wp(4)}}>
                <TouchableOpacity onPress={trySignUp}>
                    <ButtonAccentColor text={'Зарегистрироваться'}/>
                </TouchableOpacity>
                <Text style={styles.textAccept}>
                    Нажимая на кнопку «Зарегистрироваться» Вы принимаете условия
                </Text>
                <UnderlineRouteText text={'Согласия на обработку персональных данных'} route={'HomePage'}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: wp(80),
        borderRadius: wp(4),
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp(4),
    },
    inputFormsBlock: {
        height: wp(12),
        borderRadius: wp(2),
        borderColor: '#F5F5F5',
        backgroundColor: 'white',
        width: wp(72),
        paddingLeft: wp(2)
    },
    textHead: {
        fontFamily: config.familyBold,
        fontSize: config.fontLarge,
        lineHeight: config.lineLarge,
        paddingBottom: wp(8)
    },
    errorText: {
        fontFamily: config.familyRegular,
        fontSize: config.fontMedium,
        lineHeight: config.lineMedium,
        color: 'red'
    },
    textTop: {
        fontSize: config.fontMedium,
        fontFamily: config.familyRegular,
        lineHeight: config.lineMedium,
        textAlign: 'center',
        paddingBottom: wp(1)
    },
    textAccept: {
        fontSize: config.fontMedium,
        fontFamily: config.familyRegular,
        lineHeight: config.lineMedium,
        textAlign: 'center'
    }
})
export default RegistrationForm

