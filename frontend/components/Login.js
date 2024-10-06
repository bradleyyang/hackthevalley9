import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', {
                username,
                password,
            });


            const userResponse = await axios.get(`http://localhost:8080/users/${username}`);
            const userDetails = userResponse.data; 

            navigation.navigate('Home', { userDetails });
            console.log(userDetails);
            
            setUsername('');
            setPassword('');

        } catch (error) {
            Alert.alert('An error occurred', 'Please check your username and password.');
            console.log(error);

            setUsername('');
            setPassword('');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => { navigation.goBack() }}
            >
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#FFF7E7', // Light peach background
    },
    title: {
        fontSize: 30, // Larger title for a playful feel
        marginBottom: 24,
        textAlign: 'center',
        color: '#FF6F61', // Warm coral color
        fontWeight: 'bold',
    },
    input: {
        height: 50,
        borderColor: '#FFB6C1', // Light pink border
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 16,
        backgroundColor: '#FFFFFF', // White background for inputs
    },
    button: {
        backgroundColor: '#FF6F61', // Coral color for button
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.5,
        elevation: 5, // Add some elevation for a raised effect
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 18, // Slightly larger font size for button text
    },
    backButton: {
        backgroundColor: 'lightcoral', // Light red color for back button
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    backButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default Login;