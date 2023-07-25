import { Button, StyleSheet, TextInput, View } from 'react-native'
import React, { useEffect } from 'react'
import { storage } from '../utils/asyncStorage'

const SignIn = ({ navigation }) => {
    const [text, onChangeText] = React.useState('Texto por defecto');
    useEffect(()=>{
        (async()=>{
            const texto = await storage.get('texto')
            if(texto != null) onChangeText(texto)

        })()
    },[])
    return (
        <View style={styles.container}>
            <Button
                title='Go Home!'
                color={'#4338CA'}
                onPress={() => navigation.navigate('Home')}
            />

            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="useless placeholder"
            />

            <View style={[styles.flexBetween, { width: '100%', justifyContent: 'space-evenly' }]}>

                <Button
                    title='Guardar'
                    color={'#4338CA'}
                    onPress={async () => {
                        await storage.set('texto', text)
                        alert('Guardado')
                    }}
                />
                <Button
                    title='Leer'
                    color={'#4338CA'}
                    onPress={async () => {
                        const res = await storage.get('texto')
                        alert(res)
                    }}
                />
                <Button
                    title='Eliminar'
                    color={'#4338CA'}
                    onPress={async () => {
                        await storage.delete('texto')
                        // alert(res)
                    }}
                />
            </View>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
        color: 'black',
        backgroundColor: 'white'
    },
    flexBetween: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
    },

})