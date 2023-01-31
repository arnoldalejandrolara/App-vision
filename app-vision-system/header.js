import { Image, View , StyleSheet ,Text} from 'react-native'


const styles = StyleSheet.create({
    tinyLogo: {
      width: 45,
      height: 55,
    },
    logo: {
      width: 130,
      height: 55,
    },
    header :{
        flexDirection: 'row',
        width: '90%',
        //marginLeft: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 80,
    },
    title:{
        paddingLeft: 2,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 12
    }
  });

export function Header() {
    return (
        <View style={styles.header}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image style={styles.tinyLogo} source={require('./img/logo_control.png')}></Image>
                <Text style={styles.title}>VSControl Total{'\n'}<Text style={styles.subtitle}>[2023.1.108]</Text></Text>
            </View>
            <Image style={styles.logo} source={require('./img/logo_controlERP.png')}></Image>
        </View>
    )
}

