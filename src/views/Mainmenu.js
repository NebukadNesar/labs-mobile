import React, {Component} from 'react';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import { BackHandler } from 'react-native';

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Icon
} from 'react-native';
import Credits from './Credits'
import Button from '../buttons/Button';

export default class Mainmenu extends Component{

  constructor(props){
    super(props);
    this.state ={
        menus :"This area is for Menu.."
    }
  }
  
  componentWillUnmount() {
    BackHandler.removeEventListener('backPress');
  }

  componentDidMount() {
    BackHandler.addEventListener('backPress');
  }

  _onPressButton(){
    console.log("log this..");
  }
  navigate(routename){
    this.props.navigator.push({
      name : routename
    })
  }
  render(){
    return(
        <View style={styles.MenuTop}>
         <View style={styles.MenuINBottom}>
           <View style={styles.MenuINBottomOne}>
             <TouchableOpacity onPress={this.navigate.bind(this, 'Lablist')}  style={styles.MenuINBottomOneLeft}>
              <Text>
                Lablist
              </Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={ ()=>{this.popupDialog.show();}}  style={styles.MenuINBottomOneRight}>
               <Text>
                 Credits
               </Text>
             </TouchableOpacity>
           </View>
           <View style={styles.MenuINBottomTwo}>
             <TouchableOpacity onPress={this.navigate.bind(this, 'Details')}  style={styles.MenuINBottomTwoLeft}>
             <Text>
               Details
             </Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={this.navigate.bind(this, 'Lablist')} style={styles.MenuINBottomTwoRight}>
             <Text>
               Dummy
             </Text>
             </TouchableOpacity>
           </View>
         </View>
         <View style={styles.MenuINTop}>
          </View>
         <TouchableOpacity style={styles.footerView}>
            <Text style={styles.labsFooter}>
              Labs
            </Text>
         </TouchableOpacity>
         <PopupDialog
             ref={(popupDialog) => { this.popupDialog = popupDialog; }}
             dialogAnimation = { new SlideAnimation({ slideFrom: 'bottom' }) }
             >
             <Credits />
           </PopupDialog>
        </View>
      )
   }
}

const styles =  StyleSheet.create({
  MenuTop:{
    flex:1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    paddingLeft: 3,
    paddingRight: 3,
  },

  MenuINTop:{
    flex: 8,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  MenuINBottom:{
    flex: 8,
    paddingTop:40,
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
  },
  footerView:{
    flex:1,
    backgroundColor:'yellow',
    alignItems:'center',
    justifyContent:'center'
  },
  labsFooter:{
    fontSize:16,
    fontWeight:'bold',
    color:'#2c3e50'
  },
  MenuINBottomOne:{
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderRightWidth:1,
    borderLeftWidth:1,
    borderColor:'rgba(52, 52, 52, 0.8)',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  MenuINBottomTwo:{
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
    borderRightWidth:3,
    borderLeftWidth:3,
    borderColor:'rgba(52, 52, 52, 0.8)',
    justifyContent:'center',
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
  },
  MenuINBottomOneLeft:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#ecf0f1',
    borderRadius:4,
    marginRight: 4,
    width: 140,
    height:90
  },
  MenuINBottomOneRight:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#ecf0f1',
    borderRadius:4,
    marginLeft: 4,
    width: 140,
    height:90
  },
  MenuINBottomTwoLeft:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#f1c40f',
    borderRadius:4,
    marginRight: 4,
    width: 140,
    height:90
  },
  MenuINBottomTwoRight:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#ecf0f1',
    borderRadius:4,
    marginLeft: 4,
    width: 140,
    height:90
  },

  button: {
   height: 50,
   backgroundColor: 'red',
   alignSelf: 'stretch',
   marginTop: 10,
   alignItems: 'flex-end',
   justifyContent: 'center',
 },
 buttonText: {
   fontSize: 22,
   color: '#FFF',
   alignSelf: 'center'
 }
});
