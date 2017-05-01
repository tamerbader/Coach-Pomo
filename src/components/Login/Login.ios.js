import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
} from 'react-native';

import LoginForm from './LoginForm'

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior = 'padding' style = {styles.container}>
                <View style = {styles.logoContainer}>
                    <Image 
                    style = {styles.logo}
                    source = {require('../../images/coaches.png')}
                     />
                     <Text style = {styles.slogan}>Your Focus Coach Using React Native!</Text>
                </View>
                <View style = {styles.login}>
                    <LoginForm />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',

    },
    logoContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
    },
    login: {
        flex: 1,
    },
    slogan: {
        color: '#ffffff',
        marginTop: 25,
        fontFamily: 'Avenir',
        fontSize: 16,

    },
});