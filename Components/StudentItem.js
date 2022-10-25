import { StyleSheet, View, Text, Pressable, ProgressViewIOSComponent } from 'react-native'

function StudentItem({studentData, onCheckOut}) {
  return (
    <Pressable onPress={onCheckOut}>
    <View style={styles.studentList}>
      <Text style={styles.studentText}>{studentData.item.firstName}</Text>
    </View>
    </Pressable>
  );
}

export default StudentItem;

const styles = StyleSheet.create({
    studentList: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
      },
      studentText: {
        color: "white",
      },
})