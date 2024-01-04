import React from "react";
import { ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import { getRepoInfo } from "../api/services/github";

const Search = ({ navigation }) => {
  const [text, setText] = React.useState("");
  const handleSearchPress = async () => {
    try {
      const response = await getRepoInfo();
      console.log("Response :", response);
    } catch (error) {
      console.log("Error :", error);
    }
  };
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Text>Search here!!</Text>
      <TextInput
        style={{ height: 40, margin: 12, borderWidth: 1, padding: 10 }}
        onChangeText={setText}
        value={text}
      />
      <TouchableOpacity onPress={handleSearchPress}>
        <Text>Go</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default Search;
