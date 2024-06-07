import {View, Text, StyleSheet, TextInput, } from 'react-native';
import Button from '../Component/Button';
import {getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

const Reset = (props) => {
const auth = getAuth();
const [email, setEmail] = useState();
const [password, setPassword] = useState();

  const onSignupPressed = () => {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    }) ;
  };
  return(
    <View style = {styles.container}>
    <Text style = {{fontSize: 30, fontWeight: 'bold'}}>Sign Up</Text>
    <Text style = {{fontSize: 10, marginTop: 10}}>Create an account to begin your Learning Journey </Text>
     

             <Text style = {styles.new}>Full Name</Text>
             <TextInput
             onChangeText={t => setEmail (t)}
              style={styles.input} placeholder= 'YourNameHere' />

             <Text style = {styles.conf}>Email</Text>
             <TextInput style={styles.input2} placeholder= 'YourEmailHere' />

             <Text style = {styles.new2}>Password</Text>
             <TextInput style={styles.input} placeholder= '************' />

             <Text style = {styles.conf2}>Confirm Password</Text>
             <TextInput style={styles.input2} placeholder= '************' />

             <Button title = 'SIGN UP' onPress = {() => props.navigation.navigate('Dash1' , onSignupPressed)}/>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'black', marginTop:15}} />
            <View>
            <Text style={{width: 110, textAlign: 'center', marginTop:15}}>or Sign Up with</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'black', marginTop:15}} />
          </View>
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
    new2: {
       
        alignSelf: 'flex-start',
        marginLeft: 35,
        
    },
    conf2: {
        alignSelf: 'flex-start',
        marginLeft: 35,
        marginTop: 20
    },
    });
    export default Reset;