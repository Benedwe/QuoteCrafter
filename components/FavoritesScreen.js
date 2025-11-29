import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FavoritesScreen({ onClose }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('favorites').then(s => setItems(s ? JSON.parse(s) : []));
  }, []);

  function remove(index) {
    const next = [...items];
    next.splice(index, 1);
    setItems(next);
    AsyncStorage.setItem('favorites', JSON.stringify(next));
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClose} style={styles.close}><Text style={styles.closeText}>Close</Text></TouchableOpacity>
      {items.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No favorite quotes yet.</Text>
          <Text style={styles.emptySubtext}>Tap the heart icon on any quote to add it to your favorites.</Text>
        </View>
      ) : (
        <FlatList 
          data={items} 
          keyExtractor={(_, i) => String(i)} 
          renderItem={({ item, index }) => (
            <View style={styles.item}>
              <Text style={styles.text}>"{item.text}"</Text>
              <Text style={styles.author}>— {item.author}</Text>
              <TouchableOpacity onPress={() => remove(index)}>
                <Text style={styles.remove}>Remove</Text>
              </TouchableOpacity>
            </View>
          )} 
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  close: { padding: 8 },
  closeText: { color: '#333' },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  emptyText: { fontSize: 18, color: '#666', marginBottom: 10 },
  emptySubtext: { fontSize: 14, color: '#999', textAlign: 'center' },
  item: { marginBottom: 16 },
  text: { fontSize: 16, color: '#111' },
  author: { color: '#555' },
  remove: { color: 'red', marginTop: 8 }
});