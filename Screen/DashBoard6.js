import {View, Text, TextInput, StyleSheet} from 'react-native';
import CustomButton from '../Component/CustomButton';

const DashBoard6 = (props) => {
  return(
    <View>
    
    <View style = {{width: 342, height: 97, backgroundColor: '#D9D9D9', borderRadius: 20, alignSelf: 'center', marginTop: 7, position: 'absolute'}}></View>

<View style = {{flexDirection:'row', justifyContent: 'space-around'}}>
<TextInput style = {styles.circle}  />
<Text style = {{color: 'white', marginLeft: -117, marginTop: 40,}}>1</Text>


<TextInput style = {styles.circle}  />
<Text style = {{color: 'white',marginLeft: -117, marginTop: 40,}}>2</Text>


<TextInput style = {styles.circle}  />
<Text style = {{color: 'white',marginLeft: -117, marginTop: 40,}}>3</Text>

</View>

<Text style = {styles.text} onPress = {() => props.navigation.navigate('DashBoard7')}>Select Payment Method</Text>

<TextInput style = {styles.input} placeholder= '    Name Here' />
<TextInput style = {styles.input2} placeholder= '   Card Number' />
<View style = {{flexDirection: 'row', alignSelf: 'center'}}>
<TextInput style = {styles.input3} placeholder= '   CVC Number' />
<TextInput style = {styles.input4} placeholder= '   Expiry Date' />
</View>

<Text style = {styles.text2}>
Lorem ipsum dolor sit amet consectetur. Nec eget accumsan molestie proin. Integer rhoncus vitae nisi natoque ac mus tellus scelerisque gravida. Consectetur aliquet sit at diam. Augue eu mauris suspendisse adipiscing nibh. Nibh lorem id eu suspendisse nulla leo hendrerit. Erat tortor commodo quam 
fames et molestie.</Text>

<CustomButton />
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    height: 40,
    width: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#a3a3a3',
    backgroundColor: 'black',
    marginTop: 30,
  },
  text: {
    fontSize: 22,
    marginTop: 35,
    marginLeft: 10,
  },
  input: {
    borderWidth: 1,
    marginLeft: 10,
    height: 60,
    width: 300,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
    borderColor: '#a3a3a3',
    backgroundColor: '#D9D9D9'
  },
  input2: {
    borderWidth: 1,
    marginLeft: 10,
    height: 60,
    width: 300,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 30,
    borderColor: '#a3a3a3',
    backgroundColor: '#D9D9D9'
  },
  input3: {
    borderWidth: 1,
    marginLeft: 10,
    height: 60,
    width: 145,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 30,
    borderColor: '#a3a3a3',
    backgroundColor: '#D9D9D9'
  },
  input4: {
    borderWidth: 1,
    marginLeft: 10,
    height: 60,
    width: 145,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 30,
    borderColor: '#a3a3a3',
    backgroundColor: '#D9D9D9'
  },
  text2: {
    textAlign: 'center',
    fontSize: 14,
    color: '#d9d9d9',
    marginTop: 50,
    marginBottom: 40,
  }
})
export default DashBoard6;