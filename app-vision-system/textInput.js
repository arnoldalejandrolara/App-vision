import { StyleSheet, View, Pressable, Image, TextInput } from 'react-native';

export default function Input({ label }) {
    return (
        <View
            style={[styles.buttonContainer]}
        >
            <Pressable
                style={[styles.button]}
            >
                <Image source={require('./img/user.png')} style={styles.buttonIcon}></Image>
                <TextInput placeholder={label} style={styles.textInput}/>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 260,
    height: 50,
    backgroundColor: '#D8D6D6',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderRadius: 13
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    flex: 1,
    width: 20,
    height: 20,
    paddingRight: 1,
    resizeMode: 'contain'
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
  textInput: {
    paddingRight: 140,
  }
});