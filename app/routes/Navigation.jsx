import React, {useContext} from "react";
import NavigationContainer from "expo-router/build/fork/NavigationContainer.native";
import {PageContext} from "../context/Context";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import routes from './index'

const Stack = createNativeStackNavigator()
import {useNavigationContainerRef} from "@react-navigation/native";

const Navigation = () => {
    const {route, setRoute} = useContext(PageContext)
    const navigationRef = useNavigationContainerRef()
    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => setRoute(navigationRef.getCurrentRoute().name)}
            onStateChange={async () => {
                const previousRouteName = route
                const currentRouteName = navigationRef.getCurrentRoute().name
                if (previousRouteName !== currentRouteName) {
                    setRoute(currentRouteName)
                }
            }}
            independent={true}
        >
            <Stack.Navigator>
                {
                    Object.keys(routes).map((name) => (
                        <Stack.Screen
                            name={name}
                            component={routes[name]}
                            options={{
                                navigationBarHidden: true,
                                headerShown: false
                            }}
                        />
                    ))
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
