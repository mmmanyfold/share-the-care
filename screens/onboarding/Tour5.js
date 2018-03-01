import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';

import { Stopwatch } from 'react-native-stopwatch-timer';
import { CeraText, CeraTextBold, CeraTextItalic } from '../../components/StyledText';
import { default as focusAreas } from "../../constants/focusAreas";
import { isFunction } from 'lodash';

export default class ActionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stopwatchStart: true,
      stopwatchReset: false,
    };
    this.toggleStopwatch = this.toggleStopwatch.bind(this);
  }

  static navigationOptions = {
    header: null,
  };

  toggleStopwatch(store) {
    this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
    this.props.navigation.navigate('Main', {store});
  }

  getFormattedTime(time) {
      this.currentTime = time;
  };

  render() {
    const store = this.props.navigation.state.params.store;
    const { focusArea, childNickname, momNickname } = this.props.navigation.state.params.store;
    const { title, who, subtitle } = this.props.navigation.state.params.store.cardSelected;
    const { meta: { color, name, id } } = focusAreas.find(area => area.meta.id === focusArea);
    let cardTitle;
    if (isFunction(title)) {
      if(who === 'baby') {
        cardTitle = title(childNickname);
      } else {
        cardTitle = title(momNickname);
      }
    } else {
      cardTitle = title;
    }
    let icon;
    switch (id) {
      case 'BabyHealthAndHygiene':
        icon = require("../../assets/images/fa-icon-red.png")
        break;
      case 'BabyDevelopment':
        icon = require("../../assets/images/fa-icon-blue.png")
        break;
      case 'HouseholdChores':
        icon = require("../../assets/images/fa-icon-orange.png")
        break;
      case 'SchedulesAndCommunication':
        icon = require("../../assets/images/fa-icon-green.png")
        break;
      case 'EmotionalSupport':
        icon = require("../../assets/images/fa-icon-purple.png")
        break;
    }
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={[ styles.header, { backgroundColor: color } ]}>
            <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('FocusAreas', {
                store
              })}>
                <Image
                  source={icon}
                  style={styles.headerIcon}/>
              </TouchableOpacity>
            </View>
            <View>
              <CeraText style={styles.headerTitle}>{name}</CeraText>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <View style={[styles.cardContainer, { borderColor: color }]}>
              <CeraTextBold style={[styles.cardLabel, { color: color }]}>{"IN PROGRESS"}</CeraTextBold>
              <View style={styles.cardContent}>
                <CeraText style={styles.cardTitle}>{ cardTitle }</CeraText>
                <CeraText style={styles.cardSubtitle}>{subtitle}</CeraText>
                <CeraTextItalic style={{ textAlign: 'center' }}>
                  Tap this card for helpful tips
                </CeraTextItalic>
              </View>
            </View>
            <View style={{ flex: 1, alignItems:'center', marginTop: 50 }}>
              <Stopwatch laps msecs start={this.state.stopwatchStart}
                reset={this.state.stopwatchReset}
                msecs={false}
                options={options}
                getTime={this.getFormattedTime} />
              <TouchableHighlight onPress={() => this.toggleStopwatch(store)} style={{marginTop: 40}}>
                <View style={{ backgroundColor: color, borderRadius: 5, paddingHorizontal: 13, paddingTop: 4 }}>
                  <CeraText style={{ fontSize: 35, color: '#fff' }}>
                    {!this.state.stopwatchStart ? "Start" : "DONE"}
                  </CeraText>
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.toggleStopwatch(store)} style={{marginTop: 45}}>
                <CeraText style={{ color: color, fontSize: 25 }}>
                  {"Didn't get to it"}
                </CeraText>
              </TouchableHighlight>
            </View>
            <View style={{ flex: 2 }}></View>
          </View>
        </View>
      </View>
    );
  }
}

const options = {
  container: {
    borderRadius: 5,
  },
  text: {
    fontSize: 40,
    color: '#54489d',
    marginHorizontal: 7,
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  contentContainer: {
    flex: 1,
    ...Platform.select({
      ios: {
        paddingTop: 30,
      },
    }),
  },
  welcomeContainer: {
    alignItems: 'flex-end',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    ...Platform.select({
      ios: {
        marginTop: 10,
      },
    }),
    marginBottom: 20,
  },
  headerIcon: {
    height: 35,
    width: 35,
    margin: 10,
  },
  headerTitle: {
    fontSize: 21,
    color: '#fff',
    marginHorizontal: 10,
  },
  welcomeImage: {
    width: 57,
    height: 80,
    resizeMode: 'contain',
    marginRight: 65,
  },
  cardContainer: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 5,
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: '#fff',
    width: 325,
  },
  cardLabel: {
    fontSize: 20,
  },
  cardContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cardTitle: {
    ...Platform.select({
      ios: {
        fontSize: 30,
      },
      android: {
        fontSize: 20,
      },
    }),
    textAlign: 'center',
    marginHorizontal: 13,
  },
  cardSubtitle: {
    ...Platform.select({
      ios: {
        fontSize: 20,
      },
      android: {
        fontSize: 17,
      },
    }),
    textAlign: 'center',
    margin: 13,
    marginHorizontal: 13,
  },
});