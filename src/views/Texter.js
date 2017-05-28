import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';

export default class Texter extends Component {
  constructor() {
    super();
  }

  render(){
    return(
      <View style={this.props.viewStyle}>
        <Text style={this.props.textStyle}>
          {this.props.value}
        </Text>
      </View>
    );
  }
}
