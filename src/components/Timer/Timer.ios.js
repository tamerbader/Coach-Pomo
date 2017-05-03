import React, { Component } from 'react';
import {
AppRegistry,
StyleSheet,
Text,
View,
Image,
} from 'react-native';

export default class Timer extends Component {
render() {
    return (
    <View style = {styles.globalContainer}>
        <View style={styles.topSection}></View>
        <View style={styles.middleSection}>
            <Image 
                style = {styles.logo}
                source = {require('../../images/coaches.png')}

                />
                <Text style = {styles.timerText}>0 Hr : 35 Min</Text>
        </View>
        <View style={styles.bottomSection}></View>
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
        width: 100,
        height: 100,
    },
    timerText: {
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'Avenir',
        fontSize: 45,
        marginTop: 50,
    }

});

AppRegistry.registerComponent('Timer', () => Timer);