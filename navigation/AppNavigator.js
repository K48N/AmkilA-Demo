import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import ConnectCGMScreen from '../screens/ConnectCGMScreen';
import ConnectPumpScreen from '../screens/ConnectPumpScreen';
import ConnectWearableScreen from '../screens/ConnectWearableScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
        <Stack.Screen name="ConnectCGM" component={ConnectCGMScreen} />
        <Stack.Screen name="ConnectPump" component={ConnectPumpScreen} />
        <Stack.Screen name="ConnectWearable" component={ConnectWearableScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
