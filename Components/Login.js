import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import SignUp from './SignUp';
import styles from '../AppStyles';
import { Card, Button, TextInput } from 'react-native-paper';

const Login = ({ handleSignUpReq  }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Kirjautuminen onnistui
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <View style={styles.container}>
                <Card style={styles.loginCardContainer}>
                    <Card.Title 
                        title="Login"
                        titleVariant='titleLarge'
                    />
                    <TextInput
                        mode={'flat'}
                        keyboardType='text'
                        placeholder='Email'
                        style={styles.loginTextInputFormDetails}
                        underlineColor="gray"
                        activeUnderlineColor="black"
                        value={email}
                        onChangeText={email => setEmail(email)}
                    />
                    <TextInput
                        mode={'flat'}
                        keyboardType='text'
                        placeholder='Password'
                        style={styles.loginTextInputFormDetails}
                        underlineColor="gray"
                        activeUnderlineColor="black"
                        value={password}
                        onChangeText={password => setPassword(password)}
                        secureTextEntry
                    />

                    <Button
                        style={styles.button}
                        mode='contained'
                        buttonColor="gray"
                        textColor="black" 
                        onPress={handleLogin}
                    >Login</Button>

                    <Button 
                        style={styles.button}
                        mode='contained'
                        buttonColor="gray"
                        textColor="black" 
                        onPress={handleSignUpReq}
                    >SignUp</Button>

                    {error ? <Text>{error}</Text> : null}
                </Card>
        </View>

        
    );
};

export default Login;