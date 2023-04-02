import { View, StyleSheet, Button } from "react-native";
import { useState } from "react";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";
import uuid from "react-native-uuid";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(enteredGoal) {
    setCourseGoals((prevGoals) => {
      const novoObjecto = { text: enteredGoal.text, id: uuid.v4() };
      setModalIsVisible(false);
      return [...prevGoals, novoObjecto];
    });
  }

  const deleteGoal = (id) => {
    setCourseGoals((prevGoals) => prevGoals.filter((goal) => goal.id != id));
  };

  const toggleModal = () => {
    setModalIsVisible(true);
  };

  const dismissModal = () => {
    setModalIsVisible(false);
  };

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
      <Button title="Add new Goal" color="#5e0acc" onPress={toggleModal} />

      <GoalInput
        addGoalHandler={addGoalHandler}
        modalIsVisible={modalIsVisible}
        dismissModal={dismissModal}
      />

      <GoalList courseGoals={courseGoals} deleteGoal={deleteGoal} />
    </View>
  );
}
