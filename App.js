import React from 'react';
import { Login } from "./src/screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Tabs from "./src/navigation/tabs";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Login'}
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="RootHome"
                    component={Tabs}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;