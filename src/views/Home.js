import React from 'react'
import { Button, Image, ImageBackground, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import logo from '../../assets/Logo.png';
import menu from '../../assets/Menu.png';
import background from '../../assets/background.jpg';

const Home = (props) => {
    // console.log(props)
    return (
        <ImageBackground source={background} style={styles.container} >
            <View style={styles.navbar} >
                <TouchableHighlight activeOpacity={0.9} underlayColor={'rgba(0,0,0,0.2)'} onPress={() => props.navigation.toggleDrawer()}  >
                    <Image source={menu} style={styles.imagenLogo} />
                </TouchableHighlight>
                <TouchableOpacity activeOpacity={0.6} onPress={() => alert('Hola')} >
                    <Image source={logo} style={styles.imagenLogo} />
                </TouchableOpacity>
            </View>
            <View style={{ display: 'flex', justifyContent: 'center', flex: 1, gap: 64, paddingHorizontal: 16 }}>
                <Text style={[styles.textWhite, styles.title]}>Your favorite comic book store</Text>
                <Text style={[styles.textWhite, styles.subtitle]}>From classics to novelties, we have everything you need to immerse yourself in your favorite universes. Explore our catalog and live the adventure of your life.</Text>
                <View style={{ display: 'flex', alignItems: 'center' }}>
                    <Button title="Let's Go!!" color={'#4338CA'} onPress={() => props.navigation.navigate('Mangas')} />
                </View>
            </View>
        </ImageBackground>)
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    imagenLogo: {
        height: 60,
        objectFit: 'contain',
    },
    navbar: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    textWhite: {
        color: 'white',
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center'
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
