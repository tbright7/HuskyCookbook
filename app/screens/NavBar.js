import React from "react";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";

function NavBar(props) {
  return (
    <View style={styles.bar}>
      <TouchableOpacity
        title="filter"
        onPress={() => {
          props.showFilterList();
        }}
      >
        <Image style={styles.image} source={require("../assets/filter.png")} />
      </TouchableOpacity>
      <TouchableOpacity
        title="Return Home"
        onPress={() => {
          props.showRecipes();
        }}
      >
        <Image style={styles.image} source={require("../assets/house.png")} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  bar: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    // backgroundColor: "yellow",
    width: "100%",
    height: 30,
    position: "absolute",
    top: 60,
  },
  image: {
    height: 30,
    width: 30,
  },
});
export default NavBar;
