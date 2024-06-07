import {View, TextInput, Text, StyleSheet} from "react-native";

const TextInput1 = (props) => {
  return(
    <View  style = {styles.container}>
    <TextInput  style = {styles.input1} placeholder= 'UI/UX' />
    <TextInput style = {styles.input2} placeholder= 'Graphics Design' />
    <TextInput style = {styles.input3} placeholder= 'Figma' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  input1: {
    borderRadius: 30,
    color: '#d9d9d9',
    borderWidth: 1,
    width: 50,
    textAlign : 'center'
  },
   input2: {
    borderRadius: 30,
    color: '#d9d9d9',
    borderWidth: 1,
    width: 110,
    textAlign : 'center',
    marginLeft: 10,
    marginRight: 10,
  },
   input3: {
    borderRadius: 30,
    color: '#d9d9d9',
    borderWidth: 1,
    width: 50,
    textAlign : 'center'
  }
});
export default TextInput1;
