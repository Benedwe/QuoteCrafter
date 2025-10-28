import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function QuoteCard({ quote, onFavorite, onShare }) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>"{quote.text}"</Text>
      <Text style={styles.author}>— {quote.author || 'Unknown'}</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={onFavorite} style={styles.button}>
          <Text style={styles.buttonText}>Favorite</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onShare} style={styles.button}>
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.08)'
  },
  text: {
    fontSize: 20,
    marginBottom: 12,
    color: '#fff'
  },
  author: {
    fontSize: 14,
    color: '#ddd',
    marginBottom: 16
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    padding: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600'
  }
});
