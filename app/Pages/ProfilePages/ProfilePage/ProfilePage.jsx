import React from "react";
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import ProfileHeader from "../../../Components/PageComponents/Header/ProfileHeader/ProfileHeader";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import LoginFirstForm from "../../../Components/PageComponents/ProfilePageComponents/LoginFirstForm/LoginFirstForm";
import ButtonsInFooter from "../../../Components/PageComponents/Footer/ButtonsInFooter/ButtonsInFooter";
import {AuthContext} from "../../../context/Context";
import {CustomerAddContext} from "../../../context/CustomersContext";
import {useNavigation} from "@react-navigation/native";
import SignInButtons
    from "../../../Components/PageComponents/ProfilePageComponents/ButtonsProfile/SignInButtons/SignInButtons";
import UnderHeaderSigns
    from "../../../Components/PageComponents/ProfilePageComponents/ProfilePageComponents/UnderHeaderSigns/UnderHeaderSigns";
import UserForm from "../../../Components/CustomersComponents/ProfileComponents/UserForm/UserForm";
import ActiveOrdersForm
    from "../../../Components/CustomersComponents/ProfileComponents/ActiveOrdersForm/ActiveOrdersForm";
import ExitButton from "../../../Components/CustomersComponents/ProfileComponents/ExitButton/ExitButton";
import EditCustomerForm from "../../../Components/CustomersComponents/ProfileComponents/EditCustomer/EditCustomerForm";
import HideWithKeyboard from "react-native-hide-with-keyboard";

const ProfilePage = () => {
    const navigation = useNavigation()
    const {isAuth} = React.useContext(AuthContext)
    const {customer} = React.useContext(CustomerAddContext)
    const DefaultUserTab = () => {
        return (
            <View style={{rowGap: wp(3)}}>
                <UserForm/>
                <ActiveOrdersForm/>
                <ExitButton/>
            </View>
        )
    }
    function HandleState() {
        if (isAuth === false) {
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
        if (isAuth === true) {
            return (
                <View>
                    <UnderHeaderSigns/>
                    <View style={[styles.container, {rowGap: wp(3)}]}>
                        {customer === 1 && <DefaultUserTab/>}
                        {customer === 0 && <EditCustomerForm/>}
                    </View>
                </View>
            )
        }
    }
    return (
        <View>
            <ScrollView style={styles.scrollView}>
                <ProfileHeader/>
                <View>
                    <HandleState/>
                </View>
            </ScrollView>
            <HideWithKeyboard>
                <View style={styles.footer}>
                    <ButtonsInFooter/>
                </View>
            </HideWithKeyboard>
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
        justifyContent: 'center',
        alignItems: 'center',
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
