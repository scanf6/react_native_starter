import React from "react";
import {View, Image, StyleSheet} from 'react-native';
import { COLORS } from "../constants";

const TabIcon = ({focused, icon}) => {
    return (
        <View style={styles().iconContainer}>
            <Image style={styles(focused).iconImg} source={icon} resizeMode='contain' />
            {focused && (<View style={styles().activeBorder}/>)}
        </View>
    );
}

const styles = (focused) => StyleSheet.create({
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 80,
    },

    iconImg: {
        width: 30,
        height: 30,
        tintColor: focused ? COLORS.darkGreen : COLORS.lightLime
    },

    activeBorder: {
        borderBottomColor: COLORS.darkGreen,
        borderBottomWidth: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    }
});

export default TabIcon;