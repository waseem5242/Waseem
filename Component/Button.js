import {Pressable, Text, StyleSheet} from 'react-native';

const Button = (props) => {
  return(
    <Pressable style = {props.fill ? styles.buttonFill : styles.button} onPress = {() => props.onPress()}>
    <Text style = {props.fill ? styles.textFill : styles.text}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({

  button : {
     height: 50,
    width: 150,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonFill: {
    height: 50,
    width: 150,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'black',
  },
  text: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  textFill: {
    color:'white',
    alignSelf: 'center',
    fontWeight: 'bold',
  }
});

export default Button;