import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {LinearGradient} from "expo";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import PropTypes from 'prop-types';


const weatherCases = {
    Rain: {
        colors: ["#00C6FB","#005BEA"],
        title: "It's Raining outside!",
        subtitle: "Bring an umbrella or Wear Hoody :)",
        icon: "weather-pouring"
    },
    Clear:{
        colors: ["#FEF253","#FF7300"],
        title: "It's Sunny outside!",
        subtitle: "Let's go picnic :)",
        icon: "weather-sunny"
    },
    Thunderstorm:{
        colors: ["#D7D2CC","#304352"],
        title: "There is Thunderstorm outside",
        subtitle: "It's time to stay at home :)",
        icon: "weather-lightning"
    },
    Clouds:{
        colors: ["#D7D2CC","#304352"],
        title: "It's cloud outside!",
        subtitle: "I Know :( we miss sunshine",
        icon: "weather-cloudy"
    },
    Snow:{
        colors: ["#7DE2FC","#B9B6E5"],
        title: "It's So Cold outside!",
        subtitle: "It's time to drink Hot Tea at home :)",
        icon: "weather-snowy"
    },
    Drizzle:{
        colors: ["#89F7FE","#66A6FF"],
        title: "It's drizzle outside!",
        subtitle: "Think Positive! It is better than raining :)",
        icon: "weather-rainy"
    },
    Haze:{
        colors: ["#00ECBC","#007ADF"],
        title: "It's Haze outside :(",
        subtitle: "Be careful when you drive today :)",
        icon: "weather-fog"
    },
    Mist:{
        colors: ["#D7D2CC","#304352"],
        title: "It's Mist outside :(",
        subtitle: "Be careful when you drive today :)",
        icon: "weather-fog"
    }


}

function Weather({ weatherName, temp }) {
    console.log(weatherName);
    return(
        <LinearGradient 
            colors = {weatherCases[weatherName].colors} 
            style = {styles.container}>
            <View style = {styles.upper}>
                <MaterialCommunityIcons color = "white" size = {135} name = {weatherCases[weatherName].icon} />
                <Text style = {styles.temp}>{temp}°</Text>
            </View>
            <View style = {styles.lower}>
                <Text style = {styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style = {styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
            </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 5
    },
    lower: {  
        flex:1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title:{
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "300"

    },
    subtitle:{
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24

    }
});