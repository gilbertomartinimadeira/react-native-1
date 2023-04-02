import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem(props) {
  const MyStyles = StyleSheet.create({
    goalItem: {
      margin: 8,
      padding: 8,
      borderRadius: 6,
      backgroundColor: "#5e0acc",
      color: "white",
    },
    goalItemText: {
      color: "white",
    },
    pressedItem: {
      opacity: 0.5,
    },
  });

  return (
    <View style={MyStyles.goalItem}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        onPress={() => props.onPress(props.goal.id)}
        style={({ pressed }) => pressed && MyStyles.pressedItem}
      >
        <Text style={MyStyles.goalItemText}>
          {props.goal.text} - {props.goal.id}
        </Text>
      </Pressable>
    </View>
  );
}
