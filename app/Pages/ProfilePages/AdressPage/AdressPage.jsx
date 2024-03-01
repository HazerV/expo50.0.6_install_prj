import React from "react";
import {View, StyleSheet, Text, ScrollView, useWindowDimensions, Dimensions} from "react-native";
import ProfileHeader from "../../../Components/PageComponents/Header/ProfileHeader/ProfileHeader";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../../config";
import UnderHeaderSigns
    from "../../../Components/PageComponents/ProfilePageComponents/ProfilePageComponents/UnderHeaderSigns/UnderHeaderSigns";
import AdressForm from "../../../Components/PageComponents/ProfilePageComponents/AdressPageComponents/AdressForm";
import AddAdressButton
    from "../../../Components/PageComponents/ProfilePageComponents/AdressPageComponents/AddAdressButton";
import AddAdressForm
    from "../../../Components/PageComponents/ProfilePageComponents/AdressPageComponents/NewAdrPagComp/AddAdressForm";
import {SceneMap, TabView} from "react-native-tab-view";
import MyAdressesForm
    from "../../../Components/PageComponents/ProfilePageComponents/AdressPageComponents/MyAdressesForm";
const renderScene = SceneMap({
    first: MyAdressesForm,
    second: AddAdressForm
})

function AdressPage() {
    const [index, setIndex] = React.useState(0)
    const [routes] = React.useState([
        {key: 'first', title: 'hhh'},
        {key: 'second', title: 'eee'}
    ])
    const layout = useWindowDimensions()

    return (
        <View>
            <ScrollView style={styles.scrollView}>
                <ProfileHeader/>
                <UnderHeaderSigns/>
                <View style={styles.container}>
                    <TabView
                        navigationState={this.state}
                        renderScene={renderScene}
                        onIndexChange={index => this.setState({ index })}
                        initialLayout={{ width: Dimensions.get('window').width }}
                        style={styles.container}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
        height: '100%'
    },
    container: {
        // paddingLeft: wp(2.5),
        paddingBottom: wp(35),
        alignItems: 'center',
        justifyContent: 'center'
    },
    textHead: {
        fontSize: config.fontLarge,
        fontFamily: config.familyBold,
        lineHeight: config.lineLarge,
        paddingBottom: wp(4)
    }
})
export default AdressPage
