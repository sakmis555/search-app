import React from "react";
import { ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import { getRepoInfo, getUser } from "../api/services/github";
import CustomContext, { useCustomContext } from "../context/index";

const Search = ({ navigation }) => {
  const { userInfo, initialUserInfo, setUserInfo } =
    useCustomContext(CustomContext);
  const [userName, setUserName] = React.useState("");
  const handleSearchPress = async () => {
    try {
      console.log("userName -->", userName);
      // const response = await getRepoInfo();
      const response = await getUser(userName);
      if (response.message === "Not Found") {
      } else {
      }
      if (response) {
        const {
          login,
          id,
          avatar_url,
          url,
          followers_url,
          following_url,
          name,
          followers,
          following,
          bio,
        } = response.result;
        setUserInfo({
          ...userInfo,
          userId: id,
          avatarUrl: avatar_url,
          userName: login,
          name: name,
          description: bio,
          followersCount: followers,
          followingCount: following,
          followersUri: followers_url,
          followingUrl: following_url,
          profileUrl: url,
        });
        // data.map((item, index) => {
        //   console.log(index, "item", item);
        // });
        console.log("Response :", response);
        navigation.navigate("Profile");
      }
    } catch (error) {
      console.log("Error :", error);
    }
  };
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Text>Search here!!</Text>
      <TextInput
        style={{ height: 40, margin: 12, borderWidth: 1, padding: 10 }}
        onChangeText={setUserName}
        value={userName}
      />
      <TouchableOpacity onPress={handleSearchPress}>
        <Text>Go</Text>
      </TouchableOpacity>
      <Text>Enter your username inside the box</Text>
      <Text>
        Your username is not available. Please check username and try again
      </Text>
    </ScrollView>
  );
};
export default Search;
