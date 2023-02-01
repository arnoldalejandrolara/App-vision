import { View, Text} from 'react-native';
import { Navbar } from './Navbar';
import { StyleSheet, FlatList } from 'react-native';
import { Card } from './Contact_Card';
import { FlashList } from '@shopify/flash-list';

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
      },
      container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingTop: 35
      },
});


const CLIENT = [
  {
    icon: './img/user_photo.png',
    name: "Luis Felipe Hernandez Felix",
    phone: "+52 833-855411",
    email: "Luis_Felipe@gmail.com",
    followUpDate: "15/12/2022",
    followUp: "Se envió correo de notificación para reunión presencial.",
    prospect: "Viable"
  },
  {
    icon: "./img/user_photo2.png",
    name: "Maria Josefa Gomez Perez",
    phone: "+52 833-7526985",
    email: "Alberto_Santiago@gmail.com",
    followUpDate: "15/12/2022",
    followUp: "Llamada de seguimiento.",
    prospect: "Cliente"
  },
  {
    icon: './img/user_photo.png',
    name: "Luis Felipe Hernandez Felix",
    phone: "+52 833-855411",
    email: "Luis_Felipe@gmail.com",
    followUpDate: "15/12/2022",
    followUp: "Se envió correo de notificación para reunión presencial.",
    prospect: "Cliente"
  },
  {
    icon: "./img/user_photo2.png",
    name: "Maria Josefa Gomez Perez",
    phone: "+52 833-7526985",
    email: "Alberto_Santiago@gmail.com",
    followUpDate: "15/12/2022",
    followUp: "Llamada de seguimiento.",
    prospect: "No Viable"
  },
  {
    icon: './img/user_photo.png',
    name: "Luis Felipe Hernandez Felix",
    phone: "+52 833-855411",
    email: "Luis_Felipe@gmail.com",
    followUpDate: "15/12/2022",
    followUp: "Se envió correo de notificación para reunión presencial.",
    prospect: "Viable"
  },
  {
    icon: "./img/user_photo2.png",
    name: "Maria Josefa Gomez Perez",
    phone: "+52 833-7526985",
    email: "Alberto_Santiago@gmail.com",
    followUpDate: "15/12/2022",
    followUp: "Llamada de seguimiento.",
    prospect: "Prospecto"
  },
  {
    icon: './img/user_photo.png',
    name: "Luis Felipe Hernandez Felix",
    phone: "+52 833-855411",
    email: "Luis_Felipe@gmail.com",
    followUpDate: "15/12/2022",
    followUp: "Se envió correo de notificación para reunión presencial.",
    prospect: "Viable"
  },
  {
    icon: "./img/user_photo2.png",
    name: "Maria Josefa Gomez Perez",
    phone: "+52 833-7526985",
    email: "Alberto_Santiago@gmail.com",
    followUpDate: "15/12/2022",
    followUp: "Llamada de seguimiento.",
    prospect: "Contacto"
  },
  {
    icon: './img/user_photo.png',
    name: "Luis Felipe Hernandez Felix",
    phone: "+52 833-855411",
    email: "Luis_Felipe@gmail.com",
    followUpDate: "15/12/2022",
    followUp: "Se envió correo de notificación para reunión presencial.",
    prospect: "Viable"
  },
  {
    icon: "./img/user_photo2.png",
    name: "Maria Josefa Gomez Perez",
    phone: "+52 833-7526985",
    email: "Alberto_Santiago@gmail.com",
    followUpDate: "15/12/2022",
    followUp: "Llamada de seguimiento.",
    prospect: "Cliente"
  },
]

export function Menu(){
    return( 
      <View style={styles.container}>

        <Navbar />

       
        <FlashList
          data={CLIENT}
          renderItem={({ item }) => 
              <Card icon={item.icon} name={item.name} phone={item.phone} email={item.email} followUpDate={item.followUpDate} followUp={item.followUp} prospect={item.prospect}/>
                      }
          estimatedItemSize={85}
        />
    

      </View>
    );
  }