import {View, Text, Image, StyleSheet,} from "react-native";
import first from "../assets/first.png";
import CustomText from '../Component/CustomText';
import CustomButton from "../Component/CustomButton";
import play from "../assets/play.png";
import note from "../assets/note.png";


const DashBoard3 = (props) => {
  return(
    <View>
    <Image source = {first} style ={{height: 170, width: 370}} />

    <CustomText />
    
    
    <View style = {styles.triangle}>
    <Text style = {{fontSize: 14, marginTop: 15, marginLeft: 10,}} onPress = {() => props.navigation.navigate('DashBoard4')}>Chapter 1 : What is Graphics Designing?</Text>
    </View>

    <View style = {styles.triangle2}>
    <Text style = {{fontSize: 14, marginTop: 15, marginLeft: 50,}}>Lorem ipsum dolor sit amet consectetur.</Text>
    < Image source = {play} style = {{height: 20, width: 20, marginTop: -20, marginLeft: 15,}} />

    <Text style = {{fontSize: 14, marginTop: 15, marginLeft: 50,}}>Lorem ipsum dolor sit amet consectetur.</Text>
    < Image source = {note} style = {{height: 20, width: 20, marginTop: -20, marginLeft: 15,}} />

    <Text style = {{fontSize: 14, marginTop: 15, marginLeft: 50,}}>Lorem ipsum dolor sit amet consectetur.</Text>
    < Image source = {play} style = {{height: 20, width: 20, marginTop: -20, marginLeft: 15,}} />

    <Text style = {{fontSize: 14, marginTop: 15, marginLeft: 50,}}>Lorem ipsum dolor sit amet consectetur.</Text>
    < Image source = {note} style = {{height: 20, width: 20, marginTop: -20, marginLeft: 15,}} />
    </View>

     <View style = {styles.triangle}>
    <Text style = {{fontSize: 14, marginTop: 15, marginLeft: 10,}}>Chapter 2 : What is Logo Designing?</Text>
    </View>

    <View style = {styles.triangle}>
    <Text style = {{fontSize: 14, marginTop: 15, marginLeft: 10,}}>Chapter 4 : What is Picture Editing?</Text>
    </View>

    <CustomButton />

    </View>
  )
}
const styles = StyleSheet.create({
  triangle: {
  width: 342,
  height: 49,
  backgroundColor: '#D9D9D9',
  borderRadius: 10,
  alignSelf: 'center',
  marginTop: 10,
  },
   triangle2: {
  width: 338,
  height: 174,
  backgroundColor: '#D9D9D9',
  borderRadius: 10,
  alignSelf: 'center',
  marginTop: 10,
  },
})

export default DashBoard3;