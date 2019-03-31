import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Tab, Button, Icon } from 'native-base';
import { AnimatedGaugeProgress, GaugeProgress } from 'react-native-simple-gauge';
import { api } from '../constants.js';

const styles = StyleSheet.create({
  progress: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  progress2: {
    marginTop: 15,
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

  constructor() {
    super();
    this.state = { soilMoisture: 0, isFanOn: false }
  }

  componentDidMount() {
    return fetch(`${api}/get_plant${this.props.plantId}`)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson.dispatch);
        })
        .catch((error)=>{
          console.log(error);
        });
  }

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
        <AnimatedGaugeProgress
          style={styles.progress2}
          size={200}
          width={15}
          fill={60}
          rotation={90}
          cropDegree={90}
          tintColor="#FF0015"
          delay={0}
          backgroundColor="#FF8E95"
          stroke={[2, 2]}
          strokeCap="circle"
        >
          <View style={styles.inner}>
            <Text style={styles.text}>
              70&#176;
            </Text>
            <Text style={styles.subtext}>
              Current Temperature
            </Text>
          </View>
        </AnimatedGaugeProgress>
        <View>
          <Button primary style={styles.button} onPress={() => {
            return fetch(`${api}/water_plant${this.props.plantId}`)
                .then((response) => response.json())
                .then((responseJson) => {
                  console.log(responseJson.dispatch);
                })
                .catch((error)=>{
                  console.log(error);
                });
              }
          }>
            <Text style={styles.buttonText}>
              Water
            </Text>
            <Icon name="ios-water"/>
          </Button>
          <Button success style={styles.button} onPress={() => {
            if(this.state.isFanOn) {
              return fetch(`${api}/fan_off`)
                  .then((response) => response.json())
                  .then((responseJson) => {
                    console.log(responseJson.dispatch);
                  })
                  .catch((error)=>{
                    console.log(error);
                  });
            } else {
              return fetch(`${api}/fan_on`)
                  .then((response) => response.json())
                  .then((responseJson) => {
                    console.log(responseJson.dispatch);
                  })
                  .catch((error)=>{
                    console.log(error);
                  });
            }
            setState({ isFanOn: !isFanOn })
          }}>
            <Text style={styles.buttonText}>
              Toggle Fan
            </Text>
            <Icon name="air" type="Entypo"/>
          </Button>
        </View>
      </Tab>
    );
  }
}

export default PlantDashboard;
