import * as React from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';

import LoginForm from './LoginForm';

export default class Login extends React.Component {
    render() {
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
             <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require('../../assets/SnackLogo.png')} 
                />

                <Text style={styles.title}>
                   Made by Emil W. and Oliver L. from CBS university.
                </Text>
             </View>
             <View style={styles.formContainer}>
                 <LoginForm />
            </View>
           </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1abc9c'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#FFF',
        marginTop: 15,
        width: 155,
        textAlign: 'center',
        opacity: 0.8
    }
})