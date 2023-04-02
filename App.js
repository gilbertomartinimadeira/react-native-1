import { View, StyleSheet } from "react-native";
import { useState } from "react";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoal) {
    setCourseGoals((prevGoals) => {
      return [...prevGoals, { text: enteredGoal.text }];
    });
  }

  const MyStyles = StyleSheet.create({
    appContainer: {
      padding: 50,
      paddingHorizontal: 16,
      borderColor: "red",
      borderWidth: 1,
      flex: 1,
    },
  });

  return (
    <View style={MyStyles.appContainer}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <GoalList courseGoals={courseGoals} />
    </View>
  );
}
