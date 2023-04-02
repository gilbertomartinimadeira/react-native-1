import { View, FlatList, StyleSheet } from "react-native";
import GoalItem from "./GoalItem";

export default function GoalList(props) {
  const MyStyles = StyleSheet.create({
    goalsContainer: {
      flex: 5,
    },
  });

  const onGoalItemPress = (id) => {
    props.deleteGoal(id);
  };

  const renderItem = (itemData) => (
    <GoalItem
      key={itemData.item.id}
      goal={itemData.item}
      onPress={onGoalItemPress}
    />
  );

  return (
    <View style={MyStyles.goalsContainer}>
      <FlatList
        data={props.courseGoals}
        renderItem={renderItem}
        keyExtractor={(goal) => goal.id}
      />
    </View>
  );
}
