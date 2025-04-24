import React, { createContext, useContext, useState } from 'react';

const OnboardingContext = createContext();

export const OnboardingProvider = ({ children }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const goNext = () => setStep((prev) => prev + 1);
  const goBack = () => setStep((prev) => Math.max(prev - 1, 0));
  const goToStep = (targetStep) => setStep(targetStep);

  const updateAnswer = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <OnboardingContext.Provider
      value={{
        step,
        answers,
        goNext,
        goBack,
        goToStep,
        updateAnswer,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};
