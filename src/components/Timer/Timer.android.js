import React, { Component } from 'react';
import {
AppRegistry,
StyleSheet,
Text,
View,
Image,
Alert
} from 'react-native';

import Proximity from 'react-native-proximity';

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            values: 0,
        };
    }
    componentDidMount(){
 Proximity.addListener(this._proximityListener);
}
 
 _proximityListener(data) {
     if (data.proximity) {
         Alert.alert(
  'Alert',
  'Your Phones is Facing Down',
  [
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
)
     }
 }



render() {
    return (
    <View style = {styles.globalContainer}>
        <View style={styles.topSection}>
            <Text style = {styles.warning}>*For Best Experience Plug In Charger!</Text>
        </View>
        <View style={styles.middleSection}>
            <Image 
                style = {styles.logo}
                source = {require('../../images/coaches.png')}

                />
                <Text style = {styles.timerText}>{this.props.time}</Text>
                <Text style = {styles.ready}>Ready? Put Your Phone Face Down To Begin</Text>
        </View>
        <View style={styles.bottomSection}>
            <Text style = {styles.giveUp}>Stop! I Can't Handle!</Text>
        </View>
    </View>

);
}
}

const styles = StyleSheet.create({
    
    globalContainer: {
        flex:6,
        backgroundColor: '#000000'
    },

    topSection: {
        flex:1,
    },
    middleSection: {
        flex:4,
        alignItems: 'center',

    },
    bottomSection: {
        flex: 1,
    },
    logo: {
        width: 150,
        height: 150,
    },
    timerText: {
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'sans-serif-thin',
        fontSize: 55,
        marginTop: 50,
    },
    warning: {
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'sans-serif-thin',
        fontSize: 15,
        marginTop: 50,
    },
    giveUp: {
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'sans-serif-thin',
        fontSize: 20,
        marginTop: 20,
    },
    ready: {
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'sans-serif-thin',
        fontSize: 15,
        marginTop: 10,
    },

});

AppRegistry.registerComponent('Timer', () => Timer);