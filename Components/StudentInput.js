import { TextInput, View, StyleSheet, Button } from 'react-native'
import { useState } from 'react';


function StudentInput(props) {
    const [enteredNumber, setEnteredNumber] = useState();

    function studentNumberHandler(enteredText) {
        setEnteredNumber(Number(enteredText));
      }

      function addStudentsHandler(){
        props.onAddStudent(enteredNumber)
        setEnteredNumber('')
      }

    return(
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          placeholder="Student number"
          value={enteredNumber}
          onChangeText={studentNumberHandler}
        />
        <Button title="Check In" onPress={addStudentsHandler} />
      </View>
    )

}

export default StudentInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
      },
      textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        paddingLeft: 8,
      },
})