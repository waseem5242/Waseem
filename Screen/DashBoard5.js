import {View, Text, StyleSheet, TextInput} from 'react-native';
import CustomTriangle from '../Component/CustomTriangle';
import CustomButton from '../Component/CustomButton';

const DashBoard5 = (props) => {
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

    <Text style = {{fontSize: 24, fontWeight: 'bold', marginLeft: 10, marginTop: 30,}}>Overview</Text>
    <Text style = {{fontSize: 20, marginLeft: 10, marginTop: 10}} onPress = {() => props.navigation.navigate('DashBoard8')}>Course Name : Graphic Design </Text>
    <Text style = {{fontSize: 20,  marginLeft: 12, marginTop: 210,}}></Text>
    <View style = {{width: 70, borderRadius: 10,}}>

    <View style = {{marginLeft: 180, marginTop: 0,}}>
    <CustomTriangle/></View>
    
    </View>
    <View style = {{fontSize: 18, flexDirection: 'row', justifyContent: 'space-around', marginLeft: -50}}>
    <Text style = {{fontSize: 18,}}>Course Rating:</Text>
    <Text style = {{fontSize: 18, fontWeight: 'bold'}}>*****</Text></View>
    <View style = {{fontSize: 18, flexDirection: 'row', justifyContent: 'space-around', marginLeft: -50, marginTop: 15}}>
    <Text style = {{fontSize: 18}}>Course Time:</Text>
    <Text style = {{fontWeight: 'bold'}}>8 Weeks</Text></View>
    <View style = {{fontSize: 18, flexDirection: 'row', justifyContent: 'space-around', marginLeft: -36, marginTop: 15}}>
    <Text style = {{fontSize: 18}}>Course Trainer:</Text>
    <Text style = {{fontWeight: 'bold'}}>Syed Hassan</Text></View>

    <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 1, backgroundColor: '#d9d9d9', marginTop:15}}>
            </View>
            <View><Text style={{width: 90, marginTop:15, fontSize: 14, color: '#d9d9d9'}}>Purchase Date</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: '#d9d9d9', marginTop:15}}>
            </View>
           </View>

      <View style = {{fontSize: 14, flexDirection: 'row', justifyContent: 'space-around', marginLeft: -45, marginTop: 10,}}>
    <Text style = {{fontSize: 14,}}>Date: 19/03/2024</Text>
    <Text style = {{fontSize: 14,}}>Price: 72$</Text></View>
    <View style = {{fontSize: 14, flexDirection: 'row', justifyContent: 'space-around', marginLeft: -38, marginTop: 15}}>
    <Text style = {{fontSize: 14}}>Coupon: 10% Off</Text>
    <Text style = {{fontSize: 14}}>Final Price: 65$</Text></View>
     
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
  }
})
export default DashBoard5;