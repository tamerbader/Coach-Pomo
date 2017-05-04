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
                    source = {require('../../images/coach2.png')}
                     />
                     <Text style = {styles.slogan}>Your Focus Coach Using React Native!</Text>

                </View>
                <View style = {styles.login}>
                    <View style = {styles.container1}>
            <StatusBar
            barStyle = 'light-content'
            />

         <View style = {styles.buttonConatainer}>


            <View style = {styles.signUp} >
                <TouchableOpacity onPress={() => {this.onPress()}}>
                    <View style = {styles.buttonWrappersign}>
                        <Text style = {styles.buttonTextsign}>Sign Up</Text>
                    </View>

                </TouchableOpacity>
            </View>

            <View style={styles.logIn}>
                <TouchableOpacity onPress={() => {this.onPress()}}>
                <View style = {styles.buttonWrapperlogin}>
                    <Text style = {styles.buttonTextlogin}>Login</Text>
                </View>

                </TouchableOpacity>
            </View>


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
        backgroundColor: '#2abf88',

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
        fontSize: 18,

    },
    signUp: {
        flex:1,
        alignItems:'flex-end',
        justifyContent: 'center'
    },
    logIn: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    form: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#ffffff',
        margin: 10,
        padding: 10,
        textAlign: 'center',
        borderRadius: 20,
        fontFamily: 'Avenir',
        
    },
    container1: {
        flex: 1,
    },
    buttonConatainer: {
        flex: 2,
        flexDirection: 'row',  
    },
    buttonWrappersign: {
        width: 150,
        height: 50,
        margin: 10,
        backgroundColor: '#2abf88',
        borderRadius: 100/2,
        borderColor: '#ffffff',
        borderWidth: 1,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonWrapperlogin: {
        width: 150,
        height: 50,
        margin: 10,
        backgroundColor: '#ffffff',
        borderRadius: 100/2,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonTextsign: {
        fontSize: 21,
        color: '#ffffff',
        fontFamily: 'Avenir',
    },
    buttonTextlogin: {
        fontSize: 21,
        color: '#2abf88',
        fontFamily: 'Avenir',
    }
});

AppRegistry.registerComponent('Login', () => Login);