import {View, Text, StyleSheet, TextInput, } from 'react-native';
import Button from '../Component/Button';


const Reset = (props) => {
  return(
    <View style = {styles.container}>
    <Text style = {{fontSize: 30, fontWeight: 'bold'}}>Reset Password</Text>
    <Text style = {{fontSize: 10, marginTop: 10}}>At least 9 characters with uppercase and lowercase letters </Text>
     

    <Text style = {styles.new}>New Password</Text>
             <TextInput style={styles.input} placeholder= '**********' />

             <Text style = {styles.conf}>Confirm Password</Text>
             <TextInput style={styles.input2} placeholder= '**********' />
             <Button title = 'DONE' onPress = {() => props.navigation.navigate('Dash1')} />
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
  },
  
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#d9d9d9',
    backgroundColor: 'white',
    },
    input2: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#d9d9d9',
    backgroundColor: 'white',
    marginBottom: 20,
    },
    new: {
       
        alignSelf: 'flex-start',
        marginLeft: 35,
        marginTop: 50,
    },
    conf: {
        alignSelf: 'flex-start',
        marginLeft: 35,
        marginTop: 20
    },
    });
    export default Reset;