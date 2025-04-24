import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ConfirmationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>🎉 Account created!</Text>
      <Text style={styles.sub}>You're ready to explore Akyliam.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  message: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },
  sub: {
    fontSize: 16,
    color: '#aaa',
  },
});
