import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class FullCard extends React.Component {
    render(){
        return(
            <View>
                <Image
                    source={ require('../assets/images/user.png') }
                    style={ styles.fullImage }
                />
                <View  style={ styles.userInfoContainer }>
                    <Text style={ styles.userinfo }>Nome: Daniel Nascimento</Text>
                    <Text style={ styles.userinfo }>E-Mail: filhodan@gmail.com</Text>
                    <Text style={ styles.userinfo }>Mobile: (11) 98010-0012</Text>
                    <Text style={ styles.userinfo }>User: dnascimento</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    fullImage: {
        height: 200,
        width: 200,
        alignSelf: 'center',
        marginTop: 15
    },
    userInfoContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        margin: 20,
        padding: 10
    },
    userInfo: {
        fontSize: 30,
        marginBottom: 10
    }
})