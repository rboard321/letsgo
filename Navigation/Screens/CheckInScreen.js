import { useState } from "react";
import StudentItem from '../index'
import StudentInput from "../index";
import {
    StyleSheet,
    View,
    FlatList,
    Text
  } from "react-native";
let students = [
    {
      id: 1,
      firstName: "Ricky",
      lastName: "Board",
      grade: 2,
      number: 32,
    },
    {
      id: 2,
      firstName: "Noel",
      lastName: "Board",
      grade: 1,
      number: 324,
    },
    {
      id: 3,
      firstName: "Remedy",
      lastName: "Board",
      grade: 2,
      number: 324,
    },
    {
      id: 4,
      firstName: "John",
      lastName: "Smith",
      grade: 2,
      number: 124,
    },
    {
      id: 5,
      firstName: "Bobby",
      lastName: "Jones",
      grade: 2,
      number: 214,
    },
    {
      id: 6,
      firstName: "David",
      lastName: "Hank",
      grade: 2,
      number: 652,
    },
    {
      id: 7,
      firstName: "Stewart",
      lastName: "Long",
      grade: 2,
      number: 245,
    },
    {
      id: 8,
      firstName: "Harry",
      lastName: "Potter",
      grade: 2,
      number: 654,
    },
    {
      id: 9,
      firstName: "Hremionie",
      lastName: "Granger",
      grade: 2,
      number: 253,
    },
    {
      id: 10,
      firstName: "Ron",
      lastName: "Weasley",
      grade: 2,
      number: 253,
    },
  ];

const CheckIn = () => {
    const [studentsCheckedIn, setStudentsCheckedIn] = useState([]);

  function addStudentsHandler(enteredNumber) {
    let studentsToAdd = students.filter(student => {
      return student.number == enteredNumber;
    });
    setStudentsCheckedIn([...studentsCheckedIn, ...studentsToAdd]);
  }

  function checkedOut() {
    console.log("student checked out");
  }
    return(
      
        <View style={styles.appContainer}>
      <StudentInput onAddStudent={addStudentsHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={studentsCheckedIn}
          renderItem={studentData => {
            
              <StudentItem studentData={studentData} onCheckOut={checkedOut} />
            ;
          }}
        />
      </View>
    </View>
    )
}


export default CheckIn

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      padding: 60,
      paddingHorizontal: 16,
    },
    goalsContainer: {
      flex: 5,
    },
  });