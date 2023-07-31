import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Mangas = ({navigation}) => {
  return (
    <View>
      <Text>Manga</Text>
      <Button title="Let's Go!!" color={'#4338CA'} onPress={() => navigation.goBack()} />
    </View>
  )
}

export default Mangas

const styles = StyleSheet.create({})