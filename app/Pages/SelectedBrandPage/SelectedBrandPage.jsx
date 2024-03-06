import React from "react";
import {View, Text, ScrollView, StyleSheet} from "react-native";
import SelectedBrandHeader from "../../Components/PageComponents/Header/SelectedBrandHeader/SelectedBrandHeader";
import {config} from "../../config";

const SelectedBrandPage = ({name}) => {
    return (
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{height: '100%', backgroundColor: 'white'}}>
                <SelectedBrandHeader name={name}/>
                {/*FILTER */}
                <View>

                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {}
})
export default SelectedBrandPage
