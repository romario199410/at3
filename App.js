import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert, Button, Image, SafeAreaView, StyleSheet, TextInput, Text, View } from 'react-native';

export default function App() {
  return (
   
<Button
  title='CONFIRMAR'
  onPress={() =>
    Alert.alert('Duas opções', 'escolha sim ou não', [
     { text: 'SIM', onPress: () => console.log('YES')},
     { text: 'NÃO', onPress: ()=> console.log('NOT')},
    ]  )
  } 
/>

