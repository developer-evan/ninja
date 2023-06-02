<!-- useState -->
// import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  const [name, setName]=useState('Ivan');
  const [person, setPerson] =useState({name:'Engineer' , age:25});

  const clickHandler=()=>{
    setName('Mogeni');
    setPerson({name:'Moh', age:28})
  }
  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>my name is {person.name} and am {person.age} years old</Text>
      <Text></Text>
      <View style={styles.buttonContainer}>
        <Button title='Update Name' onPress={clickHandler}/>
      </View>
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
  }
});
