import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Vibration,
  NativeModules,
} from 'react-native';

import Proximity from 'react-native-proximity';
import BackgroundTimer from 'react-native-background-timer';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      values: this.props.time,
      showAlert: false,
      interval: null,
      vibrated: false,
      finished: false,
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
       this.startCountdown();
      } else {
        BackgroundTimer.clearInterval(this.state.interval);
        }
   }

   startCountdown = () => {
         // Starting the Countdown Timer
         if (this.state.finished == false) {
         this.setState({interval: BackgroundTimer.setInterval(() => {
           // Subtracting from the time each second
             this.setState({values: this.state.values - 1});
             console.log('tic');
           if (this.state.values <= 4 && this.state.values >= 0) {
             Vibration.vibrate();
           }
           if (this.state.values == 0) {
             this.endTimer();
           }
}, 900)});
}

   }
   vibrate = () => {
     const intervalId = BackgroundTimer.setInterval(() => {
    Vibration.vibrate([0, 500, 500, 500]);
}, 5000);
    }

    endTimer = () => {
      this.setState({finished: true});
      BackgroundTimer.clearInterval(this.state.interval);

    }

    updateClock() {
      var value = this.state.values;
      var hours = 0;
      var minutes = 0;

      hours  = Math.floor(value/3600);
      minutes = Math.floor((value - (hours*3600))/60);
      seconds = Math.floor(value - (hours*3600) - (minutes*60));
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      var time = hours + ":" + minutes + ":" + seconds;
      return time;
    }



    render() {

      let display = this.updateClock();
      if (this.state.showAlert == true && this.state.values != 0) {
        //this.beginCountdown();
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
        <Text style = {styles.timerText}>{display}</Text>
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
