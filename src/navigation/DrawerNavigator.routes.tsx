import React, {useContext} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '../screens/HomeScreen';
import  DrawerCustom  from '../components/Drawer';
import { ContactScreen } from '../screens/ContactScreen';
import { Management } from '../screens/Management';
import { Login } from '../screens/Login';
import { AuthContext } from "@/src/contexts/auth";


const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){
    return(
            <Drawer.Navigator
                drawerContent={(props) => <DrawerCustom {...props}/>}
                screenOptions={{headerShown: false}}>
                    <Drawer.Screen
                        name='home'
                        component={Home}
                    />
                    <Drawer.Screen
                        name='contact'
                        component={ContactScreen}
                    />
                    <Drawer.Screen
                        name='management'
                        component={Management}
                    />
                    <Drawer.Screen
                    name="login"
                    component={Login}
                    />
                </Drawer.Navigator>
    )
}