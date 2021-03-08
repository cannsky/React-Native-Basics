import React, {useState} from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count1: 0,
      count2: 0
    };
  }
  render(){
    return(
      <View style={{flex: 1}}>
        <View style={{justifyContent: 'center', alignItems:'center', flex: 1}}>
          <Text style={{fontSize: 20, color: 'gray', }}>App Name</Text></View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: 17, fontFamily: 'Arial', color: 'blueviolet', marginBottom: 5}}>10</Text>
            <Text>Sold: {this.state.count1}</Text>
            <View style={{marginTop: 10, width: 100}}><Button color="red" title="Buy" onPress={ () => this.setState({count1: this.state.count1 + 1})}></Button></View>
          </View>
          <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
           <Text style={{fontSize: 17, fontFamily: 'Arial', color: 'blueviolet', marginBottom: 5}}>25</Text>
            <Text>Sold: {this.state.count2}</Text>
            <View style={{marginTop: 10, width: 100}}><Button color="red" title="Buy" onPress={ () => this.setState({count2: this.state.count2 + 1})}></Button></View>
          </View>
        </View>
        <View style={{flex: 1, alignItems:'center', justifyContent:'flex-end'}}>
        <Text style={{marginBottom: 10}}>Developed by <Text style={{color: 'lightseagreen', fontWeight: 'bold'}}>MACSEC</Text></Text>
        </View>
      </View>
    );
  }
}
