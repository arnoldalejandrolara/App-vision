
import { View} from 'react-native';
import { Navbar } from './Navbar';
import { MyList } from './List';
import { StyleSheet } from 'react-native';

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
});

export function Menu(){
    return( 
     
    <View style={styles.container}>

        <Navbar/>
        
    </View>
          
    );
  }
  
