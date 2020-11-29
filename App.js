import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import WeatherInfo from "./components/weatherInfo";
import WeatherDetail from "./components/weatherDetail";
import UnitPicker from "./components/UnitsPicker";
import ReloadIcon from "./components/ReloadIcon"


// Import Screens
import SplashScreen from './Screen/SplashScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import DrawerNavigationRoutes from './Screen/DrawerNavigationRoutes';


const WEATHER_API_KEY = 'deaec1021e0a515efdb1df88f71a300c';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';

export default function App() {

    const [errorMessage, setErrorMessage] = useState(null)
    const [currentWeather, setCurrentWeather] = useState(null)
    const [unitsSystem, setUnitsSystem] = useState("metric")


    useEffect(() => {
        load()
    }, [unitsSystem])

    async function load() {
        setCurrentWeather(null)
        setErrorMessage(null)
        try {
            //let {status} = await Location.requestPermissionsAsync()

            // if(status !== 'granted'){
            //
            //     setErrorMessage('Access to location is needed to run this app')
            //     return
            // }
            //const location = await Location.getCurrentPositionAsync()

            //const {latitude, longitude} = location.coords
             const latitude = 37.785834
            const longitude = -122.406417
            const weatherUrl  =`${BASE_URL}lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`

            const response = await fetch(weatherUrl)
            const result = await response.json()

            //alert (result.toString())


             if(response.ok) {
            setCurrentWeather(result)
            } else {
                setErrorMessage(result.message)
            }



        } catch (error) {
            setErrorMessage(error.message)
        }
    }

    if(currentWeather) {
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                <View style={styles.picker}>
                    <UnitPicker  unitsSystem ={unitsSystem} setUnitsSystem={setUnitsSystem}/>
                </View>
                <View style={styles.reloadIcon}>
                    <ReloadIcon
                         load ={load}
                    />
                </View>
                <View style={styles.main}>
                    <WeatherInfo
                         currentWeather ={currentWeather}
                    />
                </View>
                <View style={styles.weatherDetail}>
                    <WeatherDetail
                         unitsSystem ={unitsSystem} currentWeather={currentWeather}
                    />
                </View>
            </View>

        );
    } else if (errorMessage){
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Text>{errorMessage}</Text>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large' />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e8faff',
      height: '100%',
      display: 'flex',
      justifyContent: 'center'
  },

    picker: {
      position: 'absolute',
        top: 20,
        left:20
    },
    weatherDetail: {
      position: 'absolute',
        bottom: 0,
        width: '100%',

    },
    reloadIcon: {
        position: 'absolute',
        top: 100,
        right:20
    }


});
