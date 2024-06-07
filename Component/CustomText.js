import {View, Text, Button} from "react-native";
const CustomText = (props) => {
  return(

    <View>
    <View style = {{flexDirection: 'row', justifyContent: 'space-around'}}>
    <Text style = {{fontWeight: 'bold', fontSize: 15, backgroundColor: 'black', height: 25, width: 70, color: '#fff'}}>OverView</Text>
    <Text>Lessons</Text>
    <Text>Reviews</Text>
    </View>

    <Text>               
------------------------------------------------------------------------------------------
    </Text>
    


    

    
    </View>
  )
}
export default CustomText;