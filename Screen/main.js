import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import Splash from './SplashScreen'

const MainNavigator = createStacknavigator(
)
export default function MainNavigator() {


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Splash' component={Splash} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
