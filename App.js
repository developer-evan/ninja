// import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
// import { Button } from 'react-native-web';

export default function App() {
  const [name, setName]=useState('Ivan');
  // const [person, setPerson] =useState({name:'Engineer' , age:25});
  const [age, setAge]=useState('30')

  // const clickHandler=()=>{
  //   setName('Mogeni');
  //   setPerson({name:'Moh', age:28})
  // }
  return (
    <View style={styles.container}>
      <Text>My name is {name} and am {age}</Text>
      {/* <Text>my name is {person.name} and am {person.age} years old</Text> */}
      <Text> Enter Name:</Text>
      <TextInput
      multiline

      style={styles.input}
      placeholder='e.g hunter'
      onChangeText={(val) => setName (val)}
      />
      <Text> Enter Age:</Text>
      <TextInput
      keyboardType='numeric'
      style={styles.input}
      placeholder='e.g 55'
      onChangeText={(val) => setAge(val)}
      />
      {/* <View style={styles.buttonContainer}>
        <Button title='Update Name' onPress={clickHandler}/>
      </View> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    marginTop:20,
  },
  input:{
    borderWidth:1,
    borderColor:'#000',
    color:'grey',
    padding:8,
    // height:'fit-content'
  }
});
