import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {LinearGradient} from "expo";
import {Ionicons} from "@expo/vector-icons" // expo에 있는 IconLibrary.. fontawesome도 찾아보자


const weatherCases = {
    Rain: {
        colors:["#00c6FB", "#005BEA"],
        title: "Raining",
        subtitle: "Under My Umbrella",
        icon: 'ios-rainy' 
    },
    Clear: {
        colors:["#FEF253  ", "#FF7300"],
        title: "Sunny",
        subtitle: "Have a good day",
        icon: 'ios-sunny' 
    },
    Thunderstorm:{
        colors:["#00ECBC", "#007ADF"],
        title: "Thunder!!!!",
        subtitle: "better watch out",
        icon: 'ios-thunderstorm' 
    },
    Clouds: {
        colors:["#D7D2CC", "#334352"],
        title: "Clouds",
        subtitle: "It's boring",
        icon: 'ios-cloudy' 
    },
    Snow: {
        colors:["#7DE2FC", "#B9B6E5"],
        title: "It's snowing outside",
        subtitle: "Let it snow",
        icon: 'ios-snow' 
    },
    Drizzle: {
        colors:["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Shitty day",
        icon: 'ios-rainy-outline' 
    },
    Haze: {
        colors:["#89F7FE", "#66A6FF"],
        title: "Haze",
        subtitle: "I can't see it clearly",
        icon: 'weather-fog' 
    }
};



export default class Weather extends Component{
    render(){
        return (
            <LinearGradient colors={["#00c6FB", "#005BEA"]} style = {styles.container}>
            
                 <View style={styles.upper}>
                    <Ionicons color = "white" size = {144} name = "ios-rainy" />
                    <Text style= {styles.temp}>Temp here</Text>
                 </View>

                 <View style = {styles.lower}>
                    <Text style = {styles.title}>Weather here</Text>
                    <Text style = {styles.subtitle}>more info here</Text>

                 </View>
            
            
            </LinearGradient>
            
        )
    }
}//Weather component생성

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    temp:{
        fontSize: 40,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
        
    },
    upper:{
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },
    lower:{
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25

    },
    title:{
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 5,
        fontWeight: "300"
    },
    subtitle:{
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 25
    }

});