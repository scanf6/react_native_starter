import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS } from '../constants';

const CustomButton = ({textButton, colors, buttonStyles, onPress}) => {
    if(colors) {
        return (
            <LinearGradient style={buttonStyles} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={colors}>
                <TouchableOpacity
                onPress={onPress}
                style={{...styles.button, ...buttonStyles}}>
                    <Text style={styles.buttonText}>{textButton}</Text>
                </TouchableOpacity>
            </LinearGradient>)
    } else {
        return (
            <TouchableOpacity
            onPress={onPress}
            style={{...styles.button, ...buttonStyles}}>
                <Text style={styles.buttonText}>{textButton}</Text>
            </TouchableOpacity>)
    }
}

const styles = StyleSheet.create({
    gradient: {
        borderRadius: 12,
    },
    button: {
        paddingVertical: 12,
        borderWidth: 1
    },

    buttonText: {
        color: COLORS.white,
        ...FONTS.h2,
        textAlign: 'center'
    }
})

export default CustomButton;