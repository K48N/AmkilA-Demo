import React from 'react';
import { OnboardingProvider } from './context/OnboardingContext';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <OnboardingProvider>
      <AppNavigator />
    </OnboardingProvider>
  );
}
