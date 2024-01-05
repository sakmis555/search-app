import React from "react";
import { Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";

const Welcome = ({ navigation }) => {
  const { colors } = useTheme();
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
          color: colors.text[500],
          fontSize: 32,
          fontWeight: "700",
          marginTop: 140,
        }}
      >
        Welcome !!
      </Text>
      <Text
        style={{
          color: colors.text[500],
          fontSize: 20,
          fontWeight: "500",
          marginTop: 40,
        }}
      >
        Welcome to the application to search username from Github.
      </Text>
      <Image
        source={require("../assets/celebration.gif")}
        style={{
          position: "absolute",
          width: 328,
          height: 328,
          top: 320,
          marginBottom: 100,
        }}
      />
      <Text
        style={{
          color: colors.text[500],
          fontSize: 20,
          fontWeight: "500",
          marginTop: 400,
        }}
      >
        Click continue button to move ahead!
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: colors.secondary[500],
          fontSize: 20,
          fontWeight: "500",
          marginTop: 40,
          padding: 30,
          width: "90%",
          borderRadius: 40,
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("Search")}
      >
        <Text
          style={{
            color: colors.text[500],
            fontSize: 20,
            fontWeight: "500",
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default Welcome;
