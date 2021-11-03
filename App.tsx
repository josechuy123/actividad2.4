import React, { useState } from 'react'
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

const App = () => {

  const [Nombre, SetNombre] = useState('');
  const [LuckyNumber, setLuckyNumber] = useState(0);

  const nombreAndNumberInput = () =>{

    if (LuckyNumber == 0  ) {
      Alert.alert('Your age can not be 0 or negative age');
      return;
    }
    if (Nombre === '' ) {
      Alert.alert('Please enter your name ');
        return;
    }

    if (LuckyNumber > 0 && LuckyNumber < 10) {

      var aux = LuckyNumber
      var multiplicated = aux * 7
      var result = 0

      while (multiplicated > 0) {
          result += Math.trunc(multiplicated % 10)
          multiplicated = multiplicated / 10
      }

        console.log(result)
        Alert.alert(`Hello ${Nombre} your lucky number is: ${result}`)

    } else {
        var aux = LuckyNumber
        var result = 0

        while (aux > 0) {
            result = result + aux % 10
            aux = aux / 10
        }
          console.log(aux)
          Alert.alert(`Hello ${Nombre} your lucky number is: ${Math.trunc(result)}`)
    }
  }

  return (
      <View style={styles.Container}>
      <Image
        style={styles.tinyLogo}
        source={require('./src/img/numero.jpg')}
      />
      <Text style={styles.Text}>Put your age</Text>

      <TextInput
        style={styles.input}
        placeholder="Put your Age"
        keyboardType="numeric"
        onChangeText={number => setLuckyNumber(parseInt(number, 10))}
      />

      <Text style={styles.Text}>Put your name</Text>

      <TextInput
        style={styles.input}
        placeholder="Put your name"
        onChangeText={name => SetNombre(name)}
      />

        <Button
            onPress={(nombreAndNumberInput)}
            title="Lucky number"
            color="blue"
            accessibilityLabel="Lucky number"
        />
      </View>
)}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#ddd',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    margin:20,
    height: 40,
    width: 250,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15
  },
  Text:{
    fontSize: 20,
    fontWeight:'700',
    letterSpacing: 2
  },
  tinyLogo: {
    margin:50,
    width: 250,
    height: 150,
    marginTop: 30,
    resizeMode: 'stretch',
    borderRadius: 20
  }
});


export default App
