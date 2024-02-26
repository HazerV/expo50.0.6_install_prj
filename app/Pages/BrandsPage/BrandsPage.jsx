import React from "react";
import {View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity} from "react-native";
import CategoryHeader from "../../Components/PageComponents/Header/CategoryHeader/CategoryHeader";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../config";
import BrandHeader from "../../Components/PageComponents/Header/BrandHeader/BrandHeader";
import BrandBlock from "../../Components/PageComponents/SearchBrandComponents/BrandBlock";
const BrandsPage = () => {
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}
                        style={{height: '100%', backgroundColor: 'white'}}>
                <BrandHeader text={'Бренды'}/>
                <View style={styles.container}>
                    <TouchableOpacity><View style={styles.letterBlock}><Text style={styles.letterStyle}>A</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.letterBlock}><Text style={styles.letterStyle}>B</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.letterBlock}><Text style={styles.letterStyle}>C</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.letterBlock}><Text style={styles.letterStyle}>D</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.letterBlock}><Text style={styles.letterStyle}>E</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.letterBlock}><Text style={styles.letterStyle}>F</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.letterBlock}><Text style={styles.letterStyle}>G</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.letterBlock}><Text style={styles.letterStyle}>H</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.letterBlock}><Text style={styles.letterStyle}>I</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.letterBlock}><Text style={styles.letterStyle}>J</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.letterBlock}><Text style={styles.letterStyle}>K</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.letterBlock}><Text style={styles.letterStyle}>L</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.letterBlock}><Text style={styles.letterStyle}>M</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.letterBlock}><Text style={styles.letterStyle}>N</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.letterBlock}><Text style={styles.letterStyle}>O</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.letterBlock}><Text style={styles.letterStyle}>P</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.letterBlock}><Text style={styles.letterStyle}>Q</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.letterBlock}><Text style={styles.letterStyle}>R</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.letterBlock}><Text style={styles.letterStyle}>S</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.letterBlock}><Text style={styles.letterStyle}>T</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.letterBlock}><Text style={styles.letterStyle}>U</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.letterBlock}><Text style={styles.letterStyle}>V</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.letterBlock}><Text style={styles.letterStyle}>W</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.letterBlock}><Text style={styles.letterStyle}>X</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.letterBlock}><Text style={styles.letterStyle}>Y</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.letterBlock}><Text style={styles.letterStyle}>Z</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.zeroNine}><Text style={styles.letterStyle}>0-9</Text></View></TouchableOpacity>
                    <TouchableOpacity><View style={styles.zeroNine}><Text style={styles.letterStyle}>А-Я</Text></View></TouchableOpacity>
                    <BrandBlock />
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: wp(2.5),
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: wp(3.3)
    },
    letterBlock: {
        width: wp(13),
        height: wp(12),
        borderWidth: wp(0.5),
        backgroundColor: '#F5F5F5',
        borderColor: '#E1E1E1',
        borderRadius: wp(2),
        alignItems: 'center',
        justifyContent: 'center'
    },
    letterStyle: {
        fontFamily: config.familyBold,
        fontSize: config.fontMedium,
        lineHeight: config.lineMedium
    },
    zeroNine: {
        width: wp(29.5),
        height: wp(12),
        borderWidth: wp(0.5),
        backgroundColor: '#F5F5F5',
        borderColor: '#E1E1E1',
        borderRadius: wp(2),
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default BrandsPage
