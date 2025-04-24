import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Vibration, Image } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import { Audio } from 'expo-av';

export default function ConnectPumpScreen({ navigation, route }) {
  const { returnStep, answers } = route.params;
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const connectDevice = async () => {
      await new Promise(res => setTimeout(res, 3000));
      setShowSuccess(true);

      const { sound } = await Audio.Sound.createAsync(
        require('../assets/audio/success.mp3')
      );
      await sound.playAsync();
      Vibration.vibrate(500);

      setTimeout(() => {
        navigation.navigate('Onboarding', {
          returnStep: returnStep,
          answers,
        });
      }, 1500);
    };
    connectDevice();
  }, []);

  return (
    <Animated.View entering={FadeIn.duration(300)} style={styles.container}>
      {!showSuccess ? (
        <>
          <Text style={styles.text}>Searching for pump device...</Text>
          <LottieView
            source={require('../assets/animations/searching-animation.json')}
            autoPlay
            loop
            style={styles.lottie}
          />
        </>
      ) : (
        <>
          <Image
            source={require('../assets/images/success-icon.png')}
            style={styles.successIcon}
            resizeMode="contain"
          />
          <Text style={styles.successText}>Pump Connected!</Text>
        </>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  lottie: {
    width: 150,
    height: 150,
  },
  successIcon: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  successText: {
    color: '#4CAF50',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
