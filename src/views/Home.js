import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight, ImageBackground, Button, TextInput } from 'react-native'
import React from 'react'
import logo from '../../assets/Logo.png'
import menu from '../../assets/Menu.png'
import background from '../../assets/background.jpg'
import { storage } from '../utils/asyncStorage'

const Home = ({ navigation }) => {


    return (
        <ImageBackground source={background} style={styles.container}>
            <View style={styles.flexBetween}>
                <TouchableHighlight activeOpacity={0.8} onPress={() => alert('Pressed!')}>
                    <Image source={menu} style={styles.img} />
                </TouchableHighlight>
                <TouchableOpacity activeOpacity={0.5} onPress={() => alert('Pressed!')}>
                    <Image source={logo} style={styles.img} />
                </TouchableOpacity>
            </View>
            <View style={[styles.container, styles.col, styles.center]}>

                <Text style={[styles.textWhite, styles.title]}>Your favorite comic book store</Text>
                <Text style={[styles.textWhite, styles.subtitle]}>From classics to novelties, we have everything you need to immerse yourself in your favorite universes. Explore our catalog and live the adventure of your life.</Text>

                <Button
                    title='Lets go!'
                    color={'#4338CA'}
                    onPress={() => navigation.navigate('Sign In')}
                />

            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        // backgroundColor: 'red',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    flexBetween: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
    },
    img: {
        height: 50,
        objectFit: 'contain'
    },
    col: {
        flexDirection: 'column'
    },
    textWhite: {
        color: 'white'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 64
    },
    title: {
        fontSize: 32,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        letterSpacing: 1.7
    },
    


});

export default Home