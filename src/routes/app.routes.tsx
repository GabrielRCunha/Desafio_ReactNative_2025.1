import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Management } from "../screens/Management";
import { ProductView } from "../screens/ProductView";
import { Home } from "../screens/HomeScreen";
import { ContactScreen } from "../screens/ContactScreen";
import { Login } from "../screens/Login";
import { BottomTabBar, useBottomTabBarHeight } from "@react-navigation/bottom-tabs";


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator initialRouteName="home" screenOptions={{headerShown: false} }>
            <Screen
            name="home"
            component={Home}/>
            
             <Screen
                name="product"
                component={ProductView}
            />
            
        </Navigator>
    )
}

 