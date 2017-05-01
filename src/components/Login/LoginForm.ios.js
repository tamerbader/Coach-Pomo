import React, { Component } from 'react';
import {
AppRegistry,
StyleSheet,
Text,
View,
TextInput,
Button,
TouchableOpacity,
StatusBar,
Navigator,
} from 'react-native';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden:true,
            visible:false,
        };
    }
render () {
    return (
        
        <View style = {styles.container}>
            <StatusBar
            barStyle = 'light-content'
            />
            <TextInput 
            style = {styles.form}
            placeholder = 'Username'
            placeholderTextColor = '#e5e5e5'
            autoCapitalize = 'none'
        />
        <TextInput 
            style = {styles.form}
            placeholder = 'Password'
            placeholderTextColor = '#e5e5e5'
            autoCapitalize = 'none'
            secureTextEntry = {this.state.hidden}
        />
         <View style = {styles.buttonConatainer}>
            <TouchableOpacity>

             <View style = {styles.buttonWrapper}>
                 <Text style = {styles.buttonText}>Login</Text>
            </View>

        </TouchableOpacity>


         </View>
         
        </View>


    );
}
}

const styles = StyleSheet.create({
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
    container: {
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
        fontFamily: 'Avenir',
    }

});