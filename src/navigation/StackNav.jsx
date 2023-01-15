import React, {Component, Fragment} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "../screens/Home";
import Cart from "../screens/Cart";
import Accounts from "../screens/Accounts";


const Stack             = createNativeStackNavigator();
const screenOptionStyle = {
        headerStyle: {
            backgroundColor: "#fff",
        },
        headerTintColor: "#FF6F00",
        headerBackTile:   "Back",
};

export default class StackNav extends Component{
    render(){
        return(
            <Fragment>
            <NavigationContainer>
                <Stack.Navigator screenOptions={screenOptionStyle}>
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="Cart" component={Cart}/>  
                    <Stack.Screen name="Accounts" component={Accounts}/>
                </Stack.Navigator>
            </NavigationContainer>    
            </Fragment>
        )
    }
}