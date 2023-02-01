import { Text, View, Pressable, Image, StyleSheet} from 'react-native'
import { useFonts } from 'expo-font';


export function Card( props ) {
    const text = props.prospect;

    const [fontsLoaded] = useFonts({
        'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
        'Inter': require('./assets/fonts/Inter.ttf'),
    });

    return (

        <View style={styles.cardContainer}>
            <Image style={styles.clientPhoto} source={require('./img/user_photo.png')}/>

            <Text style={[styles.clientDesc]}>
                {props.name}{'\n'}
                <Text style={{fontSize: 10}}>
                    {props.phone}{'\n'}
                    {props.email}{'\n'}
                </Text>
                <Text style={{fontSize: 9, lineHeight: 12}}>
                    <Text style={{fontWeight: 'bold', color: '#000'}}>Último seguimiento:</Text> ({props.followUpDate}) {props.followUp}
                </Text>
            </Text>
            
            <Text 
                style={[styles.tipo, {fontFamily: 'Inter-Black'}, (props.prospect == 'Viable') ? {color: '#07530F'} : (props.prospect == 'Cliente') ? {color: '#0650A8'} : (props.prospect == 'No Viable') ? {color: '#A90404'} : (props.prospect == 'Prospecto') ? {color: '#FF4D01'} : (props.prospect == 'Contacto') ? {color: '#DBC502'} : {color: '#000'} ]}>
                    {props.prospect}
            </Text>
        </View>

    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        marginBottom: 2,
        alignItems: 'center',
        paddingHorizontal: 10,
        width: '100%',
        height: 83,
        backgroundColor: '#EEEEEE',
    },
    clientPhoto: {
        width: 58,
        height: 58,
    },
    clientDesc: {
        width: '65%',
        lineHeight: 14,
        paddingLeft: 10,
        paddingRight: 5,
        fontSize: 11,
        color: '#655757',
    },
    tipo: {
        width: '20%',
        fontSize: 10,
        textAlign: 'right',
        paddingRight: 5
    }
});