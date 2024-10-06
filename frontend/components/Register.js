import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState(0);

    const navigation = useNavigation();

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/auth/register', {
                username,
                email,
                password,
                age,
            });

            Alert.alert('Registration Successful', `Welcome, ${username}!`);
            navigation.goBack();
        } catch (error) {
            Alert.alert('An error occurred');
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Age"
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
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

export default Register;