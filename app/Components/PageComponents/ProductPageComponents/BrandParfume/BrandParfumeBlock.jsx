import React from "react";
import {View, Image, Text, StyleSheet, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../../../config";

const BrandParfumeBlock = ({brandUrl}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image
                    style={styles.imageStyle}
                    source={{
                        uri: `${brandUrl}`
                    }}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.blockStyle}>
                    <Text style={styles.textStyle}>
                        Парфюмерия
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.blockStyle}>
                    <Text style={styles.textStyle}>
                        Выборка
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        columnGap: wp(4),
    },
    imageStyle: {
        resizeMode: 'cover',
        width: wp(34),
        height: wp(17),
        borderRadius: wp(4),
        borderColor: '#F5F5F5',
        borderWidth: wp(0.5)
    },
    blockStyle: {
        height: wp(12),
        // padding: 4,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    textStyle: {
        padding: wp(4),
        fontFamily: config.familyRegular,
        fontSize: config.fontMedium,
        lineHeight: config.lineMedium,
        // textAlign: 'center'
    }
})
export default BrandParfumeBlock
