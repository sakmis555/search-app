import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const BgCircles = () => {
  return (
    <View style={styles.circlesContainer}>
      <TouchableOpacity style={styles.circle_1} />
      <TouchableOpacity style={styles.circle_2} />
      <TouchableOpacity style={styles.circle_3} />
      <TouchableOpacity style={styles.circle_4} />
    </View>
  );
};
// Base radius.
const BASE_WIDTH = 440;
const BASE_HEIGHT = 440;

const styles = StyleSheet.create({
  circlesContainer: {
    width: BASE_WIDTH,
    height: BASE_HEIGHT,
    alignItems: "center",
    marginTop: 40,
    zIndex: -10,
  },
  circle_1: {
    top: 0,
    position: "absolute",
    width: BASE_WIDTH,
    height: BASE_HEIGHT,
    borderRadius: BASE_HEIGHT / 2,
    backgroundColor: "transparent",
    borderColor: "#444",
    borderWidth: 1,
  },
  circle_2: {
    top: BASE_WIDTH * 0.1, // The amount remaining
    left: BASE_HEIGHT * 0.1,
    position: "absolute",
    width: BASE_WIDTH * 0.8, // 80% of the base size
    height: BASE_HEIGHT * 0.8,
    borderRadius: (BASE_HEIGHT * 0.8) / 2,
    backgroundColor: "transparent",
    borderColor: "#444",
    borderWidth: 1,
  },
  circle_3: {
    top: BASE_WIDTH * 0.2,
    left: BASE_HEIGHT * 0.2,
    position: "absolute",
    width: BASE_WIDTH * 0.6,
    height: BASE_HEIGHT * 0.6, // 60% of the base size
    borderRadius: (BASE_HEIGHT * 0.6) / 2,
    backgroundColor: "transparent",
    borderColor: "#444",
    borderWidth: 1,
  },
  circle_4: {
    top: BASE_WIDTH * 0.3,
    left: BASE_HEIGHT * 0.3,
    position: "absolute",
    width: BASE_WIDTH * 0.4,
    height: BASE_HEIGHT * 0.4, // 40% of the base size
    borderRadius: (BASE_HEIGHT * 0.4) / 2,
    backgroundColor: "transparent",
    borderColor: "#444",
    borderWidth: 1,
  },
});
export default BgCircles;
