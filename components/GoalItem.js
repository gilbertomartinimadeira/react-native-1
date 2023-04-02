import { StyleSheet, View, Text } from "react-native";

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
  });

  return (
    <View style={MyStyles.goalItem} key={props.key}>
      <Text style={MyStyles.goalItemText}>{props.text}</Text>
    </View>
  );
}
