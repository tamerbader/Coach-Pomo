import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Slider,
  Button,
  TouchableOpacity,
} from 'react-native';


export default class IntroTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultValue:25,
            rawTime: 1500,
            value:'0 Hr : 25 Min',
            minimumValue: 0,
            maximumValue: 300,
            step: 5,
            hidden:true,
            visible:false,
        };
    }

    _updateTime(value) {
        var hours = 0;
        var minutes = 0;
        var seconds = 0;

        hours  = Math.floor(value/60);
        minutes = Math.floor((value - (hours*60)));
        var time = hours + " Hr : " + minutes + " Min";
        var realTime = value*60;
        this.setState({rawTime: (value*60)});
        this.setState({value: time});
    }

    onPress = () => {
    this.props.navigator.push({
        id: 'Timer',
        time: this.state.rawTime,
    });
};


    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.logoContainer}>
                <Image
                style = {styles.logo}
                source = {require('../../images/coach2.png')}

                />
                </View>
                <View style = {styles.promptWrapper}>
                    <Text style = {styles.prompt}> How long do you want to stay productive? </Text>
                </View>
                <View style = {styles.timerContainer}>
                    <View style = {styles.timerWrapper}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            style = {styles.timer}
                            defaultValue = {"" + this.state.value}
                            editable = {this.state.hidden}
                            placeholderTextColor = '#ffffff'
                            textAlign = 'center'
                            textAlignVerical = 'center'
                         />


                    </View>
                </View>

                <View style = {styles.selector}>
                    <Slider
                    value = {this.state.defaultValue}
                    style = {styles.slider}
                    thumbTintColor = '#ffffff'
                    minimumTrackTintColor = '#ffffff'
                    maximumTrackTintColor = '#ffffff'
                    minimumValue = {this.state.minimumValue}
                    maximumValue = {this.state.maximumValue}
                    step = {this.state.step}
                    onValueChange={(value) => this._updateTime(value)}
                    />
                    <View style = {styles.buttonConatainer}>
            <TouchableOpacity onPress={() => {this.onPress()}}>
             <View style = {styles.buttonWrapper}>
                 <Text style = {styles.buttonText}>Continue</Text>
            </View>

        </TouchableOpacity>


         </View>
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
        fontSize: 50,

    },
    timerWrapper: {
        width: 500,
        height: 100,
    },
    promptWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    prompt: {
        color: '#ffffff',
        fontFamily: 'Avenir',
        fontSize: 18,
        textAlign: 'center',
        margin: 30,
    },
    slider: {
        margin: 40,

    },
    logo: {
        width: 100,
        height: 100,


    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
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
        fontSize: 23,
        color: '#ffffff',
        fontFamily: 'Avenir',
    }
});

AppRegistry.registerComponent('IntroTimer', () => IntroTimer);
