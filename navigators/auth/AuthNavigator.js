import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/auth/LoginScreen';
import SignUpScreen from '../../screens/auth/SignUpScreen';

const Stack = createStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator initialRouteName={'Login'}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignUpScreen} />
        </Stack.Navigator>
    );
}

export default AuthNavigator;
