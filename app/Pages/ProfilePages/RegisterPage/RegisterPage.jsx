import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import RegistrationForm from "../../../Components/PageComponents/ProfilePageComponents/LoginFirstForm/RegistrationForm";
import {ButtonComponents} from "../../../Components/GoodsComponents/ButtonComponent/ButtonComponents";
import ProfileHeader from "../../../Components/PageComponents/Header/ProfileHeader/ProfileHeader";
const RegisterPage = () => {
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <ProfileHeader />
                <View style={{paddingBottom: wp(4)}}>
                    <RegistrationForm />
                </View>
                <ButtonComponents text={'Войти'} />
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
        height: '100%',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default RegisterPage
