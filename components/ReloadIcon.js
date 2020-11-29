import React from 'react'
import { View, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import {colors} from "../util/index";

export default function ReloadIcon({load}) {
    const { PRIMARY_COLOR} = colors
    const reloadIconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh'

    return (
        <View>
                <Ionicons onPress={load} name= {reloadIconName} size={24} color={PRIMARY_COLOR} />
        </View>
    )
}