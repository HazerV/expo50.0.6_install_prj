import React, {useEffect} from "react";
import {View, Text, FlatList, StatusBar, SafeAreaView, ActivityIndicator, StyleSheet} from "react-native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import axios from "../../api/axios";
import {date} from "yup";

const DATA = [
    {
        id: 1,
        title: 'First Item',
    },
    {
        id: 2,
        title: 'Second Item',
    },
    {
        id: 3,
        title: 'Third Item',
    },
    {
        id: 4,
        title: 'Third Item',
    },
    {
        id: 5,
        title: 'Third Item',
    },
    {
        id: 6,
        title: 'Third Item',
    },
];


function TestPage() {
    const [data, setData] = React.useState([])
    useEffect(() => {
        testGet()
            .then((res) => {
                setData(res.data)
            })
    }, [setData]);
    console.log(data)
    async function testGet() {
        await axios.get('/products/getByCategoryId?slug=parfyumeriya')}
    const Item = ({title}) => (
        <View style={styles.item}>
            <Text style={styles.title}>{

            }</Text>
        </View>
    );
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                horizontal={false}
                numColumns={2}
                data={DATA}
                renderItem={({item}) => <Item title={item.title}/>}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        height: wp(30),
        width: wp(30),
        backgroundColor: '#f9c2ff',
        padding: 20,
    },
    title: {
        fontSize: 14,
    },
});
export default TestPage
