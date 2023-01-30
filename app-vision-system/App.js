import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable, Image , Button} from 'react-native';
import { Header } from './header';
import Input from './textInput';
import soap from 'react-native-soap';




export default function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const url = "http://localhost/APP_InitSession";
  const request = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <APP_InitSession xmlns="http://localhost/">
        <Login>string</Login>
        <Password>${password}</Password>
        <Empresa>${username}</Empresa>
      </APP_InitSession>
    </soap:Body>
  </soap:Envelope>`


const handleLogin = () => {
  soap.createClient(url, (err, client) => {
    client.Login({ username, password }, (err, result) => {
      if (err) {
        setErrorMessage('Error al iniciar sesión');
      } else {
        // El resultado de la petición SOAP indica si el inicio de sesión fue exitoso o no
        // Puedes modificar este código para manejar la respuesta adecuadamente
        console.log(result);
      }
    });
  });
};



  return (
    <View style={styles.container}>

      <Header/>

      <Text style={styles.text}>Vamos a iniciar sesión.{'\n'} Bienvenido de nuevo.
      </Text>

      <TextInput 
      placeholder='Empresa'  
      value={username}
      onChangeText={setUsername} 
      style={styles.input}>
      </TextInput>

      <Input label="Usuario" />

      <TextInput placeholder='Contraseña'   
      value={password}
      onChangeText={setPassword}
      secureTextEntry 
      style={styles.input}>
      </TextInput>


    <Pressable style={styles.buttonIngresar} onPress={() => alert('Hola '+ username +' tu contraseña es '+ password)}>

      <Button title="Iniciar sesión" onPress={handleLogin} />

      </Pressable>

      <Text style={styles.footer}>Derechos Reservados @vision Systems de mexico S.A. de C.V. </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B1A4A1',
    alignItems: 'center',
    //justifyContent: 'top',
    paddingTop:45
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  input: {
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 13,
    color: '#645C5C',
    fontSize: 15,
    textAlign: 'center',
    width: 260,
    height: 50,
    backgroundColor: '#D8D6D6'
  },
  buttonIngresar: {
    marginTop: 200,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 13,
    width: 280,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#50A9C6'
  },
  footer: {
    paddingTop: 15,
    fontSize: 10,
  },
  buttonLabel: {
    fontSize: 18,
  },
  icon: {
    
    width: 10,
    height: 10,
  }
});