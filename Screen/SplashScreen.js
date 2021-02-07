import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import LottieView from 'lottie-react-native';


export default function SplashScreen() {




    return(
        <View style={ styles.splashContainer}>
            <LottieView
                autoPlay
                loop = {false}
                speed = {0.8}
                source={require('../assets/splashScreen.json')}
                onAnimationFinish={ ()=> {
                    this.props.navigation.navigate('Login')
                    alert("dffvsfvs")
                }}
                // OR find more Lottie files @ https://lottiefiles.com/featured
                // Just click the one you like, place  file in the 'assets' folder to the left, and replace the above 'require' statement
            />
        </View>
    )
}

const styles = StyleSheet.create({
    splashContainer:{
        flex: 1,
        backgroundColor: 'white'
    }

});