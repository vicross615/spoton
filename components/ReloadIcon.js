import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


export default function ReloadIcon() {
    const reloadIconName = Plaftorm.OS === 'ios' ? 'ios-refresh' : 'md-refresh'

    return (
        <View>
                <Ionicons name= {reloadIconName} size={24} color="black" />
        </View>
    )
}