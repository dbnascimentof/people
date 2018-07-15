import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class SimpleHeader extends React.Component {
    render(){
        return(
            <View style={ styles.header }>
                <Image 
                    source={ require('../assets/images/user.png') }
                    style={ styles.userImage }
                />
                <Text style={ styles.userName }>{ this.props.userName }</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10
    },
    userImage: {
        width: 50,
        height: 50
    },
    userName: {
        marginLeft: 15,
        marginTop: 10,
        fontSize: 20
    }
});