import React, {Component} from 'react';
import { 
  StyleSheet, Text,
  View, StatusBar,
  TextInput, Dimensions,
  Platform, 
  ScrollView} from 'react-native';
import ToDo from './ToDo';

const { height, width } = Dimensions.get("window");

export default class App extends Component {  
  
  state = { 
    newToDo: ""
  }

  render(){
    const { newToDo } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.title}>Kawai To Do</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} 
          placeholder={"New to do"}
          value={newToDo}
          onChangeText={this.controlNewToDo}
          placeholderTextColor={"#999"}
          returnKeyType={"done"}
          autoCorrect={false}
          onChangeText ={this.controlInput}
          />
          <ScrollView contentContainerStyle={styles.toDos}>
            <ToDo text={"fuck you"}/>
          </ScrollView>
        </View>
      </View>
    );
  }
  controlNewToDo = text => {
    this.setState({
      newToDo: text
    });
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30,
    marginTop: 50,
    fontWeight: "200",
    marginBottom: 30
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios:{
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android:{
        elevation: 3
      }
    })
  },
  input: {
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 25
  },
  toDos:{
    alignItems:"center"

  }
});
