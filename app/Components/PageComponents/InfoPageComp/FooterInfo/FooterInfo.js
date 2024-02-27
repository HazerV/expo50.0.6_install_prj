import React from "react";
import {View, StyleSheet} from "react-native";
import NavButtons from "./NavButtons";
import {config} from "../../../../config";
const FooterInfo = () => {

    return (
        <View style={{alignSelf: 'center', justifyContent: 'center' }}>
            <NavButtons text={'Контакты'} route={'ContactsPage'} />
            <NavButtons text={'Оферта'} route={'OfertaPage'}/>
            <NavButtons text={'Пользовательское соглашение'} route={'TermsUse'} />
            <NavButtons text={'Политика конфиденциальности'} route={'ConfidencePage'}/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default FooterInfo
