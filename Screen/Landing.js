import {View,Text, StyleSheet} from 'react-native';
import SecondaryText from '../Component/SecondaryText';
import PrimaryText from '../Component/PrimartText';
import Button from '../Component/Button';

const Landing = (props) => {
  return (
    <View style = {styles.container}>

    <PrimaryText text = {'Join IT Group to Kick Start Your Lesson'}/>
    
    <SecondaryText text = {'Join and Learn from our Top Instructors!'}/>

    <View style = {styles.row}>
    <Button title = 'Sign In' onPress = {() => props.navigation.navigate('Sign In')} />
    <Button fill = {true} title = 'Sign Up' onPress = {() => props.navigation.navigate('SignUp')} />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 150,
    },

    row: {
      flexDirection: 'row',
      justifyContent: 'spce-around',
      marginTop: 40,
    }
});
export default Landing;