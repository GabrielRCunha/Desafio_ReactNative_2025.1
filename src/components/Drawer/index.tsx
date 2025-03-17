import React, { useContext } from 'react';
import {styles} from "./styles"
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { AuthContext } from '@/src/contexts/auth';

const DrawerCustom = (props: any) => {
  const { user } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <Text style={styles.user}>
          {user && user.status === "ATIVO" ? "Gabriel" : ""}
        </Text>
      </View>
      
      <DrawerItemList {...props} />

      <TouchableOpacity 
        onPress={() => alert('Logout')}
        style={styles.logOut}
      >
        <Text style={styles.textLogOut}>Sair</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default DrawerCustom;
