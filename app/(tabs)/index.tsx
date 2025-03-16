import { StatusBar } from "react-native";
import { Home } from "../../src/screens/HomeScreen";
import { useNavigation, useRoute } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RouteProp } from "@react-navigation/native";
import { ProductView } from "@/src/screens/ProductView";
import { Navbar } from "@/src/components/Navbar/Navbar";
import { ContactScreen } from "@/src/screens/ContactScreen";
import { Login } from "@/src/screens/Login";
import { Management } from "@/src/screens/Management";

export default function HomeScreen() {
  return (
    <>
      <Navbar></Navbar>
      <StatusBar 
        barStyle="light-content" 
        translucent={false}
        backgroundColor="black"
      />
      <Management/>
    </>
  );
}