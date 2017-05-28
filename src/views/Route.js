import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import {
  Navigator
} from 'react-native-deprecated-custom-components'

import Button from '../buttons/Button';
import Mainmenu from './Mainmenu';
import Credits from './Credits';
import Details from './Details';
import Lablist from './Lablist';
import Search from './Search';
import Back from '../buttons/Back';


export default class Route extends Component{

    constructor(props){
      super(props);
      this.state ={
        title : "Labs"
      }
    }

    _onPressButton(){
      console.log("log this..");
    }

    renderScene(route, navigator){
      if (route.name == 'Mainmenu') {
        return <Mainmenu navigator={navigator}/>;
      }
      if (route.name == 'Lablist') {
        return <Lablist navigator={navigator}/>;
      }
      if (route.name == 'Details') {
        return <Details navigator={navigator}/>;
      }
      if (route.name == 'Credits') {
        return <Credits navigator={navigator}/>;
      }
      if (route.name == 'Search') {
        return <Search navigator={navigator}/>;
      }
    }

    render(){
      return(
        <View style={styles.container1}>
          <Navigator
            initialRoute={{name:'Mainmenu'}}
            renderScene={this.renderScene.bind(this)}
            navigationBar = {
               <Navigator.NavigationBar
                  style = { styles.navigationBar }
                  routeMapper = { NavigationBarRouteMapper } />
            }
          />
        </View>
      );
    }

}

var NavigationBarRouteMapper = {
   LeftButton(route, navigator, index, navState) {
      if(index > 0) {
         return (
             <View style={styles.title}>
              <TouchableOpacity style={styles.TouchableOpacity}
                 onPress = {() => { if (index > 0) { navigator.pop() } }}>
                 <Back style = { styles.leftButton }  />
                 <Back style = { styles.leftButton }  />
              </TouchableOpacity>
            </View>
         )
      }
      else { return null }
   },
   RightButton(route, navigator, index, navState) {
      if (route.openMenu) return (
         <TouchableOpacity
            onPress = { () => route.openMenu() }>
            <Text style = { styles.rightButton }>
               { route.rightText || '--' }
            </Text>
         </TouchableOpacity>
      )
   },
   Title(route, navigator, index, navState) {
      return (
        <View style={styles.title}>
          <Text style={styles.topBarText}>
             {route.name || 'Labs'}
          </Text>
        </View>

      )
   }
};

const styles = StyleSheet.create({
   navigationBar: {
      backgroundColor: '#2c3e50',
   },
   leftButton: {
     flex:1,
   },
   title: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
   },
   topBarText:{
       color: 'white',
       fontSize: 18,
       fontWeight:'bold',
   },
   rightButton: {
      color: 'white',
      margin: 10,
      fontSize: 16
   },
   container1: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     flex: 1
   },
   TouchableOpacity:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'center',

   }
})
