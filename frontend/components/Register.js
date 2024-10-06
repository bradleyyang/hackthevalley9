import React, { useState } from 'react';
import { View, Text, TextInput, Stylesheet } from "react-native";

const Register = () => {
    const [text, setText] = useState('');

    return (
        <>
            <TextInput
                placeholder="Username"
                value={text}
                onChangeText={(input) => setText(input)} />

            <Text>You typed: {text}</Text>

        </>
    )
}

export default Register;