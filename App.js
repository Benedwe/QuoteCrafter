import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Share, Animated, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import quotesData from './assets/quotes.json';
import QuoteCard from './components/QuoteCard';
import ThemeToggle from './components/ThemeToggle';
import CustomQuoteModal from './components/CustomQuoteModal';
import FavoritesScreen from './components/FavoritesScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  const [quote, setQuote] = useState(quotesData[0]);
  const [isDark, setIsDark] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const fade = useRef(new Animated.Value(1)).current;
  

  function randomQuote() {
    const idx = Math.floor(Math.random() * quotesData.length);
    Animated.sequence([
      Animated.timing(fade, { toValue: 0, duration: 200, useNativeDriver: true }),
      Animated.timing(fade, { toValue: 1, duration: 300, useNativeDriver: true })
    ]).start();
    setQuote(quotesData[idx]);
  }

  async function favorite() {
    try {
      const raw = await AsyncStorage.getItem('favorites');
      const arr = raw ? JSON.parse(raw) : [];
      arr.unshift(quote);
      await AsyncStorage.setItem('favorites', JSON.stringify(arr));
    } catch (e) {
      console.warn(e);
    }
  }

  async function share() {
    try {
      await Share.share({ message: `"${quote.text}" — ${quote.author || 'Unknown'}` });
    } catch (e) {
      console.warn(e);
    }
  }

  async function createCustom(q) {
    setQuote(q);
    
  }

  return (
    <LinearGradient colors={isDark ? ['#0f2027', '#203a43'] : ['#e0eafc', '#cfdef3']} style={styles.container}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: isDark ? '#fff' : '#111' }]}>QuoteCrafter</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => setShowFavorites(true)} style={{ marginRight: 12 }}>
              <Text style={{ color: isDark ? '#fff' : '#111' }}>Favorites</Text>
            </TouchableOpacity>
            <ThemeToggle isDark={isDark} onToggle={() => setIsDark(s => !s)} />
          </View>
        </View>

        <Animated.View style={{ opacity: fade, marginTop: 30 }}>
          <QuoteCard quote={quote} onFavorite={favorite} onShare={share} />
        </Animated.View>

        <View style={styles.controls}>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.controlBtn}><Text style={styles.controlText}>Create</Text></TouchableOpacity>
          <TouchableOpacity onPress={randomQuote} style={styles.controlBtn}><Text style={styles.controlText}>Random</Text></TouchableOpacity>
        </View>

        
        <CustomQuoteModal visible={modalVisible} onClose={() => setModalVisible(false)} onCreate={createCustom} />
        {showFavorites && <FavoritesScreen onClose={() => setShowFavorites(false)} />}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safe: { flex: 1, padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: '700' },
  controls: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 },
  controlBtn: { padding: 12, backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 8 },
  controlText: { color: '#fff', fontWeight: '700' },
  
});
