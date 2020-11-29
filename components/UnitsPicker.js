import React from 'react';
import {StyleSheet, View, Platform } from 'react-native'
import {Picker} from '@react-native-community/picker';







export default function UnitPicker({unitsSystem, setUnitsSystem}) {

    return (
        <View >
            <Picker  style={ styles.unitsSystem} selectedValue={unitsSystem} onValueChange={(item) => setUnitsSystem(item)}>
                <Picker.Item label="C" value='metric'/>
                <Picker.Item label="F" value='imperial' />
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    unitsSystem:{
        position: 'absolute',
        ...Platform.select({

        }),
        top: 0,
        left: 15,
        height: 50,
        width: 50
    }

});

