import React, {useContext} from "react";
import NavigationContainer from "expo-router/build/fork/NavigationContainer.native";
import {PageContext} from "../context/Context";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import routes from './index'
import InfoPage from "../Pages/InfoPage/InfoPage";
import HomePage from "../Pages/HomePage/HomePage";
import ProductPage from "../Pages/ProductPage/ProductPage";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import BrandsPage from "../Pages/BrandsPage/BrandsPage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import SelectedBrandPage from "../Pages/SelectedBrandPage/SelectedBrandPage";
import ContactsPage from "../Pages/ContactsPage/ContactsPage";
import ProfilePage from "../Pages/ProfilePages/ProfilePage/ProfilePage";
import RegisterPage from "../Pages/ProfilePages/RegisterPage/RegisterPage";
import RecoverPasswordPage from "../Pages/ProfilePages/RecoverPasswordPage/RecoverPasswordPage";
import AdressPage from "../Pages/ProfilePages/AdressPage/AdressPage";
const Stack = createNativeStackNavigator()
const Navigation = () => {

    // const {route, setRoute} = useContext(PageContext)
    // const navigationRef = useNavigationContainerRef()

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name='HomePage' component={HomePage} options={{
                    headerShown: false,
                    navigationBarHidden: true
                }}  />
                <Stack.Screen name='SearchPage' component={SearchPage} options={{
                    headerShown: false,
                    navigationBarHidden: true
                }} />
                <Stack.Screen name='InfoPage' component={InfoPage} options={{
                    headerShown: false,
                    navigationBarHidden: true
                }} />
                <Stack.Screen name='ProductPage' component={ProductPage} options={{
                    headerShown: false,
                    navigationBarHidden: true,
                }} />
                <Stack.Screen name='CategoryPage' component={CategoryPage} options={{
                    headerShown: false,
                    navigationBarHidden: true
                }} />
                <Stack.Screen name='BrandPage' component={BrandsPage} options={{
                    headerShown: false,
                    navigationBarHidden: true
                }} />
                <Stack.Screen name='SelectedBrandPage' component={SelectedBrandPage} options={{
                    headerShown: false,
                    navigationBarHidden: true
                }}  />
                <Stack.Screen name='ContactsPage' component={ContactsPage} options={{
                    headerShown: false,
                    navigationBarHidden: true
                }}  />
                <Stack.Screen name='ProfilePage' component={ProfilePage} options={{
                    headerShown: false,
                    navigationBarHidden: true
                }}  />
                <Stack.Screen name='RegisterPage' component={RegisterPage} options={{
                    headerShown: false,
                    navigationBarHidden: true,
                    stackAnimation: 'none'
                }}  />
                <Stack.Screen name='RecoverPasswordPage' component={RecoverPasswordPage} options={{
                    headerShown: false,
                    navigationBarHidden: true,
                    stackAnimation: 'none'
                }}  />
                <Stack.Screen name='AdressPage' component={AdressPage} options={{
                    headerShown: false,
                    navigationBarHidden: true,
                    stackAnimation: 'none'
                }}  />
            </Stack.Navigator>
        </NavigationContainer>
    )



    // return (
    //     <NavigationContainer
    //         independent={true}
    //         ref={navigationRef}
    //         onReady={() => {
    //             setRoute(navigationRef.getCurrentRoute().name)
    //         }}
    //         onStateChange={async () => {
    //             const previousRouteName = route
    //             const currentRouteName = navigationRef.getCurrentRoute().name
    //             if (previousRouteName !== currentRouteName) {
    //                 setRoute(currentRouteName)
    //             }
    //         }}>
    //         <Stack.Navigator screenOptions={{headerShown: false}}>
    //             {
    //                 Object.keys(routes).map((name) => (
    //                     <Stack.Screen name={name}
    //                                   component={routes[name]}
    //                                   options={{
    //                                       headerShown: false,
    //                                       navigationBarHidden: true
    //                                   }}/>
    //                 ))
    //             }
    //             {/*<Stack.Screen name={'HomePage'}*/}
    //             {/*              component={HomePage}*/}
    //             {/*              options={{*/}
    //             {/*                  headerShown: false,*/}
    //             {/*                  navigationBarHidden: true*/}
    //             {/*              }}/>*/}
    //             {/*<Stack.Screen name={'InfoPage'}*/}
    //             {/*              component={InfoPage}*/}
    //             {/*              options={{*/}
    //             {/*                  headerShown: false,*/}
    //             {/*                  navigationBarHidden: true*/}
    //             {/*              }}/>*/}
    //         </Stack.Navigator>
    //     </NavigationContainer>
    // )
}

export default Navigation
