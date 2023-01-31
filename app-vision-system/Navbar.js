import { Image, View , StyleSheet ,Text} from 'react-native'


const styles = StyleSheet.create({
    menu: {
      width: 35,
      height: 35,
    },
    sort: {
      width: 35,
      height: 35,
      left:50,
    },
    header :{
        flexDirection: 'row',
        width: '95%',
        top:5,
        //marginLeft: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom:15,
        paddingTop:15,
        backgroundColor:'#151B24',
    },
    title:{
        paddingLeft: 5,
        marginBottom: 4,
        fontWeight: 'bold',
        fontSize:15,
        color:'white',
    },
    subtitle: {
        fontSize: 12
    },
    filter:{
    width: 30,
    height: 30,
    }
  });

export function Navbar() {
    return (
        <View style={styles.header}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image style={styles.menu} source={require('./img/menu.png')}></Image>
                <Text style={styles.title}>Contactos y clientes</Text>
            </View>
            <Image style={styles.sort} source={require('./img/sort.png')}></Image>
            <Image style={styles.filter} source={require('./img/filter.png')}></Image>

        </View>
    )
}

