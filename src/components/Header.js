import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends React.Component {
    render(){
        return(
            <View style={ styles.header }>
                <Text style={ styles.message }>{ this.props.message }</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    header: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        paddingTop: 20
    },
    message: {
        fontSize: 20,
        color: '#fff'
    }
});