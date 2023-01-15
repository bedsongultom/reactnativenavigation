import React, { Component, Fragment } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";


export default class Home extends Component{
    constructor(props){
        super(props);
    }

    onPressCart=()=>{
        this.props.navigation.navigate('Cart');
    }
    onPressAccount=()=>{
        this.props.navigation.navigate('Accounts');
    }
    
    render(){
        return(
            <Fragment>
                <View style={styles.container}>
                    <Text style={styles.title}>Home</Text>
                    <TouchableOpacity 
                        onPress={this.onPressCart}>
                        <Text style={styles.title}>Cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={this.onPressAccount}>
                        <Text style={styles.title}>Accounts</Text>
                    </TouchableOpacity>
                </View>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 25,
        backgroundColor: '#ecf0f1',

    }, 
    title: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'orange',
        fontWeight: 'bold',
        fontFamily: 'BaiJamjuree-Bold',
        alignSelf: 'center',
      }
});


