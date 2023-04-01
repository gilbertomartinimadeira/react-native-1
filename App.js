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
  const [enteredGoal, setEnteredGoal] = useState({
    text: "",
    key: 0,
  });

  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoal((prevEnteredGoal) => {
      return { ...prevEnteredGoal, text: enteredText };
    });
  }

  function addGoalHandler() {
    setCourseGoals((prevGoals) => {
      return [...prevGoals, { text: enteredGoal.text }];
    });
  }

  return (
    <View style={MyStyles.appContainer}>
      <View style={MyStyles.inputContainer}>
        <TextInput
          style={MyStyles.textInput}
          placeholder="Your Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoal.text}
        ></TextInput>
        <Button title="Add Goal" onPress={addGoalHandler}></Button>
      </View>

      <View style={MyStyles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={MyStyles.goalItem} key={itemData.item.key}>
                <Text style={MyStyles.goalItemText}>{itemData.item.text}</Text>
              </View>
            );
          }}
        />
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
