import React, {useContext} from "react";
import {useNavigationContainerRef} from "expo-router";
import NavigationContainer from "expo-router/build/fork/NavigationContainer.native";
// import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {PageContext} from "../context/Context";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import routes from './index'

const Stack = createNativeStackNavigator()
const Navigation = () => {
    const {route, setRoute} = useContext(PageContext)
    const navigationRef = useNavigationContainerRef()
    return (
        <NavigationContainer
            independent={true}
            ref={navigationRef}
            onReady={() => {
                setRoute(navigationRef.getCurrentRoute().name)
            }}
            onStateChange={async () => {
                const previousRouteName = route
                const currentRouteName = navigationRef.getCurrentRoute().name
                if (previousRouteName !== currentRouteName) {
                    setRoute(currentRouteName)
                }
            }}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {
                    Object.keys(routes).map((name) => (
                        <Stack.Screen name={name}
                                      component={routes[name]}
                                      options={{
                                          headerShown: false,
                                          navigationBarHidden: true
                                      }}
                        />
                    ))
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
