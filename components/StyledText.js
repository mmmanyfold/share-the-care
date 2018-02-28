import React from 'react';
import { Text } from 'react-native';

export class CeraText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'cera', marginTop: 8 }]} />;
  }
}

export class CeraTextBold extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'cera-bold', marginTop: 8 }]} />;
  }
}

export class CeraTextItalic extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'cera-italic', marginTop: 8 }]} />;
  }
}
