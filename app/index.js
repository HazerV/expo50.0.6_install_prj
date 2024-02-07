import { StyleSheet, Text, View } from "react-native";
import Navigation from "./routes/navigation";
import {useLoadedNavigation} from "expo-router/build/link/useLoadedNavigation";
import useFonts from "../assets/fonts/fonts";
import {useCallback, useContext, useEffect, useState} from "react";
import navigation from "./routes/navigation";
import {Context, PageContext} from "./context/Context";
import * as SplashScreen from 'expo-splash-screen'

export default function Page() {

  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    async function prepare () {
      try {
        await useFonts()
        await new Promise (res => setTimeout(res, 200))
      } catch (e) {
        console.warn(e)
      } finally {
        setIsReady(true)
      }
    }
    prepare()
  }, []);


  const onLayoutView = useCallback(async () => {
    if (!isReady) {
      await SplashScreen.hideAsync()
    }
  }, [isReady])
  if (!isReady) {
    return null
  }


    return (
        <Context>
          <Navigation />
        </Context>
    )

}

