import {View, Text, TextInput, StyleSheet,} from "react-native";
import TextInput1 from '../Component/TextInput1';
import BootomNav from '../Component/BootomNav';


const Dashboard = (props) => {
  return(
    <View style = {styles.container}>

    

    <Text style = {{fontWeight: 'bold', fontSize: 20,}}>Welcome, Fawais</Text>
    <TextInput style = {styles.input} placeholder='    SearchHere'/>
    <TextInput1/>
    <Text style = {{fontWeight: 'bold', marginTop: 10, fontSize: 17,}}>Continue Watching</Text>
    <Text style = {{fontSize: 10, color: '#a3a3a3', textAlign: 'right', marginRight:10  }}>See All</Text>

    <View style = {styles.flex}>
    <TextInput style = {styles.squar} />
    <TextInput style = {styles.squar2} />
    </View>

    <View style = {{flexDirection: 'row',display: 'flex',justifyContent: 'space-between',marginRight: 90,marginLeft: 17,}}>
    <Text onPress = {() => props.navigation.navigate('DashBoard2')}>Graphic Design</Text>
    <Text onPress = {() => props.navigation.navigate('DashBoard2')}>WireFraming</Text>
    </View>

    <View style = {styles.flex2}>
    <TextInput style = {styles.squar} />
    <TextInput style = {styles.squar2} />
    </View>

     <View style = {{flexDirection: 'row',display: 'flex',justifyContent: 'space-between',marginRight: 90,marginLeft: 17, marginBottom: 90,}}>
    <Text onPress = {() => props.navigation.navigate('DashBoard2')}>Website Design</Text>
    <Text onPress = {() => props.navigation.navigate('DashBoard2')}>Video Editing</Text>
    </View>

    <BootomNav />
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
   
  },
  input: {
    borderWidth: 1,
    width: '85%',
    height: '10%',
    borderRadius: 30,
    marginBottom: 10,
    marginTop: 10,
  },
  squar: {
    height: 150,
    width: 150,
    borderWidth: 1,
    borderRadius: 10,
  },
   squar2: {
    height: 150,
    width: 150,
    borderWidth: 1,
    borderRadius: 10,
  },
  flex: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    marginRight: 23,
    marginLeft: 15,
  },
  flex2: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    marginRight: 23,
    marginLeft: 15,
    marginTop: 10,
  }
});
export default Dashboard;