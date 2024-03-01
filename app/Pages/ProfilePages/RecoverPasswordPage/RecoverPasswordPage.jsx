import React, {useState} from "react";
import {ScrollView, View, StyleSheet} from "react-native";
import ProfileHeader from "../../../Components/PageComponents/Header/ProfileHeader/ProfileHeader";
import RecoverForm
    from "../../../Components/PageComponents/ProfilePageComponents/ButtonsProfile/RecoverPasswordComponents/RecoverForm/RecoverForm";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
const RecoverPasswordPage = () => {
    return (
        <View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <ProfileHeader />
                    <RecoverForm />
                    {/*<View style={styles.bottomButtons}>*/}
                    {/*    <SignInButtons text={'Войти'} />*/}
                    {/*    <SignInButtons text={'Регистрация'} />*/}
                    {/*</View>*/}
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollView: {
        backgroundColor: 'white',
        height: '100%'
    },
    bottomButtons: {
        paddingTop: wp(6),
        flexDirection: 'row',
        columnGap: wp(4)
    }
})
export default RecoverPasswordPage
