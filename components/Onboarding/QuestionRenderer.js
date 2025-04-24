import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function QuestionRenderer({ question, value, onSelectOption }) {
  return (
    <View style={styles.optionsWrap}>
      {question.options.map((opt) => (
        <TouchableOpacity
          key={opt}
          style={[styles.optionButton, value === opt && styles.selected]}
          onPress={() => onSelectOption(opt)}
        >
          <Text style={[styles.optionText, value === opt && styles.selectedText]}>
            {opt}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  optionsWrap: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  optionButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 8,
    width: '100%',
  },
  selected: {
    backgroundColor: '#4CAF50',
  },
  optionText: {
    color: '#222',
    fontSize: 16,
    textAlign: 'center',
  },
  selectedText: {
    color: '#fff',
    fontWeight: '600',
  },
});
