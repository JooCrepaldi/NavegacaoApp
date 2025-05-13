import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TextInput } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Supremo</Text>

            <View>
                <TextInput style={styles.input}
                    placeholder='email'
                />
            </View>

            <View>
                <TextInput style={styles.input}
                    placeholder='senha'
                    keyboardType='numeric'
                />
            </View>

            <View  >
                <Button
                    title='entrar'
                    color = '#626ca8'
                    
                    onPress={() => navigation.navigate('Home')}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },

    title: {
        fontSize: 25,
    },

    input: {
        width: windowWidth * 0.7,
        height: 40,
        padding: 10,
        backgroundColor: '#c6d0f5',
        borderRadius: 10,
    },


})