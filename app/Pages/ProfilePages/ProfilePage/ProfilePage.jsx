import React, {useContext, useState} from "react";
import {View, Text, StyleSheet, ScrollView, Platform, TouchableOpacity} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import ProfileHeader from "../../../Components/PageComponents/Header/ProfileHeader/ProfileHeader";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import LoginFirstForm from "../../../Components/PageComponents/ProfilePageComponents/LoginFirstForm/LoginFirstForm";
import {ButtonComponents} from "../../../Components/GoodsComponents/ButtonComponent/ButtonComponents";
import RegistrationForm from "../../../Components/PageComponents/ProfilePageComponents/LoginFirstForm/RegistrationForm";
import ButtonsInFooter from "../../../Components/PageComponents/Footer/ButtonsInFooter/ButtonsInFooter";
import {AuthContext} from "../../../context/Context";
import {useNavigation, useRoute} from "@react-navigation/native";
import SignInButtons from "../../../Components/PageComponents/ProfilePageComponents/ButtonsProfile/SignInButtons/SignInButtons";
import UnderHeaderSigns from "../../../Components/PageComponents/ProfilePageComponents/ProfilePageComponents/UnderHeaderSigns/UnderHeaderSigns";
import ButtonInProfile
    from "../../../Components/PageComponents/ProfilePageComponents/ProfilePageComponents/UnderHeaderSigns/ButtonInProfile";
import {config} from "../../../config";
const ProfilePage = () => {
    const navigation = useNavigation()
    const {currentForm, setCurrentForm} = useContext(AuthContext)
    console.log(currentForm)
    function HandleState() {
        if (currentForm ===0 ) {
            return (
                <View style={{alignItems: 'center'}}>
                    <LoginFirstForm/>
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={() => navigation.navigate('RecoverPasswordPage')}>
                            <SignInButtons text={'Восстановить пароль'}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('RegisterPage')}>
                            <SignInButtons text={'Регистрация'}/>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        if (currentForm===1) {
            return (
                <View>
                    <UnderHeaderSigns />
                </View>
            )
        }
    }
    return (
        <View>
            <ScrollView style={styles.scrollView}>
                <ProfileHeader/>
                <View>
                    <HandleState />
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <ButtonsInFooter/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
        height: '100%'
    },
    container: {
        paddingLeft: wp(2.5),
        paddingBottom: wp(35),
        justifyContent: 'center',
        // alignItems: 'center',
        // paddingTop: wp(2),
    },
    buttons: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        columnGap: wp(4),
        paddingTop: wp(4),
        paddingBottom: wp(6)
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        left: 0,
        right: 0,
        paddingBottom: wp(5)
    }
})
export default ProfilePage
