import {View, Text, StyleSheet} from 'react-native';

const Setting = () => {
  return(
    <View style = {styles.contianor}>
    <Text style = {styles.text}>Setting</Text>
    </View>
  );
};

export default Setting;

const styles  = StyleSheet.create({
  contianor : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  }
})