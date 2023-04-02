import { View, FlatList, StyleSheet } from "react-native";
import GoalItem from "./GoalItem";

export default function GoalList(props) {
  const MyStyles = StyleSheet.create({
    goalsContainer: {
      flex: 5,
    },
  });

  const onGoalItemPress = (item) => {
    props.setCourseGoals(item);
  };

  const renderItem = (itemData) => (
    <GoalItem
      key={itemData.item.key}
      text={itemData.item.text}
      onPress={onGoalItemPress}
    />
  );

  return (
    <View style={MyStyles.goalsContainer}>
      <FlatList data={props.courseGoals} renderItem={renderItem} />
    </View>
  );
}
