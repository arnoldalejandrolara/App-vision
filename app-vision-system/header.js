import { Image, View , StyleSheet ,Text} from 'react-native'


const styles = StyleSheet.create({

    tinyLogo: {
      width: 45,
      height: 55,
      right:35
    },
    logo: {
      width: 130,
      height: 55,
      left:30
    },
    header :{
        flexDirection: 'row',
        paddingBottom: 50
    },
    title:{
        right:30,
        top:8,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 12
    }
  });

export function Header() {
    return (
        <View style={styles.header}>
            <Image style={styles.tinyLogo} source={require('./img/logo_control.png')}></Image>
            <Text style={styles.title}>VSControl Total{'\n'}<Text style={styles.subtitle}>[2023.1.108]</Text></Text>
            <Image style={styles.logo} source={require('./img/logo_controlERP.png')}></Image>
        </View>
    )
}

