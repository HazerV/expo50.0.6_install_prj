import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Stack, SplashScreen, Slot } from "expo-router";
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from "react-native-safe-area-context";
import {PageContext} from "./context/Context";
import {Context} from "./context/Context";
// import {
//     Auth,
//     FlashMessageWrapper
// } from "@components";
// import { Provider } from "@store";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
    const [loaded, error] = useFonts({
        'Gilroy-Regular': require('./../assets/fonts/Gilroy-Regular.ttf'),
        'Gilroy-SemiBold': require('./../assets/fonts/Gilroy-Semibold.ttf'),
        'Gilroy-Medium': require('./../assets/fonts/Gilroy-Medium.ttf'),
        'Gilroy-Thin': require('./../assets/fonts/Gilroy-Thin.ttf')
    });
    useEffect(() => {
        if (error) throw error;
    }, [error]);
    if (loaded) {
        SplashScreen.hideAsync();
    }
    if (!loaded) {
        return null;
    }

    return (
            <Context>
                <SafeAreaProvider>
                    <View style={{ flex: 1, }}>
                        <Slot />
                    </View>
                </SafeAreaProvider>
            </Context>

    );
}
