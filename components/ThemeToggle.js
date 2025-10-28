import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <TouchableOpacity onPress={onToggle} style={styles.btn}>
      <Text style={styles.text}>{isDark ? 'Light' : 'Dark'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 8
  },
  text: {
    color: '#fff',
    fontWeight: '600'
  }
});
