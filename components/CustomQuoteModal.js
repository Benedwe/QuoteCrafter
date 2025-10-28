import React, { useState } from 'react';
import { Modal, View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function CustomQuoteModal({ visible, onClose, onCreate }) {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  function submit() {
    if (!text.trim()) return;
    onCreate({ text: text.trim(), author: author.trim() || 'You' });
    setText('');
    setAuthor('');
    onClose();
  }

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.backdrop}>
        <View style={styles.sheet}>
          <Text style={styles.title}>Create Custom Quote</Text>
          <TextInput placeholder="Quote" value={text} onChangeText={setText} style={styles.input} />
          <TextInput placeholder="Author (optional)" value={author} onChangeText={setAuthor} style={styles.input} />
          <View style={styles.row}>
            <Button title="Cancel" onPress={onClose} />
            <Button title="Create" onPress={submit} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.4)' },
  sheet: { backgroundColor: '#fff', padding: 20, borderTopLeftRadius: 12, borderTopRightRadius: 12 },
  title: { fontSize: 18, fontWeight: '600', marginBottom: 12 },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 10, borderRadius: 8, marginBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between' }
});
