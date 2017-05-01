import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Slider
} from 'react-native';


export default class IntroTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden:true,
            visible:false,
        };
    }
    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.promptWrapper}>
                    <Text style = {styles.prompt}> How long do you want to stay productive? </Text>
                </View>
                <View style = {styles.timerContainer}>
                    <View style = {styles.timerWrapper}>
                        <TextInput
                            style = {styles.timer}
                            defaultValue = '01:25:00'
                            editable = {this.state.hidden}
                            placeholderTextColor = '#ffffff'
                            textAlign = 'center'
                            textAlignVerical = 'center'
                         />


                    </View>
                </View>

                <View style = {styles.selector}>
                    <Slider 
                    style = {styles.slider}
                    minimumTrackTintColor = '#ffffff'
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',

    },
    timerContainer: {
        flex:2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',


    },
    selector: {
        flex: 2,
    },
    timer: {
        height: 80,
        color: '#ffffff',
        fontFamily: 'Avenir',
        fontSize: 80,

    },
    timerWrapper: {
        width: 500,
        height: 100,
    },
    promptWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
    },
    prompt: {
        color: '#ffffff',
        fontFamily: 'Avenir',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 30,
    },
    slider: {
        margin: 40,

    }
});