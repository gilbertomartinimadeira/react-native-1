import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

export default function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState({
    text: "",
    id: 0,
  });

  function goalInputHandler(enteredText) {
    setEnteredGoal((prevGoal) => ({ ...prevGoal, text: enteredText })); // ⇨ '11edc52b-2918-4d71-9058-f7285e29d894'
  }

  const dismissModal = () => {
    props.dismissModal();
  };

  const addGoalHandler = props.addGoalHandler;

  const MyStyles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      justifyContent: "center",
      alignItens: "center",
      backgroundColor: "#311b6b",
    },
    textInput: {
      borderWidth: 1,
      borderColor: "#cccccc",
      color: "white",
      width: "97%",
      marginHorizontal: 8,
      padding: 8,
      justifyContent: "center",
    },
    buttonContainer: {
      marginTop: 16,
      justifyContent: "center",
      flexDirection: "row",
    },
    button: {
      width: "30%",
      marginHorizontal: 8,
    },
    image: {
      width: 90,
      height: 90,
      marginLeft: 160,
      justifyContent: "center",
    },
  });

  return (
    <Modal visible={props.modalIsVisible} animationType="slide">
      <View style={MyStyles.inputContainer}>
        <Image
          source={require("../assets/favicon.png")}
          style={MyStyles.image}
        />
        <TextInput
          style={MyStyles.textInput}
          placeholder="Your Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoal.text}
        ></TextInput>
        <View style={MyStyles.buttonContainer}>
          <View style={MyStyles.button}>
            <Button
              title="Add Goal"
              onPress={() => addGoalHandler(enteredGoal)}
            ></Button>
          </View>
          <View style={MyStyles.button}>
            <Button title="Cancel" onPress={dismissModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
