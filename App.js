import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Tabs, Tab, Body, Item, Input, Content, Button } from 'native-base';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { AnimatedGaugeProgress, GaugeProgress } from 'react-native-simple-gauge';

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
          <Tab heading="Basil">
            <AnimatedGaugeProgress
              style={{marginTop: 50, justifyContent: 'center', alignItems: 'center'}}
              size={200}
              width={15}
              fill={80}
              rotation={90}
              cropDegree={90}
              tintColor="#66D565"
              delay={0}
              backgroundColor="#C3E7C2"
              stroke={[2, 2]}
              strokeCap="circle"
            >
              <View style={{position: 'absolute', top: 30, width: 170, height: 120, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 48, fontWeight: 'bold'}}>
                  350
                </Text>
                <Text style={{fontSize: 12, color: '#515151'}}>
                  Current Soil Humidity Level
                </Text>
              </View>
            </AnimatedGaugeProgress>
            <View>
              <Button primary style={{width: 300, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 15}}><Text style={{textAlign: 'center', color: 'white', fontSize: 18}}>Water</Text></Button>
              <Button success style={{width: 300, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 15}}><Text style={{textAlign: 'center', color: 'white', fontSize: 18}}>Toggle Light</Text></Button>
            </View>
          </Tab>
          <Tab heading="Thyme">
            <Item rounded>
              <Input placeholder="Current Soil Humidity Level"/>
            </Item>
          </Tab>
          <Tab heading="Mint">
          </Tab>
          <Tab heading="Sage">
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
