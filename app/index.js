import {useCallback, useContext, useEffect, useState} from "react";
import {ActivityIndicator, View} from "react-native";
import Navigation from "./routes/Navigation";
import {Context} from "./context/Context";
import * as Font from "expo-font";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {NewAddressContexts} from "./context/AddressContext";
import {CustomerInfoContext, NewCustomersContext} from "./context/CustomersContext";
import {HomePageContext} from "./context/HomePageContext";
import {ModalContexts} from "./context/ModalContexts";
import {GetToken} from "./asyncStorage/StorageFunctions";
import {getCustomer} from "./api/customers";
import {config} from "./config";

const Stack = createNativeStackNavigator()
export default function Page() {
    const [isReady, setIsReady] = useState(false)
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
            await getCustomer(val)
            await new Promise((res) => setTimeout(res, 2000))
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
                <ActivityIndicator style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: config.accentColor,
                    flex: 1
                }} size='large'/>
            </View>
        )
    }
    return (
        <Context>
            <NewAddressContexts>
                <NewCustomersContext>
                    <HomePageContext>
                        <ModalContexts>
                            <Navigation/>
                        </ModalContexts>
                    </HomePageContext>
                </NewCustomersContext>
            </NewAddressContexts>
        </Context>
    )
}

