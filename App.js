import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Tabs, Tab, Body, Item, Input, Content, Button } from 'native-base';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { AnimatedGaugeProgress, GaugeProgress } from 'react-native-simple-gauge';
import PlantDashboard from './components/PlantDashboard.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  }

  render() {
    return (
      <Container>
        <Header hasTabs>
          <Body>
            <Text>My Plants</Text>
          </Body>
        </Header>
        <Tabs>
          <PlantDashboard heading="Basil" />
          <PlantDashboard heading="Thyme" />
          <PlantDashboard heading="Mint" />
          <PlantDashboard heading="Sage" />
        </Tabs>
      </Container>
    );
  }
}
