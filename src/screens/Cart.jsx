import React, { Component, Fragment } from 'react';
import {View, Text, StyleSheet } from 'react-native';

export default class Cart extends Component {

    render() {
        return(
            <Fragment>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Cart
                    </Text>
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
        fontSize: 14,
        fontWeight: 'bold',
        color: 'orange',
        fontWeight: 'bold',
        fontFamily: 'BaiJamjuree-Bold',
        alignSelf: 'center',
        //textAlign: 'center'

      }
});