import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import ProductitemInCategory from "../../../GoodsComponents/ProductItem/ProductItemInCategory";
import {config} from "../../../../config";

const SimilarGoods = ({props}) => {
    const [image, setImage] = useState([])
    useEffect(() => {
        // setImage(props.map((i) => i.images))
        // console.log(image)
        let arra = (props.map((i) => {
            return {
                // ...i,
                images: i.images
            }
        }))
        setImage(arra)
    }, [setImage]);
    console.log('hh', image.map((i) => i.images))
    return (
        <View style={styles.container}>
            <Text style={styles.textHead}>
                Похожие товары
            </Text>
            <ScrollView
                style={{paddingTop: wp(3)}}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.block}>
                    {
                        props.map((i) =>
                            <ProductitemInCategory image={image} firstPrice={i.price_old} price={i.price} quantity={i.quantity} name={i.name}/>
                        )
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: wp(5),
        marginLeft: -wp(2.5)
    },
    block: {
        flexDirection: 'row',
        columnGap: wp(2),
        paddingLeft: wp(2.5)
    },
    textHead: {
        fontSize: config.fontLarge,
        lineHeight: config.lineLarge,
        fontFamily: config.familyBold,
        paddingLeft: wp(2.5)
    }
})
export default SimilarGoods
