
import { StatusBar } from "expo-status-bar";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavBar from "./Navigation/MainContainer"

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

//screens
import Login from './Navigation/Screens/LoginScreen'
import CheckIn from './Navigation/Screens/CheckInScreen'
import StudentScreen from './Navigation/Screens/StudentsScreen'

//screen names
const loginName = 'Login'
const checkInName = 'Check In'
const studentsName = 'Students'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

let isSignedIn = false

export default function App() {
  

  return (
    
   (
    <NavigationContainer>
            <Tab.Navigator 
            initialRouteName={Login}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === studentsName){
                        iconName = focused ? 'people' : 'people-outline'
                    } else if (rn === checkInName){
                        iconName = focused ? 'reader' : 'reader-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                }
            })}
            >
                <Tab.Screen name={loginName} component={Login} />
                <Tab.Screen name={studentsName} component={StudentScreen} />
                <Tab.Screen name={checkInName} component={CheckIn} />
            </Tab.Navigator>
        </NavigationContainer>
     ) 
   
  );
}


