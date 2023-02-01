import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable, Image, Button } from 'react-native';
import { Header } from './Header';

export function Login({ navigation }){

  const [username, setUsername] = useState(7);
  const [password, setPassword] = useState(0);
  const [empresa, setEmpresa] = useState("TERRNZA");
  const [busqueda, setBusqueda] = useState("");
  const [medio,setMedio] = useState(0);
  const [nicho,setNicho] = useState(0);
  const [empresaid,setEmpresaid]=useState(0);
  const [promocion,setPromocion]=useState(0);
  const [fechapros1,serFechapros1]=useState("");
  const [fechapros2,serFechapros2]=useState("");
  const [revision1,setRevision1] = useState("");
  const [revision2,setRevision2] = useState("");
  const [imss,setImss] = useState("");
  const [claveinter,setClaverinter] = useState("");
  const [clavebanc,setClavebanc] = useState("");
  const [instbanc,setInstbanc] = useState("");
  const [prospecto,setProspecto] = useState(0);


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
      <Busqueda>${busqueda}</Busqueda>
      <IdEmpresa>${empresaid}}</IdEmpresa>
      <IdMedio>${medio}</IdMedio>
      <IdNicho>${nicho}</IdNicho>
      <IdPromotor>${username}</IdPromotor>
      <IdPromocion>${promocion}</IdPromocion>
      <FechaDeProspectacion1>${fechapros1}</FechaDeProspectacion1>
      <FechaDeProspectacion2>${fechapros2}</FechaDeProspectacion2>
      <FechaDeRevision1>${revision1}</FechaDeRevision1>
      <FechaDeRevision2>${revision2}</FechaDeRevision2>
      <NumeroImss>${imss}</NumeroImss>
      <ClabeInterbancaria>${claveinter}</ClabeInterbancaria>
      <CuentaBancaria>${clavebanc}</CuentaBancaria>
      <InstitucionBancaria>${instbanc}</InstitucionBancaria>
      <TipoDeProspecto>${prospecto}</TipoDeProspecto>
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