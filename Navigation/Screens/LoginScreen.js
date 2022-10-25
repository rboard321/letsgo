import { useState } from "react";
import { NavigationContainer, StackActions, useNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CheckIn from './CheckInScreen'
import StudentScreen from './StudentsScreen'

const Stack = createNativeStackNavigator();
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Login = ({navigation}) => {

  const navigationRef = useNavigationContainerRef()
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  return (
  
    <View style={styles.container}>
      <Image style={styles.image} source={require("../images/school.png")} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={email => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={password => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Students')}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      
    </View>
    
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#DFF6FF",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20
  },
  forgot_button: {
    height: 30,
    marginBottom: 30
  },
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#47B5FF"
  }
});
