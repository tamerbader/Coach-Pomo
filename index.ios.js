/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';


import Login from './src/components/Login/Login';
import IntroTimer from './src/components/IntroTimer/IntroTimer'
import Timer from './src/components/Timer/Timer'

export default class Coach extends Component {

  renderScene(route, navigator) {
      switch(route.id) {
          case 'Login':
            return (<Login navigator={navigator} title="Login" />)
          case 'IntroTimer':
            return (<IntroTimer navigator={navigator} title="IntroTimer" />)
          case 'Timer':
            return (<Timer navigator={navigator} title="Timer" time={route.time} />)
      }
  }
  render() {
    return (

        <Navigator
          initialRoute={{id: 'Login'}}
          renderScene={this.renderScene}
          configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}

        />


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Coach', () => Coach);
