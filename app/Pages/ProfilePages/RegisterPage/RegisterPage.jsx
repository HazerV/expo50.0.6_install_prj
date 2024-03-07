import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import RegistrationForm from "../../../Components/PageComponents/ProfilePageComponents/LoginFirstForm/RegistrationForm";
import {ButtonComponents} from "../../../Components/GoodsComponents/ButtonComponent/ButtonComponents";
import ProfileHeader from "../../../Components/PageComponents/Header/ProfileHeader/ProfileHeader";
import {AuthContext} from "../../../context/Context";
const RegisterPage = () => {
    const {setCurrentForm} = React.useContext(AuthContext)
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
        justifyContent: 'center',
        paddingBottom: wp(10)
    }
})
export default RegisterPage
