import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';


export default class Login extends Component {
    constructor(props) {
        super(props);
        console.log('Hello');
        console.log(props);
    }
    onPress() {
        this.props.navigator.push({
            id: 'IntroTimer'
});
}
    render() {
        return (
            <KeyboardAvoidingView behavior = 'padding' keyboardVerticalOffset={-220} style = {styles.container}>

                <View style = {styles.logoContainer}>
                    <Image 
                    style = {styles.logo}
                    source = {require('../../images/coaches.png')}
                     />
                     <Text style = {styles.slogan}>Your Focus Coach Using React Native!</Text>

                </View>
                <View style = {styles.login}>
                    <View style = {styles.container1}>
            <StatusBar
            barStyle = 'light-content'
            />
            <TextInput 
            style = {styles.form}
            placeholder = 'Username'
            placeholderTextColor = '#e5e5e5'
            autoCapitalize = 'none'
            underlineColorAndroid='rgba(0,0,0,0)'
        />
        <TextInput 
            style = {styles.form}
            placeholder = 'Password'
            placeholderTextColor = '#e5e5e5'
            autoCapitalize = 'none'
            secureTextEntry = {true}
            underlineColorAndroid='rgba(0,0,0,0)'
        />
         <View style = {styles.buttonConatainer}>
            <TouchableOpacity onPress={() => {this.onPress()}}>
             <View style = {styles.buttonWrapper}>
                 <Text style = {styles.buttonText}>Login</Text>
            </View>

        </TouchableOpacity>


         </View>
         
        </View>
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
        fontFamily: 'sans-serif-thin',
        fontSize: 16,

    },
    form: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#ffffff',
        margin: 10,
        padding: 10,
        textAlign: 'center',
        borderRadius: 20,
        fontFamily: 'sans-serif-thin',
        
    },
    container1: {
        flex: 1,
    },
    buttonConatainer: {
        alignItems: 'center',
    },
    buttonWrapper: {
        width: 150,
        height: 50,
        margin: 10,
        backgroundColor: '#338ac5',
        borderRadius: 100/2,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText: {
        fontSize: 19,
        color: '#ffffff',
        fontFamily: 'sans-serif-thin',
    }
});

AppRegistry.registerComponent('Login', () => Login);