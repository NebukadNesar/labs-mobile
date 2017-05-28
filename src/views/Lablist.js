import React, {Component} from 'react';
import renderIf from '../buttons/renderif';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import { BackHandler } from 'react-native';

import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Alert,
  ListView,
  Icon,
  AsyncStorage,
  ToastAndroid
} from 'react-native';

import Button from '../buttons/Button';
import Back from '../buttons/Back';
import Details from './Details'

export default class Lablist extends Component{

  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
      status:false,
      rowData:""
    };
  }

  //use android backhandler instead
  componentWillUnmount() {
    BackHandler.removeEventListener('backPress');
  }

  componentDidMount() {
    BackHandler.addEventListener('backPress');
    try {
     AsyncStorage.getItem("lablist").then((value) => {
       if(value !== null){
         this.setState({
           dataSource:this.state.dataSource.cloneWithRows(JSON.parse(value))
         });
       }
     });
   } catch (e) {
     Alert.alert("Retreive Error", 'Count not retreive the data from cache..')
   }
  }

  navigate(routename){
    this.props.navigator.push({
      name : routename
    })
  }

  saveData(value) {
    try {
     AsyncStorage.setItem("lablist", value);
     this.setState({"lablist": value});
   } catch (e) {  Alert.alert("Save Error", 'Count not save the data into cache..')  }
  }

  getAsyncLabList(){
    return fetch('http://192.168.1.23:3000/api/getAllServers')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        dataSource:this.state.dataSource.cloneWithRows(responseJson.serverList)
      })
      this.saveData(JSON.stringify(responseJson.serverList));
      ToastAndroid.showWithGravity('Refresh completed...', ToastAndroid.SHORT, ToastAndroid.CENTER);
    })
    .catch((error) => {
      ToastAndroid.showWithGravity('Could not get data from server.. :(', ToastAndroid.SHORT, ToastAndroid.CENTER);
      //Alert.alert('Network Failure', "Could not get data from server..");
    })
  }

  refreshList (args){
    this.getAsyncLabList();
  }

  toggleStatus(){
     this.setState({
       status:!this.state.status
     });
   }

  render(){
      return(
        <View style={styles.container1}>
          <View style={styles.listViewStyle}>
             {renderIf(this.state.status)(
               //renders the view it the status is true..
             <View style={styles.containerSearch}>
                 <Text style={styles.welcome}>
                   a search area might come here...
                 </Text>
               <TouchableHighlight onPress={()=>this.toggleStatus()}>
                 <Text>
                   close
                 </Text>
               </TouchableHighlight>
              </View>
              )}
            <ListView enableEmptySections={true}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            renderSeparator={this._renderSeparator}
            />
          </View>
          <View style={styles.footerView}>
            <TouchableOpacity onPress={this.navigate.bind(this, 'Search')} style={styles.footerViewSearch}>
               <Text style={styles.labsFooter}>
                 Search
               </Text>
               <Image
                 style={styles.refreshicon}
                 source={require('../images/search.png')}
               />
            </TouchableOpacity>
            <View>
              <Text>
                |
              </Text>
            </View>
            <TouchableOpacity onPress={() => {this.refreshList()}} style={styles.footerViewRefresh}>
              <Image
                  style={styles.refreshicon}
                  source={require('../images/refresh-icon.png')}
                />
               <Text style={styles.labsFooter}>
                 Refresh
               </Text>
            </TouchableOpacity>
          </View>
          <PopupDialog
            dialogTitle={<DialogTitle title={this.state.rowData.serverName} />}
            ref={(popupDialog) => { this.popupDialog = popupDialog; }}
            height={300}
            width={300}
            dismissOnHardwareBackPress={true}
            >
            <Details server={this.state.rowData} />
          </PopupDialog>
        </View>
      );
   }

   displayItemDetails(rowData){
     this.setState({rowData:rowData});
      this.popupDialog.show();
   }

   _renderRow (rowData: string, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
     return (
       <TouchableHighlight onPress={ () => this.displayItemDetails(rowData)  }>
           <View style={styles.row}>
             <View style={styles.icon}>
               <Image
                 style={styles.stretch}
                 source={require('../images/server.png')}
               />
             </View>
             <View style={styles.textParent}>
               <Text style={styles.text}>
                 Server: {rowData.serverName}
               </Text>
               <Text style={styles.text}>
                 IP: {rowData.serverIp}
               </Text>
             </View>
           </View>
         </TouchableHighlight>
       );
    }

   _pressRow (rowID: number) {
     console.log("Row number ", number);
   }

   _renderSeparator (sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
      return (
        <View
          key={`${sectionID}-${rowID}`}
          style={{
            height: adjacentRowHighlighted ? 4 : 1,
            backgroundColor: adjacentRowHighlighted ? 'rgba(52, 52, 52, 0.2)' : 'rgba(52, 52, 52, 0.8)',
          }}
        />
      );
    }
}


  const styles = StyleSheet.create({
    containerSearch:{
      backgroundColor:'red',
      flex:1
    },
    stretch: {
      width: 40,
      height: 40
    },
    container1: {
      flex:1,
      marginTop:15,
      backgroundColor: '#d35400',
      justifyContent: 'space-between',
    },
    container2:{
      flex:9,
      margin:10,
      borderColor:'#e67e22',
      backgroundColor: 'rgba(52, 52, 52, 0.2)'
    },
    labsControls:{
      flex:2,
      margin:10,
      borderColor:'#e67e22',
      backgroundColor: 'rgba(52, 52, 52, 0.2)'
    },
    refresh:{
      flex:1
    },
    footerViewRefresh:{
      flex:1,
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'center'
    },
    footerViewSearch:{
      flex:1,
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'center'
    },
    footerView:{
      flex:1,
      flexDirection: 'row',
      backgroundColor:'yellow',
      alignItems:'center',
      justifyContent:'center'
    },
    labsFooter:{
      fontSize:16,
      fontWeight:'bold',
      color:'#2c3e50'
    },
    listViewStyle:{
      flex:16,
      margin:4,
      paddingTop:40,
      borderColor:'#e67e22',
      backgroundColor: 'rgba(52, 52, 52, 0.2)'
    },
    PinButton: {
      flexDirection: 'row',
      backgroundColor: 'rgba(52, 52, 52, 0.4)',
      padding: 8,
      borderRadius: 6,
      justifyContent: 'space-between',
      alignSelf:'flex-end',
      width: 100
    },
    PinButtonText: {
      color: 'white',
      marginTop:3
    },
    PinButtonContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent:'center'
    },
    PinContent: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 8,
      paddingRight: 8,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: '#F6F6F6',
    },
    thumb: {
      width: 64,
      height: 64,
    },
    text: {
      flex: 3,
    },
    textParent: {
      flex: 6,
    },
    icon:{
      flex:1
    },
    refreshicon:{
      marginRight:5,
      marginLeft:5,
      height:30,
      width:30,
    }
  })
