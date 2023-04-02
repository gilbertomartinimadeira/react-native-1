import { Button, TextInput, View, StyleSheet } from "react-native";
import { useState } from "react";

export default function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState({
    text: "",
    id: 0,
  });

  function goalInputHandler(enteredText) {
    setEnteredGoal((prevEnteredGoal) => {
      return { ...prevEnteredGoal, text: enteredText };
    });
  }

  const addGoalHandler = props.addGoalHandler;

  const MyStyles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItens: "center",
      marginBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: "gray",
    },
    textInput: {
      borderWidth: 1,
      borderColor: "#cccccc",
      width: "70%",
      marginRight: 8,
      padding: 8,
    },
  });

  return (
    <View style={MyStyles.inputContainer}>
      <TextInput
        style={MyStyles.textInput}
        placeholder="Your Course Goal"
        onChangeText={goalInputHandler}
        value={enteredGoal.text}
      ></TextInput>
      <Button
        title="Add Goal"
        onPress={() => addGoalHandler(enteredGoal)}
      ></Button>
    </View>
  );
}
