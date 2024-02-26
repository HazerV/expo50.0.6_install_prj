import React from "react";
import {View, Text, Linking, StyleSheet, Image, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import {config} from "../../../../config";
import GisMap from '../../../../../assets/images/MapBanner/GisMap.png'
import YandexMap from '../../../../../assets/images/MapBanner/YandexMap.png'

const gis_url = 'https://2gis.ru/moscow/firm/70000001057221268?m=37.608623%2C55.762748%2F16.26%2Fr%2F-12.59'
const yandex_url = 'https://yandex.ru/maps/org/polflakona/53188925675/?ll=37.606187%2C55.760688&z=13.88'

const MapBanner = () => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => Linking.openURL(yandex_url)}>
                <Image source={YandexMap}/>
            </TouchableOpacity>
            <View style={styles.textBlock}>
                <Text style={styles.headText}>
                    ТЦ "Империя Мира"
                </Text>
                <Text style={styles.underText}>
                    Москва, ул. Мира, д. 23
                </Text>
            </View>
            <TouchableOpacity onPress={() => Linking.openURL(gis_url)}>
                <Image source={GisMap} />
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: wp(95),
        height: 60,
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    textBlock: {
        flexDirection: 'column'
    },
    headText: {
        fontSize: config.fontMedium,
        lineHeight: config.lineMedium,
        fontFamily: config.familyBold,
        textAlign: 'center'
    },
    underText: {
        fontSize: config.fontMedium,
        lineHeight: config.lineMedium,
        fontFamily: config.familyRegular
    }
})

export default MapBanner
