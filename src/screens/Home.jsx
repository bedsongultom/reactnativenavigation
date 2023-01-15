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
    onPressHome=()=>{
        this.props.navigation.navigate('Home');
    }
    
    render(){
        return(
            <Fragment>
                <View style={styles.container}>
                <TouchableOpacity style={styles.button}
                        onPress={this.onPressHome}>
                        <Text style={styles.title}>Home</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button}
                        onPress={this.onPressCart}>
                        <Text style={styles.title}>Cart</Text>
                    </TouchableOpacity>
                   
                    <TouchableOpacity style={styles.button}
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
        fontWeight: 'bold',
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
      },

    button:{
        padding: 0,
        borderColor: 'orange',
        backgroundColor:'orange',
        borderWidth: 1,
        borderRadius:10,
        height:30,
        width: 250,
        alignSelf: 'center',
        marginTop:10,
        justifyContent: 'center',
        alignItems: 'center'
    }  
    
});


