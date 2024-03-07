import React, {Component} from "react";
import {View, StyleSheet, Text, TouchableOpacity, TextInput} from "react-native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../../../config";
import ButtonAccentColor from "../ButtonsProfile/ButtonAccentColor/ButtonAccentColor";
import UnderlineRouteText from "../../../GoodsComponents/UnderlineRouteText/UnderlineRouteText";

class RegistrationForm extends Component {
    state = {
        name: '',
        lastname: '',
        middlename: '',
        number: '',
        email: '',
        password: '',
        checkPassword: ''
    };
    handleName = (text) => {
        this.setState({name: text})
    };
    handleLastname = (text) => {
        this.setState({lastname: text})
    };
    handleMiddlename = (text) => {
        this.setState({middlename: text})
    };
    handleNumber = (text) => {
        this.setState({number: text})
    };
    handleEmail = (text) => {
        this.setState({email: text})
    };
    handlePassword = (text) => {
        this.setState({password: text})
    };
    handleCheckPassword = (text) => {
        this.setState({checkPassword: text})
    };
    checkLogin = (name, password, number) => {
        alert(name + ' ' + password + ' ' + number)
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textHead}>
                    Регистрация
                </Text>
                <View>
                    <View style={{paddingBottom: wp(4)}}>
                        <Text style={styles.textTop}>Имя</Text>
                        <TextInput
                            onChangeText={this.handleName}
                            accessibilityLabel={'name'}
                            autoComplete={'name'}
                            style={styles.inputFormsBlock}/>
                    </View>
                    <View style={{paddingBottom: wp(4)}}>
                        <Text style={styles.textTop}>Фамилия</Text>
                        <TextInput
                            onChangeText={this.handleLastname}
                            style={styles.inputFormsBlock}/>
                    </View>
                    <View style={{paddingBottom: wp(4)}}>
                        <Text style={styles.textTop}>Отчество</Text>
                        <TextInput
                            onChangeText={this.handleMiddlename}
                            style={styles.inputFormsBlock}/>
                    </View>
                    <View style={{paddingBottom: wp(4)}}>
                        <Text style={styles.textTop}>Телефон</Text>
                        <TextInput
                            onChangeText={this.handleNumber}
                            keyboardType={'number-pad'}
                            style={styles.inputFormsBlock}/>
                    </View>
                    <View style={{paddingBottom: wp(4)}}>
                        <Text style={styles.textTop}>Email</Text>
                        <TextInput
                            onChangeText={this.handleEmail}
                            keyboardType={'email-address'}
                            style={styles.inputFormsBlock}/>
                    </View>
                    <View style={{paddingBottom: wp(4)}}>
                        <Text style={styles.textTop}>Пароль</Text>
                        <TextInput
                            onChangeText={this.handlePassword}
                            secureTextEntry={true}
                            style={styles.inputFormsBlock}/>
                    </View>
                    <View style={{paddingBottom: wp(4)}}>
                        <Text style={styles.textTop}>Подтвердите пароль</Text>
                        <TextInput
                            onChangeText={this.handleCheckPassword}
                            secureTextEntry={true}
                            style={styles.inputFormsBlock}/>
                    </View>
                </View>
                <View style={{alignItems: 'center', flexDirection: 'column', rowGap: wp(4)}}>
                    <TouchableOpacity onPress={() => {
                        this.checkLogin(this.state.name, this.state.password, this.state.number)
                    }}>
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
}

export default RegistrationForm

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
