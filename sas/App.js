/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView} from 'react-native';
import {
  Header,
  Content,
  Container,
  Right,
  Left,
  Body,
  Button,
  Title,
  Icon,
  Form,
  Item,
  Input,
  Label,
  Spinner
} from 'native-base'
var ImagePicker = require('react-native-image-picker');
type Props = {};
export default class App extends Component<Props> {
  constructor (props) {
    super(props)
    this.state ={
      name:'',
      crops:'',
      variety:'',
      size:'',
      coordinates:'',
      organzation:'',
      group:'',
      community:'',
      lga:'',
      state:'',
      phone:'',
      gender:'',
      age:'',
      bvn:'',
      farmImage:''
    }
  }
  async saveEntry () {
    this.setState({loading:true})
    var data = {
      name:this.state.name,
      crops:this.state.crops,
      variety:this.state.variety,
      size:this.state.size,
      coordinates:this.state.coordinates,
      organzation:this.state.organzation,
      group:this.state.group,
      community:this.state.community,
      lga:this.state.lga,
      state:this.state.state,
      phone:this.state.phone,
      gender:this.state.gender,
      age:this.state.age,
      bvn:this.state.bvn
    }
    fetch('https://afridash.com/sas/saveToMysql.php', {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
    }).then(response => response.json()).then((res)=>{
      if (res.success === '1') {
        this.setState({
          name:'',
          crops:'',
          variety:'',
          coordinates:'',
          organzation:'',
          size:'',
          group:'',
          bvn:'',
          age:'',
          phone:'',
          loading:false
        })
      }else{
        alert("Error saving")
        this.setState({loading:false})
      }

        }).catch(error => {
          this.setState({loading:false})
          alert("Error could not save")
      })
  }
  _pickImage = async () => {
    var options = {
      title: 'Select Profile Picture',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    ImagePicker.launchCamera(options, (response)  => {
        if (response.didCancel) {
        }
        else if (response.error) {
        }
        else {
          //let source = { uri: response.uri }
          let source = { uri: 'data:image/jpeg;base64,' + response.data }
          this.setState({
            farmImage: source.uri
          })
        }
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Header>
          <Body>
            <Title>Smart Agric System</Title>
          </Body>
        </Header>
        <ScrollView>
          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input value={this.state.name} onChangeText={(name)=>this.setState({name})} />
            </Item>
            <Item floatingLabel last>
              <Label>Crops Produced</Label>
              <Input value={this.state.crops} onChangeText={(crops)=>this.setState({crops})} />
            </Item>
            <Item floatingLabel last>
              <Label>Crop Variety</Label>
              <Input value={this.state.variety} onChangeText={(variety)=>this.setState({variety})} />
            </Item>
            <Item floatingLabel last>
              <Label>Farm Size</Label>
              <Input value={this.state.size} onChangeText={(size)=>this.setState({size})} />
            </Item>
            <Item floatingLabel last>
              <Label>Farm Co-ordinates</Label>
              <Input value={this.state.coordinates} onChangeText={(coordinates)=>this.setState({coordinates})} />
            </Item>
            <Item floatingLabel last>
              <Label>Cooperative Group</Label>
              <Input value={this.state.group} onChangeText={(group)=>this.setState({group})} />
            </Item>
            <Item floatingLabel last>
              <Label>Organization</Label>
              <Input value={this.state.organzation} onChangeText={(organzation)=>this.setState({organzation})} />
            </Item>
            <Item floatingLabel last>
              <Label>State</Label>
              <Input value={this.state.state} onChangeText={(state)=>this.setState({state})} />
            </Item>
            <Item floatingLabel last>
              <Label>LGA</Label>
              <Input  value={this.state.lga} onChangeText={(lga)=>this.setState({lga})} />
            </Item>
            <Item floatingLabel last>
              <Label>Community</Label>
              <Input value={this.state.community} onChangeText={(community)=>this.setState({community})} />
            </Item>
            <Item floatingLabel last>
              <Label>Phone</Label>
              <Input value={this.state.phone} onChangeText={(phone)=>this.setState({phone})} />
            </Item>
            <Item floatingLabel last>
              <Label>Gender</Label>
              <Input value={this.state.gender}  onChangeText={(gender)=>this.setState({gender})} />
            </Item>
            <Item floatingLabel last>
              <Label>Age</Label>
              <Input value={this.state.age} onChangeText={(age)=>this.setState({age})} />
            </Item>
            <Item floatingLabel last>
              <Label>BVN</Label>
              <Input value={this.state.bvn} onChangeText={(bvn)=>this.setState({bvn})} />
            </Item>
            <Button style={{margin:10}} onPress={this._pickImage}><Text>Take a picture</Text></Button>
          </Form>
          <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row', marginTop:20}}>
            {this.state.loading ? <Spinner primary /> : <Button onPress={()=>this.saveEntry()} primary><Text style={{padding:10, color:'white'}}> Save </Text></Button>}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
