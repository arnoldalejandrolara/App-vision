import { Header } from './Header';
import { StyleSheet } from 'react-native';
import { View,Image , Text} from 'react-native';

export function Menu(){
    return( 
        <View style={styles.container}>

        <Image style={styles.menu} source={require('./img/menu.png')}></Image>
        <Text style={styles.title}>Contactos y clientes</Text>
        <Image style={styles.sort} source={require('./img/sort.png')}></Image>
        <Image style={styles.filter} source={require('./img/filter.png')}></Image>

        </View>
        
        );
  }
  

  const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#B1A4A1',
        alignItems: 'center',
        //justifyContent: 'top',
        paddingTop: 45
    },
    menu:{
        height:35,
        width:35,
        right:170,
    },
    title:{
        fontSize:16,
        right:68,
        bottom:28,
        fontWeight:'bold',
        color:'white',
    },
    sort:{
        height:38,
        width:38, 
        bottom:55,
        left:120,
    },
    filter:{
        height:35,
        width:35, 
        bottom:90,
        left:160,
    }
});
  