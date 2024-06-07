import {View, Text, StyleSheet} from 'react-native'

const Profile = () => {
  return(
    <View style = {styles.contianor}>
    <Text style = {styles.text}>Profile</Text>
    
    </View>
  );
};

export default Profile;

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