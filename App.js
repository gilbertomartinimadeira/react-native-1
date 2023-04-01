import {
  Button,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import MyStyles from "./styles/MyStyles";
import { useState } from "react";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalElements = courseGoals.map((c, i) => (
    <View style={MyStyles.goalItem} key={i}>
      <Text style={MyStyles.goalItemText}>{c}</Text>
    </View>
  ));

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((prevGoals) => {
      return [...prevGoals, enteredGoalText];
    });
    setEnteredGoalText("");
  }

  return (
    <View style={MyStyles.appContainer}>
      <View style={MyStyles.inputContainer}>
        <TextInput
          style={MyStyles.textInput}
          placeholder="Your Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        ></TextInput>
        <Button title="Add Goal" onPress={addGoalHandler}></Button>
      </View>

      <View style={MyStyles.goalsContainer}>
        <FlatList data={courseGoals}>{goalElements}</FlatList>
      </View>
    </View>
    // <View
    //   style={{
    //     padding: 50,
    //     flexDirection: "row",
    //     width: "80%",
    //     height: 300,
    //     justifyContent: "center",
    //     alignItems: "stretch",
    //   }}
    // >
    //   <View
    //     style={{
    //       flex: 2,
    //       backgroundColor: "red",
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Text>1</Text>
    //   </View>
    //   <View
    //     style={{
    //       backgroundColor: "green",
    //       flex: 3,
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Text>2</Text>
    //   </View>
    //   <View
    //     style={{
    //       backgroundColor: "blue",
    //       flex: 1,
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Text>3</Text>
    //   </View>
    // </View>
  );
}
