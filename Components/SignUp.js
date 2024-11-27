import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';
import { Card, Button, TextInput } from 'react-native-paper';
import styles from '../AppStyles';

const SignUp = ({ handleSignUpReq }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSuccess('User created successfully!');
            setError('');
        } catch (error) {
            setError(error.message);
            console.log(error.message)
            setSuccess('');
        }
    };

    return (
        <View style={styles.container}>
            <Card style={styles.signUpCardContainer}>
                <Card.Title 
                    title="SignUp"
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
                    onPress={handleSignUp}
                >SignUp</Button>

                <Button
                    style={styles.button}
                    mode='contained'
                    buttonColor="red"
                    textColor="black" 
                    onPress={handleSignUpReq}
                >Cancel</Button>
                {error ? <Text>{error}</Text> : null}
                {success ? <Text>{success}</Text> : null}
            </Card>
        </View>
    );
};

export default SignUp;