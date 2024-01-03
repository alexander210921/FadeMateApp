import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Login from '../Views/Login/Index';
export default function StackNavigation() {
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}