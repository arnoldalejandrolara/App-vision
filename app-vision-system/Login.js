import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import  { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable, Image, Button } from 'react-native';
import { Header } from './Header';

export function Login({ navigation }){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function req() {
    let xmls = `<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                               xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                              xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
                  <soap:Body>
                    <APP_InitSession xmlns="http://localhost/">
                     <Empresa>${empresa}</Empresa>
                      <Login>${username}</Login>
                      <Password>${password}</Password>
                    </APP_InitSession>
                  </soap:Body>
                </soap:Envelope>`;

 axios.post('https://obramovil.lat/WSTest/VSControlTotalWS.asmx',
    xmls,
    {
      headers:
        { 'Content-Type': 'text/xml' }
    }).then(res => {
      console.log(res)
      alert(res)
    }).catch(err => { alert(res) });
}

function menu() {
  let xmls = `<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema" 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">

  <soap:Body>
    <APP_GetClientesMovil xmlns="http://localhost/">
      <Empresa>${empresa}</Empresa>
    </APP_GetClientesMovil>
  </soap:Body>
</soap:Envelope>`;

axios.post('https://obramovil.lat/WSTest/VSControlTotalWS.asmx',
  xmls,
  {
    headers:
      { 'Content-Type': 'text/xml' }
  }).then(res => {
    console.log(res)
    alert(res)
  }).catch(err => { alert(res) });
}

    return(
        <View style={styles.container}>
        <Header />
        <Text style={styles.text}>Vamos a iniciar sesión.{'\n'} Bienvenido de nuevo.
        </Text>

        <TextInput
          placeholder='Empresa'
          value={empresa}
          onChangeText={setEmpresa}
          style={styles.input}>
        </TextInput>

        <TextInput
          placeholder='Usuario'
          value={username}
          onChangeText={setUsername}
          style={styles.input}>
        </TextInput>

        <TextInput placeholder='Contraseña'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}>
        </TextInput>

        <Pressable style={styles.buttonIngresar} onPress={() => navigation.navigate('Menu')}>

          <Button title="Iniciar sesión" onPress={menu}
           />

        </Pressable>

        <Text style={styles.footer}>Derechos Reservados @vision Systems de mexico S.A. de C.V. </Text>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#B1A4A1',
    alignItems: 'center',
    //justifyContent: 'top',
    paddingTop: 45
  },
  text: {
    fontSize: 25,
    color: '#423939',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  input: {
    marginTop: 30,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 13,
    color: '#645C5C',
    fontSize: 15,
    textAlign: 'center',
    width: 260,
    height: 50,
    backgroundColor: '#D8D6D6',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4
  },
  buttonIngresar: {
    marginTop: 150,
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
    fontSize: 10,
    textAlign: 'center',
  },
  buttonLabel: {
    fontSize: 18,
  },
  icon: {
    width: 10,
    height: 10,
  },
});