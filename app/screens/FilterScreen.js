import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
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
  ];

  return (
    <View style={styles.container}>
      <View style={styles.smallContainer}>
        {allergies.map((allergy) => {
          return (
            <View
              style={
                props.activeAllergies.includes(allergy)
                  ? styles.clickedButtonGroup
                  : styles.buttonGroup
              }
              key={allergy}
            >
              <TouchableOpacity
                key={props.activeAllergies}
                onPress={() => {
                  props.alergenFilter(allergy);
                }}
              >
                <Text style={styles.text}>
                  {allergy == "Vegan" || allergy == "Vegetarian"
                    ? allergy
                    : `No ${allergy}`}
                </Text>
              </TouchableOpacity>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "white",
  },
  smallContainer: {
    width: 370,
    height: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  buttonGroup: {
    width: "30%",
    height: 50,
    margin: 4,
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#b7a57a",
    backgroundColor: "#4b2e83",
  },
  clickedButtonGroup: {
    width: "30%",
    height: 50,
    margin: 4,
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#4b2e83",
    backgroundColor: "#b7a57a",
  },
  text: {
    color: "white",
  },
});
export default FilterScreen;
