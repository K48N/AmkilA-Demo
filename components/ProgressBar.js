// src/components/ProgressBar.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../styles/global';

export default function ProgressBar({ progress }) {
  return (
    <View style={styles.container}>
      <View style={[styles.fill, { width: `${progress}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 6,
    backgroundColor: '#444',
    borderRadius: 3,
    marginBottom: 10,
  },
  fill: {
    height: '100%',
    backgroundColor: colors.accent,
    borderRadius: 3,
  },
});
