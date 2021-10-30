import React from 'react';
import {
    View,
    Text,
    TouchableOpacity

} from 'react-native';
import {COLORS} from '../constants'

const Login = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('RootHome')}>
                <Text style={{color: COLORS.lightLime}}>Login Page</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login;