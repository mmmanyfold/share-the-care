import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import { CeraText } from '../../components/StyledText';
import { NextButton, BackButton } from '../../components/OnboardNavButtons';

import UserRecord from '../../stores/UserRecord';

const userRecord = new UserRecord(); // instantiate main user record

export default class A1 extends React.Component {
  state = {
    userNickname: '',
  };

  handleTextInput(userNickname){
    this.setState({ userNickname });
  }

  static navigationOptions = {
      header: null,
  };

  async saveAction() {
    try {
      const updateRecord = userRecord.set('userNickname', this.state.userNickname);
      await userRecord.asyncSave(updateRecord);
      return updateRecord;
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                require('../../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <CeraText style={styles.getStartedText}>{"First, let's make things personal."}</CeraText>
          </View>

          <View style={styles.helpContainer}>
            <CeraText style={styles.getStartedText}>{"What's your first name (or nickname)?"}</CeraText>
            <TextInput
              style={styles.inputText}
              onChangeText={this.handleTextInput.bind(this)}
              value={this.state.userFirstName} />
            <View style={{flexDirection: 'row', width: 250, justifyContent: 'space-between', marginTop: 20}}>
              <BackButton navigation={this.props.navigation}/>
              <NextButton disabled={this.state.userNickname === ''}
                          navigation={this.props.navigation}
                          saveAction={this.saveAction.bind(this)}
                          to={'A2'}/>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    fontWeight:'bold',
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  inputText: {
    fontSize: 20,
    color: '#56CCF2',
    fontWeight: 'bold',
    width: 250,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    textAlign: 'center'
  },
});
