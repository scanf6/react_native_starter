import React from 'react';
import {
    View,
    Text,
    TouchableOpacity

} from 'react-native';

const Login = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('RootHome')}>
                <Text>Login Page</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login;