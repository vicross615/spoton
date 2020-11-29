import React from 'react';
import {StyleSheet, View, Platform, Text } from 'react-native'

import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { colors } from "../util/index";


const { PRIMARY_COLOR, SECONDARY_COLOR} = colors

const iconConfig = {
    color: PRIMARY_COLOR,
    size: 25
}


export default function WeatherDetail({unitsSystem, setUnitsSystem, currentWeather}) {

    const { main: {feels_like, humidity, pressure},
    wind:{speed}}= currentWeather

    const windSpeed = unitsSystem === 'metric' ? `${Math.round(speed)}m/s` : `${Math.round(speed)}miles/hr`

    return (
        <View style={ styles.weatherDescription}>
            <View style={ styles.weatherDescriptionBox}>
                <View style={ styles.weatherDescriptionBoxIcon}>
                    <FontAwesome5 name= 'temperature-low'  size={ iconConfig.size }  color={ iconConfig.color }/>
                </View>
                <View style={ styles.weatherDescriptionBoxItemPrimary}>
                    <Text>
                        Feels Like
                    </Text>
                    <Text style={ styles.textSecondary} >
                        {feels_like}
                    </Text>
                </View>
            </View>

            <View style={ styles.weatherDescriptionBox}>
                <View style={ styles.weatherDescriptionBoxIcon}>
                    <MaterialCommunityIcons name= 'water'  size={ iconConfig.size }  color={ iconConfig.color }/>
                </View>
                <View style={ styles.weatherDescriptionBoxItemPrimary}>
                    <Text>
                        Humidity
                    </Text>
                    <Text style={ styles.textSecondary}>
                        {humidity}
                    </Text>
                </View>
            </View>

            <View style={ styles.weatherDescriptionBox}>
                <View style={ styles.weatherDescriptionBoxIcon}>
                    <FontAwesome5 name= 'temperature-low'  size={ iconConfig.size }  color={ iconConfig.color }/>
                </View>
                <View style={ styles.weatherDescriptionBoxItemPrimary}>
                    <Text>
                        Wind Speed
                    </Text>
                    <Text style={ styles.textSecondary}>
                        {windSpeed}
                    </Text>
                </View>
            </View>

            <View style={ styles.weatherDescriptionBox}>
                <View style={ styles.weatherDescriptionBoxIcon}>
                    <FontAwesome5 name= 'temperature-low'  size={ iconConfig.size }  color={ iconConfig.color }/>
                </View>
                <View style={ styles.weatherDescriptionBoxItemPrimary}>
                    <Text>
                        Pressure
                    </Text>
                    <Text style={ styles.textSecondary}>
                        {pressure} Hpa
                    </Text>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    weatherDescription:{
        position: 'absolute',
        ...Platform.select({

        }),
        bottom: 0,
        justifyContent: 'center',
        flexDirection: 'row',
        color: 'white',
        width: '100vw',
        flexWrap: 'wrap',
        padding: 20,
        maxHeight:  500
    },
    weatherDescriptionBox: {
        height: 100,
         justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: '#AAAAAA',
        borderWidth: 1,
        flexDirection: 'row',
        width: 170,
        borderRadius: 10,

    },
    weatherDescriptionBoxItemPrimary: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        flexDirection: 'column',

    },

    textSecondary: {
        fontSize: 15,
        color: SECONDARY_COLOR,
        fontWeight: '700',
        margin: 7
    }


});

