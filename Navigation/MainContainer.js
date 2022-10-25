import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

//screens
import Login from './Screens/LoginScreen'
import CheckIn from './Screens/CheckInScreen'
import StudentScreen from './Screens/StudentsScreen'

//screen names
const loginName = 'Login'
const checkInName = 'Check In'
const studentsName = 'Students'

const Tab = createBottomTabNavigator();

const NavBar = () => {
    return(
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
                <Tab.Screen name={studentsName} component={StudentScreen} />
                <Tab.Screen name={checkInName} component={CheckIn} />
            </Tab.Navigator>
        </NavigationContainer>
    )

}

export default NavBar