import React from "react";
import {View, Image, Text, StyleSheet, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../../../config";

const BrandParfumeBlock = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image
                    style={styles.imageStyle}
                    source={{
                        uri: 'https://s3-alpha-sig.figma.com/img/0cb3/b5e0/ee15ee7b83abb8828c53587148db704d?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ifbS3AY2vSGmHjXLh9JH9gKWBMTV9bOQQ3sZSPXjzh0uebBLkArEnMs6KMgomr2UfoPZnxWhMYGlK64xJj1YvVFF7xF-Hi0TWu25KIysF2yMWpcz0bGGC2IZdEWOKKH1UutcmyO5v8G5wUWyWKCpcgCWXA1mDUNJvoF1KWZFJlWY~R8vK-FDeIh7O2zDq~36CXRTEhN3GmysLSVlSKMWPar76OBfQcNdmmVsDpHT5VPo~NXBSwpZSsJ4xaSKGsH-v5OtNw47l5Hc537~Gd8Ovk79SZKg6uTrM8pM0dU~y2ESbr5ENr2XaERN8PuqQ82nrRXbsdQsksJKcNgmiA8eJw__',
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
