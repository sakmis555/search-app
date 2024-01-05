import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { getRepoInfo, getUser } from "../api/services/github";
import CustomContext, { useCustomContext } from "../context/index";
import { useTheme } from "@react-navigation/native";

const Search = ({ navigation }) => {
  const { userInfo, initialUserInfo, setUserInfo } =
    useCustomContext(CustomContext);
  const { colors } = useTheme();

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
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: colors.bg[500],
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: colors.label[500],
          fontSize: 32,
          fontWeight: "700",
          marginTop: 140,
        }}
      >
        Search here!!
      </Text>
      <Text
        style={{
          color: colors.text[500],
          fontSize: 20,
          fontWeight: "500",
          marginTop: 40,
          width: "90%",
        }}
      >
        Enter your Github username inside the search bar
      </Text>
      <Image
        source={require("../assets/calculation.gif")}
        style={{
          position: "absolute",
          width: 228,
          height: 228,
          top: 320,
          marginBottom: 100,
        }}
      />
      <TextInput
        style={{
          backgroundColor: colors.primary[500],
          borderColor: colors.border[500],
          color: colors.label[500],
          width: "90%",
          margin: 12,
          borderWidth: 2,
          padding: 20,
          paddingHorizontal: 40,
          width: "90%",
          borderRadius: 40,
          marginTop: 300,
          fontSize: 18,
        }}
        onChangeText={setUserName}
        value={userName}
      />
      <TouchableOpacity
        style={{
          backgroundColor: colors.secondary[500],
          borderColor: colors.border[500],
          fontSize: 20,
          fontWeight: "500",
          marginTop: 40,
          padding: 25,
          width: "90%",
          borderRadius: 40,
          alignItems: "center",
        }}
        onPress={handleSearchPress}
      >
        <Text
          style={{
            color: colors.text[500],
            fontSize: 20,
            fontWeight: "500",
          }}
        >
          Search
        </Text>
      </TouchableOpacity>

      <Text>Enter your username inside the box</Text>
      <Text>
        Your username is not available. Please check username and try again
      </Text>
    </ScrollView>
  );
};
export default Search;
