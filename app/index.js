import React, {useCallback, useContext, useEffect, useState} from "react";
import {ActivityIndicator, View, StyleSheet} from "react-native";
import Navigation from "./routes/Navigation";
import {AuthContext, Context} from "./context/Context";
import * as Font from "expo-font";
import {NewAddressContexts} from "./context/AddressContext";
import {CustomerInfoContext, NewCustomersContext} from "./context/CustomersContext";
import {HomePageContext} from "./context/HomePageContext";
import {ModalContexts} from "./context/ModalContexts";
import {CategoriesContext} from "./context/CategoriesContext";
import {GetToken} from "./asyncStorage/StorageFunctions";
import {getCustomer} from "./api/customers";
import {config} from "./config";

export default function Page() {
    const [isReady, setIsReady] = useState(false)
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const [status, setStatus] = React.useState('')
    const useFonts = async () => {
        await (Font.loadAsync({
            'Gilroy-Thin': require('../assets/fonts/Gilroy-Thin.ttf'),
            'Gilroy-Medium': require('../assets/fonts/Gilroy-Medium.ttf'),
            'Gilroy-Regular': require('../assets/fonts/Gilroy-Regular.ttf'),
            'Gilroy-SemiBold': require('../assets/fonts/Gilroy-Semibold.ttf')
        }))
    }

    async function prepare() {
        try {
            const val = await GetToken()
            let _getC = await getCustomer(val)
            await new Promise((res) => setTimeout(res, 3000))
            useFonts()
        } catch (e) {
            console.warn(e)
        } finally {
            setIsReady(true)
        }
    }

    useEffect(() => {
        prepare()
    }, []);
    if (!isReady) {
        return (
            <View>
                <ActivityIndicator style={styles.containerLoad} size='large'/>
            </View>
        )
    }
    return (
        <Context>
            <NewAddressContexts>
                <NewCustomersContext>
                    <HomePageContext>
                        <ModalContexts>
                            <CategoriesContext>
                                <Navigation/>
                            </CategoriesContext>
                        </ModalContexts>
                    </HomePageContext>
                </NewCustomersContext>
            </NewAddressContexts>
        </Context>
    )
}
const styles = StyleSheet.create({
    containerLoad: {
        alignItems: 'center',
        justifyContent: 'center',
        color: config.accentColor,
        flex: 1
    }
})

