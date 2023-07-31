import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storage } from '../utils/storage';
import axios from 'axios';

const Mangas = ({ navigation }) => {
  const [inputValue, setInputValue] = useState('')
  const [cursos, setCursos] = useState([])

  const handleSaveData = () => {
    storage.set('inputText3', inputValue)
  }
  const handleReadData = async () => {
    const text = await storage.get(inputValue)
    alert('valor guardado: ' + text);
  }
  const handleTextChange = (text) => {
    setInputValue(text)
  }
  const handleRemoveData = async () => {
    await storage.remove(inputValue)
  }
  const handleClearData = async () => {
    await storage.clear()
  }
  useEffect(() => {
    axios.get('http://10.0.2.2:3000/api/courses')
      .then(res => setCursos(res.data.coursesData))
      .catch(e => console.log(e))
  }, [])
  // console.log(inputValue);
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Mangas</Text>
      <TextInput style={styles.input} onChangeText={handleTextChange} value={inputValue} />
      <Button title="Save" color={'#4338CA'} onPress={handleSaveData} />
      <Button title="Read" color={'#4338CA'} onPress={handleReadData} />
      <Button title="Remove" color={'#4338CA'} onPress={handleRemoveData} />
      <Button title="Clear" color={'#4338CA'} onPress={handleClearData} />
      <FlatList
        data={cursos}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />

    </View>
  )
}

export default Mangas

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  input: {
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderColor: 'rgba(0,0,0,0.5)',
    borderWidth: 1.5,
    borderRadius: 4,
    margin: 16,
    fontSize: 16,
    padding: 4
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})