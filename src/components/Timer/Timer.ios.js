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
      showAlert: false,
    };
    this._proximityListener = this._proximityListener.bind(this);
  }
  componentDidMount(){
    Proximity.addListener(this._proximityListener);
    }
  componentWillUnmount() {
    Proximity.removeListener(this._proximityListener);
    }

    _proximityListener(data) {
      if (data.proximity) {
        this.setState({showAlert: true});
      } else{
        this.setState({showAlert: false});
      }
    }



    render() {
      if (this.state.showAlert == true) {
        Alert.alert(
 'Alert',
 'Countdown Has Started',
 [
   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
   {text: 'Ok', onPress: () => console.log('OK Pressed')},
 ],
 { cancelable: false }
);
      } else {
        display = 'Not Showing';
      }
      return (
        <View style = {styles.globalContainer}>
        <View style={styles.topSection}>
        <Text style = {styles.warning}>*For Best Experience Plug In Charger!</Text>
        </View>
        <View style={styles.middleSection}>
        <Image
        style = {styles.logo}
        source = {require('../../images/hourglass5.png')}

        />
        <Text style = {styles.timerText}>{this.props.time}</Text>
        <Text style = {styles.ready}>Ready? Put Your Phone Face Down To Begin</Text>
        </View>
        <View style={styles.bottomSection}>
        <Text style = {styles.giveUp}>Stop! I Cannot Handle</Text>
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
      fontFamily: 'AvenirNext-UltraLight',
      fontSize: 55,
      marginTop: 50,
    },
    warning: {
      textAlign: 'center',
      color: '#ffffff',
      fontFamily: 'Avenir',
      fontSize: 15,
      marginTop: 50,
    },
    giveUp: {
      textAlign: 'center',
      color: '#ffffff',
      fontFamily: 'Avenir Next',
      fontSize: 20,
      marginTop: 20,
    },
    ready: {
      textAlign: 'center',
      color: '#ffffff',
      fontFamily: 'Avenir Next',
      fontSize: 15,
      marginTop: 10,
    },

  });

  AppRegistry.registerComponent('Timer', () => Timer);
