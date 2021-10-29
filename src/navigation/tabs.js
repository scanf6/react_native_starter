import React from "react";
import {
    View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Home } from "../screens";

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                borderTopColor: 'transparent',
                elevation: 0,
                height: 80,
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
            }
        }}>
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Search"
                component={Home}
            />
            <Tab.Screen
                name="Bookmark"
                component={Home}
            />
            <Tab.Screen
                name="Settings"
                component={Home}
            />
        </Tab.Navigator>
    )
}

export default Tabs;