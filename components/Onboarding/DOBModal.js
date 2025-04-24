// src/components/Onboarding/DOBModal.js
import React from 'react';
import { Modal, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));

export default function DOBModal({ visible, years, selected, setSelected, onConfirm, onClose }) {
  const { year, month, day } = selected;

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Select Date of Birth</Text>
          <View style={styles.row}>
            <FlatList data={years} style={styles.column} keyExtractor={(i) => i}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => setSelected({ ...selected, year: item })}>
                  <Text style={[styles.item, year === item && styles.selected]}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <FlatList data={months} style={styles.column} keyExtractor={(i) => i}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => setSelected({ ...selected, month: item })}>
                  <Text style={[styles.item, month === item && styles.selected]}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <FlatList data={days} style={styles.column} keyExtractor={(i) => i}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => setSelected({ ...selected, day: item })}>
                  <Text style={[styles.item, day === item && styles.selected]}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <TouchableOpacity
            style={styles.confirm}
            onPress={onConfirm}
            disabled={!(year && month && day)}
          >
            <Text style={styles.confirmText}>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center'
  },
  modalContainer: {
    backgroundColor: '#333', borderRadius: 10, padding: 20, width: 260
  },
  title: {
    color: '#fff', fontSize: 18, marginBottom: 10, textAlign: 'center'
  },
  row: {
    flexDirection: 'row', justifyContent: 'space-between'
  },
  column: {
    height: 200, marginHorizontal: 4
  },
  item: {
    color: '#fff', fontSize: 16, paddingVertical: 6, textAlign: 'center'
  },
  selected: {
    backgroundColor: '#4CAF50', borderRadius: 6, paddingHorizontal: 8
  },
  confirm: {
    backgroundColor: '#4CAF50', borderRadius: 8, marginTop: 12, padding: 10, alignItems: 'center'
  },
  confirmText: {
    color: '#fff', fontSize: 16
  },
  closeText: {
    color: '#aaa', textAlign: 'center', marginTop: 10
  }
});
