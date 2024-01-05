import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import CustomContext, { useCustomContext } from "../context/index";

const Profile = ({ navigation }) => {
  const { userInfo, initialUserInfo, setUserInfo } =
    useCustomContext(CustomContext);
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginVertical: 20,
          marginTop: 40,
        }}
      >
        <Image
          source={{ uri: userInfo.avatarUrl }}
          style={{ width: 60, height: 60, marginBottom: 20 }}
          alt="Logo"
        />
        {/* fontSize="lg" color="text.500" fontWeight="bold" 
        fontSize="sm" color="label.500"
        */}

        <Text style={{}}>{userInfo?.name ?? "Name Not Available"}</Text>
        <Text>{userInfo?.description ?? ""}</Text>
      </View>
      <Text>Profile !!</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <Text>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default Profile;
