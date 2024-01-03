import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigation from './Stack';
const Drawer = createDrawerNavigator();
export default function Navigation() {
  return (
    <Drawer.Navigator
      initialRouteName="InitApp"
      screenOptions={{swipeEnabled: true}}>
      <Drawer.Screen
        name="InitApp"
        component={StackNavigation}
        options={{
            headerShown: false,
            gestureHandlerProps: {enabled: false},
          }}
      />
    
    </Drawer.Navigator>
  );
}