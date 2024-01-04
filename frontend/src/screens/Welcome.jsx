import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Text>Welcome !!</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <Text>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default Welcome;
