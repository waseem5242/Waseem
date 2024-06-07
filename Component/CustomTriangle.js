import {View, Image, StyleSheet, Text} from "react-native";
import book from "../assets/book.png";
import certificate from "../assets/certificate.png";
import clock from "../assets/clock.png";
import discount from "../assets/discount.png";

const CustomTriangle = (props) => {
  return(
    <View>

    <View style = {{width: 342, height: 97, backgroundColor: '#D9D9D9', borderRadius: 20, alignSelf: 'center', marginTop: -130, position: 'absolute',}}></View>

  <View  style = {styles.container}>
  <Image source = {book} style = {styles.book} />
  <Text>80 + Lectures</Text>
  </View>

  <View style = {styles.container2}>
  <Image source = {certificate} style = {styles.certificate} />
  <Text>Certificate</Text>
  </View>

  <View  style = {styles.container3}>
  <Image source = {clock} style = {styles.clock} />
  <Text>8 Weeks</Text>
  </View>

  <View style = {styles.container4}>
  <Image source = {discount} style = {styles.discount} />
  <Text>10% Off</Text>
  </View>

    </View>
  )
} 

const styles = StyleSheet.create ({
  container:{
    marginLeft: -160,
    marginTop: -100,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
   container2:{
     
     marginTop: -100,
     position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
   container3:{
     marginLeft: -160,
     marginTop: -70,
     position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
   container4:{
     marginTop: -70,
     position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  book: {
    height: 20,
    width: 20,
    
  },
  certificate: {
    height: 20,
    width: 20,
  },
  clock: {
    height: 20,
    width: 20,
  },
  discount:{
    height: 20,
    width: 20,
  }
})
export default CustomTriangle;


