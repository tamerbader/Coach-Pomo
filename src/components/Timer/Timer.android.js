import React, { Component } from 'react';
import {
AppRegistry,
StyleSheet,
Text,
View
} from 'react-native';

export default class Timer extends Component {
render() {
    return (

    <View style = {styles.globalContainer}>
        <Text style = {styles.text}>Hello World</Text>
    </View>

);
}
}

const styles = StyleSheet.create({
    globalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    text: {
        color: '#000000',
    }

});

AppRegistry.registerComponent('Timer', () => Timer);