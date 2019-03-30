import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Tab, Button, Icon } from 'native-base';
import { AnimatedGaugeProgress, GaugeProgress } from 'react-native-simple-gauge';

const styles = StyleSheet.create({
  progress: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inner: {
    position: 'absolute',
    top: 30,
    width: 170,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  subtext: {
    fontSize: 12,
    color: '#515151',
  },
  button: {
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
});

class PlantDashboard extends React.Component {
  render() {
    return (
      <Tab heading={this.props.heading}>
        <AnimatedGaugeProgress
          style={styles.progress}
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
          <View style={styles.inner}>
            <Text style={styles.text}>
              350
            </Text>
            <Text style={styles.subtext}>
              Current Soil Humidity Level
            </Text>
          </View>
        </AnimatedGaugeProgress>
        <View>
          <Button primary style={styles.button}>
            <Text style={styles.buttonText}>
              Water
            </Text>
            <Icon name="ios-water"/>
          </Button>
          <Button success style={styles.button}>
            <Text style={styles.buttonText}>
              Toggle Light
            </Text>
            <Icon name="ios-bulb"/>
          </Button>
        </View>
      </Tab>
    );
  }
}

export default PlantDashboard;
