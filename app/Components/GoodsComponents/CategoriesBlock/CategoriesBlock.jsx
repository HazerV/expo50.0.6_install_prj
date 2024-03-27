import React, {useContext, useEffect} from "react";
import {View, StyleSheet, Text, TouchableOpacity, Image, ActivityIndicator} from "react-native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import Parfum from "../../../../assets/images/Parfum.png";
import {config} from "../../../config";
import {useNavigation} from "@react-navigation/native";
import {getMesh} from "../../../api/banners";
import {PageContext} from "../../../context/Context";
import {CategoryContext} from "../../../context/CategoriesContext";
const CategoriesBlock = ({key, img}) => {
    const navigation = useNavigation()
    const {setMeshName} = useContext(CategoryContext)
    const [loading, setLoading] = React.useState(true)
    const [Mesh, SetMesh] = React.useState([])
    useEffect(() => {
        async function getData() {
            const get = await getMesh()
            SetMesh(get)
            setLoading(false)
        }
        getData()
    }, []);
    return (
        <View>
            <Text style={styles.textCommon}>
                Категории
            </Text>
            <View style={styles.categoryBlock}>
                {
                    loading === true ? (
                        <ActivityIndicator color={config.accentColor} size={'large'} style={styles.activityIndicator} />
                    ) : (
                            Mesh.map((item, index,) => (
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate(`CategoryPage`),
                                        setMeshName(item.title)
                                }}>
                                    <Image style={{
                                        width: wp(45.8),
                                        height: wp(45.8),
                                        borderRadius: wp(2)
                                    }} key={index} source={{uri: `${item.image.photo2x}`}}/>
                                </TouchableOpacity>
                            ))
                    )
                }

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    categoryBlock: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: wp(3.05),
        paddingBottom: wp(8.7)
    },
    textCommon: {
        paddingBottom: wp(4.1),
        fontFamily: config.familyBold,
        fontSize: config.fontLarge,
        lineHeight: config.lineLarge
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default CategoriesBlock
