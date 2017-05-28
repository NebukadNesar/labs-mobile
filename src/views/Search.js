import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
  ListView,
  Icon
} from 'react-native';
import SearchBar from 'react-native-searchbar';

export default class Search extends Component{
  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.serverIp !== r2.serverIp});
    this.state = {
      dataSource: ds.cloneWithRows([])
    };
  }
  componentDidMount(){
    this.searchBar.show();
  }
  searchFor(searchText){
    return fetch(`http://192.168.1.22:3000/getServerDetails/{$searchText}`)
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.success){
        this.setState({
          dataSource:this.state.dataSource.cloneWithRows(responseJson.serverDetails)
        })
      }else{
        Alert.alert('Network Failure', "There is nothing to get with `${searchText}`");
      }
     })
    .catch((error) => {
      Alert.alert('Network Failure', "Could not search for `${searchText}`, connection lost..");
    })
  }
  _handleResults(args){
    console.log(args);
  }
  render(){
    return(
      <View style={styles.container1}>
        <SearchBar
          ref={(ref) => this.searchBar = ref}
          handleResults={this._handleResults}
          showOnLoad
         />
         <View style={styles.serverDetails}>
           <Text style={this.state.textStyle}>
             {JSON.stringify(this.state.dataSource, null, 4)}
           </Text>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container1: {
     flex: 1,
     justifyContent: 'center',
     alignItems:'center',
     backgroundColor: 'yellow',
   },
   serverDetails:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:'blue'
   },
   textStyle:{
     fontSize:12,
     fontWeight:'bold'
   },
   searchBar:{
     height:40
   }
})
