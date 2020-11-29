import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {StyleSheet, View, Text, Image} from 'react-native'
import {colors} from '../util/index'

import { faLock} from '@fortawesome/free-solid-svg-icons';





const {PRIMARY_COLOR, SECONDARY_COLOR} = colors

export default function WeatherInfo({currentWeather}) {
    const {name,
        main: {temp},
          weather: [details]
    }=  currentWeather

    const { icon, main, description} = details

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`

    return (
        <View style={styles.weatherInfo} >
            <Text style={ styles.textPrimary}>{name}</Text>
            <Image style={ styles.weatherIcon} source={{uri: iconUrl}}/>
            <Text style={ styles.textPrimary}>{temp}°</Text>
            <Text style={ styles.textSecondary}>{description}</Text>
            <Text style={ styles.textSecondary}>{main}</Text>
        </View>
        )
}

const styles = StyleSheet.create({
    weatherInfo: {
        alignItems: 'center',
    },
    weatherIcon: {
          width: 100,
          height: 100
    },
    textPrimary : {
        fontSize: 35,
        color: PRIMARY_COLOR,
        fontWeight: '500'
    },
    textSecondary : {
        fontSize: 25,
        color: SECONDARY_COLOR,
        fontWeight: '300',
        textTransform: 'capitalize',
    }
});

