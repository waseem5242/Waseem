


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screen/HomeScreen";
import AboutScreen from "./Screen/AboutScreen";
import Landing from "./Screen/Landing";
import Reset from "./Screen/Reset";
import Dash1 from "./Screen/Dash1";
import SignUp from "./Screen/SignUp";
import DashBoard from "./Screen/DashBoard";
import BootomNav from './Component/BootomNav';
import DashBoard2 from "./Screen/DashBoard2";
import DashBoard3 from "./Screen/DashBoard3";
import DashBoard4 from "./Screen/DashBoard4";
import DashBoard5 from "./Screen/DashBoard5";
import DashBoard6 from "./Screen/DashBoard6";
import DashBoard7 from "./Screen/DashBoard7";
import DashBoard8 from "./Screen/DashBoard8";

 

const Stack = createNativeStackNavigator();
 export default function App () {
  return(
    <NavigationContainer >
      <Stack.Navigator initialRouteName = "Landing">
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sign In" component={AboutScreen} />
        <Stack.Screen name="Reset" component={Reset}/>
        <Stack.Screen name="Dash1" component={Dash1}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="DashBoard" component={DashBoard}/>
        <Stack.Screen name="BootomNav" component={BootomNav}/>
        <Stack.Screen name="DashBoard2" component={DashBoard2}/>
        <Stack.Screen name="DashBoard3" component={DashBoard3}/>
        <Stack.Screen name="DashBoard4" component={DashBoard4}/>
        <Stack.Screen name="DashBoard5" component={DashBoard5}/>
        <Stack.Screen name="DashBoard6" component={DashBoard6}/>
        <Stack.Screen name="DashBoard7" component={DashBoard7}/>
        <Stack.Screen name="DashBoard8" component={DashBoard8}/>
        
       
         
      </Stack.Navigator>
    </NavigationContainer>
  )
 }