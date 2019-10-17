import * as React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, } from 'react-native';

export default class LoginForm extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <TextInput 
              placeholder="email"
              placeholderTextColor="#f5f6fa"
              returnKeyType="next"
              //moves down to password field
              onSubmitEditing={() => this.passwordInput.focus()}
              //keyboard with '@'
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
              />

            <TextInput
              placeholder="password"
              placeholderTextColor="#f5f6fa"
              returnKeyType="go"
              secureTextEntry
              style={styles.input}
              //stores in input
              ref={(input) => this.passwordInput = input}
              />

            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>
                    Login
                </Text>
            </TouchableOpacity>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginBottom: 20
    },
    input: {
        height: 45,
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 15
    },
    buttonContainer: {
        backgroundColor: '#16a085',
        paddingVertical: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#f5f6fa',
    }
});