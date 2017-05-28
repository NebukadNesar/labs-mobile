import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Icon
} from 'react-native';
import Button from '../buttons/Button';
import Texter from './Texter';
import Refresh from '../buttons/Refresh';
var customData = require('../../package.json');

export default class Credits extends Component{

  constructor(){
    super();
    this.state={
      textStyle:styles.TextBold2
    }
  }
  setStyle =(state)=>{
    console.log(state);
    if (state == 1) {
      this.setState({textStyle:styles.TextBold1});
    }else{
      this.setState({textStyle:styles.TextBold2});
    }
  }

  render(){
    return(
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headertext}>
              <Text >
                Tools details ..
              </Text>
            </View>
            <View style={styles.biggerTheBetter}>
              <TouchableOpacity onPress={()=>{
                this.setStyle(2);
                }}  style={styles.footerViewSearch}>
                 <Image
                   source={require('../images/minus.png')}
                 />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{
                this.setStyle(1);
                }} style={styles.footerViewSearch}>
                 <Image
                   source={require('../images/plus.png')}
                 />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.Credits}>
              <ScrollView style={styles.information}>
                <Text style={this.state.textStyle}>
                  {JSON.stringify(customData, null, 4)}
                </Text>
              </ScrollView>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  biggerTheBetter:{
    flex:1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginRight:20
  },
  container: {
    flex:1,
    backgroundColor: '#e67e22',
  },
  Credits:{
    flex:8,
    margin:4,
    backgroundColor:'#d35400'
  },
  information:{
   flex:3,
   paddingLeft:5,
   paddingRight:5,
   paddingBottom:4,
   borderRadius: 6,
  },
  header:{
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#f1c40f',
  },
  headertext:{
    flex:5,
    marginLeft:20,
    justifyContent:'center'
  },
  TextBold1:{
    fontSize:16,
    fontWeight:'bold'
  },
  TextBold2:{
    fontSize:12,
    fontWeight:'bold'
  },
  CreditInformationText:{
    flex:1,
  },
  fitImage: {
    borderRadius: 20,
  }
})
