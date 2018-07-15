import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from './src/components/Header';
import SimpleCard from './src/components/SimpleCard';
import FullCard from './src/components/FullCard'

export default class App extends React.Component {
  render() {
    let person = {
      userName: 'Daniel Nascimento',
      userMail: 'filhodan@gmail.com',
      userPhone: '(11) 98010-0012',
      user: 'dnascimento'
    }

    return (
      <View style={styles.container}>
        <Header message='PEOPLE'/>
        <FullCard person={ person }/>
        {/* <ScrollView style={ styles.scrollView }>
          <SimpleCard userName='Daniel Nascimento'/>
          <SimpleCard userName='Danielle Cristhina'/>
          <SimpleCard userName='Diogo Fernandes'/>
          <SimpleCard userName='Jaqueline Fernandes'/>
          <SimpleCard userName='Lucas Nascimento'/>
          <SimpleCard userName='Paloma Nascimento'/>
          <SimpleCard userName='Gustavo Mendonça'/>
          <SimpleCard userName='Yasmin Mendonça'/>
          <SimpleCard userName='Jackson Nascimento'/>
          <SimpleCard userName='Raimunda Mendonça'/>
          <SimpleCard userName='Kerolin Nascimento'/>
          <SimpleCard userName='Izolda Barbosa'/>
        </ScrollView> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  scrollView: {
    padding: 10
  }
});
