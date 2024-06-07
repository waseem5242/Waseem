import {View, Text, StyleSheet, TextInput} from 'react-native';
import Button from '../Component/Button';

const Dash1 = (props) => {
  return(
    <View style = {styles.container}>
    <TextInput style = {styles.circle} />
    <TextInput style = {styles.circle2} />
    <Text style= {{fontSize: 23}}>Your Password has been updated </Text>
    <Text style= {{fontSize: 23, marginBottom: 20}}>Successfully!</Text>

    <Button title = 'DONE' onPress = {() => props.navigation.navigate('DashBoard')}/>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
        alignItems: 'center',
        marginTop: 40,
  },
  circle: {
  height: 325,
    width: 330,
    margin: 12,
    borderWidth: 1,
    borderRadius: 165,
    borderColor: '#EDE9E9',
    backgroundColor: '#EDE9E9',
    
},
circle2: {
  height: 320,
    width: 320,
    margin: 12,
    borderWidth: 1,
    borderRadius: 160,
    borderColor: '#a3a3a3',
    backgroundColor: '#d9d9d9',
    position: 'absolute'
}
  });
    export default Dash1;