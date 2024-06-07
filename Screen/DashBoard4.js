import {View, Text, Image, StyleSheet,} from "react-native";
import first from "../assets/first.png";
import user from "../assets/user.png";
import CustomText from "../Component/CustomText";
import CutomButton from "../Component/CustomButton";


const DashBoard4 = (props) => {
  return(
    <View>
    <Image source = {first} style ={{height: 170, width: 370}} />

    <CustomText />

   <View style = {styles.triangle}>
    <Text style = {{fontSize: 12, marginTop: 15, marginLeft: 70,}} onPress = {() => props.navigation.navigate('DashBoard5')}>Muhammad Arsalan</Text>
    
    <Text style = {{fontSize: 10, marginTop: 0, marginLeft: 70, color: '#a3a3a3'}}>Student</Text>
    < Image source = {user} style = {{height: 47, width: 47, marginTop: -35, marginLeft: 15,}} />

    <Text style = {{fontSize: 12, marginTop: 20,}}>Lorem ipsum dolor sit amet consectetur. Euismod turpis tortor 
sollicitudin et. Quam tempor tincidunt a nunc feugiat semper 
tristique id</Text>
    </View>


     <View style = {styles.triangle}>
    <Text style = {{fontSize: 12, marginTop: 15, marginLeft: 70,}}>Usman Diljan</Text>
    <Text style = {{fontSize: 10, marginTop: 0, marginLeft: 70, color: '#a3a3a3'}}>Student</Text>
    < Image source = {user} style = {{height: 47, width: 47, marginTop: -35, marginLeft: 15,}} />

    <Text style = {{fontSize: 12, marginTop: 20,}}>Lorem ipsum dolor sit amet consectetur. Euismod turpis tortor 
sollicitudin et. Quam tempor tincidunt a nunc feugiat semper 
tristique id</Text>
    </View>


     <View style = {styles.triangle}>
    <Text style = {{fontSize: 12, marginTop: 15, marginLeft: 70,}}>Yasir Lashari</Text>
    <Text style = {{fontSize: 10, marginTop: 0, marginLeft: 70, color: '#a3a3a3'}}>Student</Text>
    < Image source = {user} style = {{height: 47, width: 47, marginTop: -35, marginLeft: 15,}} />

    <Text style = {{fontSize: 12, marginTop: 20,}}>Lorem ipsum dolor sit amet consectetur. Euismod turpis tortor 
sollicitudin et. Quam tempor tincidunt a nunc feugiat semper 
tristique id</Text>
    </View>

    <CutomButton />

    </View>
  )
}

const styles = StyleSheet.create({
   triangle: {
  width: 342,
  height: 125,
  backgroundColor: '#D9D9D9',
  borderRadius: 10,
  alignSelf: 'center',
  marginTop: 10,
  
  },
})



export default DashBoard4;