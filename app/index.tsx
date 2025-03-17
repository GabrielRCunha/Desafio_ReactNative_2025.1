import { StatusBar } from "react-native";
import { Navbar } from "@/src/components/Navbar/Navbar";
import DrawerNavigator from "@/src/navigation/DrawerNavigator.routes";

import AuthProvider from "@/src/contexts/auth";

export default function HomeScreen() {
  
  return (
    <>
      <StatusBar 
        barStyle="light-content" 
        translucent={false}
        backgroundColor="black"
      />
      <AuthProvider><DrawerNavigator/></AuthProvider>
      
    </>
  );
}