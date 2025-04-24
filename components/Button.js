// src/components/Button.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, spacing, fonts } from '../styles/global';

export default function Button({ title, onPress, disabled, style }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, disabled && styles.disabled, style]}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.accent,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: spacing.sm,
  },
  label: {
    color: '#fff',
    fontSize: fonts.medium,
    fontWeight: '600',
  },
  disabled: {
    backgroundColor: '#555',
  },
});
