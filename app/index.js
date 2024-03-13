import {useCallback, useEffect, useState} from "react";
import Navigation from "./routes/Navigation";
import {Context} from "./context/Context";
import * as SplashScreen from 'expo-splash-screen'
import * as Font from "expo-font";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {NewAddressContexts} from "./context/AddressContext";
import {NewCustomersContext} from "./context/CustomersContext";
import {HomePageContext} from "./context/HomePageContext";
import {ModalContexts} from "./context/ModalContexts";

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
            useFonts()
            await new Promise((res) => setTimeout(res, 2000))
        } catch (e) {
            console.warn(e)
        } finally {
            setIsReady(true)
        }
    }

    useEffect(() => {
        prepare()
    }, []);
    const onLayoutRootView = useCallback(async () => {
        if (isReady) {
            await SplashScreen.hideAsync()
        }
    }, [isReady])
    if (!isReady) {
        return null
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

