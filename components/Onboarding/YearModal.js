// src/components/Onboarding/YearModal.js
import React from 'react';
import { Modal, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function YearModal({ visible, years, selected, setSelected, onConfirm, onClose }) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Select Year</Text>
          <FlatList
            data={years}
            keyExtractor={(i) => i}
            style={{ height: 200 }}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => setSelected(item)}>
                <Text style={[styles.item, item === selected && styles.selected]}>{item}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity style={styles.confirm} onPress={onConfirm} disabled={!selected}>
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
  item: {
    color: '#fff', fontSize: 18, paddingVertical: 6, textAlign: 'center'
  },
  selected: {
    backgroundColor: '#4CAF50', borderRadius: 8, paddingHorizontal: 8
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
