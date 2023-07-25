import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignIn = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button
                title='Go Home!'
                color={'#4338CA'}
                onPress={() => navigation.navigate('Home')}

            />
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    }
})