import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

export default class Details extends Component{
  render(){
    return(
      <View style={styles.container1}>
        <Text style={styles.listitems}>
          IP:  {this.props.server.serverIp}
        </Text>
        <Text style={styles.listitems}>
          Location: {this.props.server.serverLocation}
        </Text>
        <Text style={styles.listitems}>
          Related Group: {this.props.server.relatedGroup}
        </Text>
        <Text style={styles.listitems}>
          Related Project: {this.props.server.relatedProject}
        </Text>
        <Text style={styles.listitems}>
          End Date: {this.props.server.serverEndDate}
        </Text>
        <Text style={styles.listitems}>
          Serial Number: {this.props.server.serialNumber}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container1: {
     flex: 1,
     justifyContent: 'center',
     alignItems:'center'
   },
   listitems:{

   }
})
