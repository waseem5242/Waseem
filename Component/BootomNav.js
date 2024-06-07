
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Setting from '../Screen/Setting';
import Profile from '../Screen/Profile';
import CourseList from '../Screen/CourseList';
import Ionicons from '@expo/vector-icons/Ionicons';
 
 const Tab = createBottomTabNavigator()

 export default function App (){
   return(
     <NavigationContainer independent={true}>
     <Tab.Navigator screenOptions = {{
       tabBarLabelPosition: "below-icon",
       tabBarShowLabel: true,
       tabBarActiveTintColor: 'purple',
     }}>
     <Tab.Screen name = 'Setting' component = {Setting}
      options = {{ tabBarLabel: 'My Setting',
     tabBarIcon: ({color}) => <Ionicons  name = 'setting'  size= {20} color= {color} /> ,
     tabBarBadge: 2,
      }}
     />
     <Tab.Screen name = 'Profile' component = {Profile}
     options = {{ tabBarLabel: 'My Profile',
     tabBarIcon: ({color}) => <Ionicons  name = 'person'  size= {20} color= {color} /> ,
     tabBarBadge: 3,
     }}
     />
     <Tab.Screen name = 'CourseList' component = {CourseList}
      options = {{ tabBarLabel: 'CourseList',
     tabBarIcon: ({color}) => <Ionicons  name = 'list'  size= {20} color= {color} /> ,
     tabBarBadge: 1,
      }}
     />
     </Tab.Navigator>
     </NavigationContainer>
   )
 }
