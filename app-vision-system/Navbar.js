import { Image, View , StyleSheet ,Text} from 'react-native'

const styles = StyleSheet.create({
    menu: {
      width: 33,
      height: 33,
    },
    sort: {
      width: 28,
      height: 28,
    },
    header :{
        flexDirection: 'row',
        width: '100%',
        //marginLeft: 30,
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor:'#151B24',
        justifyContent: 'space-between'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 16,
        paddingLeft: 20,
        color:'white',
    },
    subtitle: {
        fontSize: 12
    },
    filter:{
        width: 28,
        height: 28,
        marginLeft: 45
    }
  });

export function Navbar() {
    return (
        <View style={styles.header}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image style={styles.menu} source={require('./img/menu.png')}></Image>
                <Text style={styles.title}>Contactos y clientes</Text>
            </View>
            <Image style={styles.filter} source={require('./img/filter.png')}></Image>
            <Image style={styles.sort} source={require('./img/sort.png')}></Image>
        </View>
    )
}

