import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Alert, TextInput } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useOnboarding } from '../context/OnboardingContext';
import questions from '../utils/questionList';
import validateAnswer from '../utils/validateAnswer';

import QuestionRenderer from '../components/Onboarding/QuestionRenderer';
import DOBModal from '../components/Onboarding/DOBModal';
import YearModal from '../components/Onboarding/YearModal';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 150 }, (_, i) => (currentYear - i).toString());

export default function OnboardingScreen() {
  const { step, goNext, goBack, goToStep, answers, updateAnswer } = useOnboarding();
  const current = questions[step];

  const navigation = useNavigation();
  const route = useRoute();
  const handledReturnStep = useRef(false);

  const [input, setInput] = useState('');
  const [dobModal, setDobModal] = useState(false);
  const [dob, setDob] = useState({ year: '', month: '', day: '' });
  const [yearModal, setYearModal] = useState(false);
  const [diagnosisYear, setDiagnosisYear] = useState('');

  useEffect(() => {
    if (
      route?.params?.returnStep !== undefined &&
      !handledReturnStep.current
    ) {
      goToStep(route.params.returnStep);
      handledReturnStep.current = true;
      navigation.setParams({ returnStep: undefined });
    }
  }, [route?.params?.returnStep]);

  const handleNext = () => {
    const val =
      current.type === 'dob-custom'
        ? `${dob.year}-${dob.month}-${dob.day}`
        : current.key === 'diagnosed'
        ? diagnosisYear
        : input;

    const error = validateAnswer(current.key, val);
    if (error) return Alert.alert('Validation Error', error);

    updateAnswer(current.key, val);
    setInput('');

    if (current.key === 'cgm_use' && val === 'Yes') {
      navigation.navigate('ConnectCGM', { returnStep: step + 1, answers });
    } else if (current.key === 'insulin_method' && val === 'Pump') {
      navigation.navigate('ConnectPump', { returnStep: step + 1, answers });
    } else if (current.key === 'wearable' && val === 'Yes') {
      navigation.navigate('ConnectWearable', { returnStep: step + 1, answers });
    } else {
      goNext();
    }
  };

  const handleOption = (val) => {
    setInput(val); // store it, wait for 'Next' to be pressed
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <ProgressBar progress={((step + 1) / questions.length) * 100} />
        <Text style={styles.progress}>{`Step ${step + 1} of ${questions.length}`}</Text>
        <Text style={styles.question}>{current.question}</Text>
      </View>

      <View style={styles.middle}>
        {current.type === 'dob-custom' ? (
          <Button
            title={dob.year ? `${dob.year}-${dob.month}-${dob.day}` : 'Select Date of Birth'}
            onPress={() => setDobModal(true)}
          />
        ) : current.type === 'diagnosis-year' ? (
          <Button
            title={diagnosisYear || 'Select Year Diagnosed'}
            onPress={() => setYearModal(true)}
          />
        ) : current.options ? (
          <QuestionRenderer
            question={current}
            value={input}
            onSelectOption={handleOption}
          />
        ) : (
          <TextInput
            style={styles.input}
            placeholder="Type your answer"
            placeholderTextColor="#aaa"
            value={input}
            onChangeText={setInput}
          />
        )}
      </View>

      <View style={styles.navRow}>
        {step > 0 && <Button title="Back" onPress={goBack} />}
        <Button title="Next" onPress={handleNext} />
      </View>

      <DOBModal
        visible={dobModal}
        years={years}
        selected={dob}
        setSelected={setDob}
        onConfirm={() => setDobModal(false)}
        onClose={() => setDobModal(false)}
      />

      <YearModal
        visible={yearModal}
        years={years}
        selected={diagnosisYear}
        setSelected={setDiagnosisYear}
        onConfirm={() => setYearModal(false)}
        onClose={() => setYearModal(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#222', padding: 20 },
  top: { alignItems: 'center', marginTop: 60, marginBottom: 15 },
  progress: { color: '#aaa', fontSize: 16, marginTop: 6 },
  question: { color: '#fff', fontSize: 22, marginTop: 10, marginBottom: 20, textAlign: 'center' },
  middle: { flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' },
  navRow: { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 30, paddingHorizontal: 10 },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    marginTop: 10,
  },
});
