import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
//screens
import {loginView, signupView} from '../screens/Auth';

export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  const navigationOptions: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
  };
  return (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen component={loginView} name="Login" />
      <Stack.Screen component={signupView} name="SignUp" />
    </Stack.Navigator>
  );
};

export default AuthStack;