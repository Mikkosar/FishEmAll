import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import SignUp from './SignUp';
import styles from '../AppStyles';
import { Card, Button, TextInput } from 'react-native-paper';
import Login from './Login';

const Authentication = () => {
    const [signUp, setSignUp] = useState(false)
    const [login, setLogin] = useState(true);
    

    const handleSignUpReq = () => {
        setSignUp(!signUp)
        setLogin(!login)
    };

    return (
        <View style={styles.container}>
            {login && (
                <View>
                    <Login handleSignUpReq={handleSignUpReq} />
                </View>
            )}


            {signUp && (
                <View>
                    <SignUp handleSignUpReq={handleSignUpReq}/>
                </View>
            )}  
        </View>

        
    );
};

export default Authentication;