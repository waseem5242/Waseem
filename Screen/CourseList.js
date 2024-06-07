import {View, Text, StyleSheet} from 'react-native';

const CourseList = () => {
  return(
    <View style = {styles.contianor}>
    <Text style = {styles.text}>CourseList</Text>
    </View>
  );
};

export default CourseList;

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