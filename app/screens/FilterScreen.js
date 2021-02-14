import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Switch,
} from "react-native";
function FilterScreen(props) {
  const allergies = [
    "eggs",
    "fish",
    "shellfish",
    "tree nuts",
    "milk",
    "wheat",
    "soy",
    "Vegan",
    "Vegetarian",
    // "Reset Filters",
  ];
  return (
    <View style={styles.container}>
      <View style={styles.smallContainer}>
        {allergies.map((allergy) => {
          return (
            <View
              style={{
                width: "30%",
                height: 50,
                margin: 1,
                padding: 2,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderRadius: 20,
                borderWidth: 3,
                borderColor: props.activeAllergies.includes(allergy)
                  ? "#4b2e83"
                  : "#b7a57a",
                backgroundColor: props.activeAllergies.includes(allergy)
                  ? "#b7a57a"
                  : "#4b2e83",
              }}
              key={allergy}
            >
              <TouchableOpacity
                key={props.activeAllergies}
                onPress={() => {
                  props.buildActiveAllergies(allergy);
                }}
              >
                <Text style={styles.text}>
                  {allergy == "Vegan" ||
                  allergy == "Vegetarian" ||
                  allergy == "Reset Filters"
                    ? allergy
                    : `No ${allergy}`}
                </Text>
              </TouchableOpacity>
              {/* <Switch
                onValueChange={props.setRecipeList(
                  props.recipeList.filter((recipe) => recipe[allergy] === false)
                )}
                value={props.recipeList}
              /> */}
            </View>
          );
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // top: -20,
    flex: 0.55,
    width: 370,
    // height: 350,
    flexDirection: "row",
    flexWrap: "wrap",
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  smallContainer: {
    width: 370,
    height: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    color: "white",
  },
});
export default FilterScreen;
