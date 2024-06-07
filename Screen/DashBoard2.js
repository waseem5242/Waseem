import {View, Text, Image, Button} from "react-native";
import first from "../assets/first.png";
import CustomText from '../Component/CustomText';
import TextInput1 from "../Component/TextInput1";
import CustomTriangle from "../Component/CustomTriangle";
import CutomButton from "../Component/CustomButton";


const DashBoard2 = (props) => {
  return(
    <View>
    <Image source = {first} style ={{height: 170, width: 370}} />

    <CustomText />

    <Text style = {{fontSize: 20, fontWeight:'bold', marginLeft: 12,}} onPress = {() => props.navigation.navigate('DashBoard3')} >Graphic Design</Text>

    <View style = {{flexDirection: 'row', justifyContent: 'space-around'}}>
    <Text style = {{fontSize:12, color: '#d9d9d9', marginLeft:-30,}}>By Syed Hasnain</Text>
    <Text style = {{ fontSize: 18, marginLeft: 95,}}>72$</Text>
    </View>

    <Text style = {{fontSize:10, color: '#d9d9d9',alignSelf: 'flex-end'}}>Lorem Ipsum Text</Text>

    <Text style = {{fontSize: 20,  marginLeft: 12, marginTop: 220,}}>Skills</Text>
    <View style = {{width: 70, borderRadius: 10,}}>

    <View style = {{marginLeft: 180, marginTop: 0,}}>
    <CustomTriangle/></View>
    
    </View >

    <View style={{alignSelf: 'center'}}>
    <TextInput1  />
    </View>

    <View style={{alignSelf: 'center', marginTop: 10, marginBottom: 10,}}>
    <TextInput1  />
    </View>

    <CutomButton />

    </View>
  )
}
export default DashBoard2;