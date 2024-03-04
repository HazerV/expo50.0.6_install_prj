import React from "react";
import {View, Text, StyleSheet} from "react-native";
import UserFormInfo from "./UserFormInfo";
import EditButton from "./EditButton";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
function UserForm () {
    return (
        <View style={styles.container}>
            <UserFormInfo name={'Александр М'} email={'alexandrm@mail.ru'} phone_number={'+7 900 5553535'}/>
            <EditButton />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        columnGap: wp(3),
        paddingRight: wp(2.5)
    }
})
export default UserForm
