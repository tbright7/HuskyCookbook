import React from "react";
import {
  TouchableOpacity,
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";

function RecipeListScreen(props) {
  return (
    <ScrollView
      style={{
        flex: 1,
        flexDirection: "rows",
        flexWrap: "wrap",
      }}
    >
      <View style={styles.bigList}>
        {props.recipeList.map((recipe) => (
          <View key={recipe.name} style={styles.menuItemsContainer}>
            <TouchableOpacity
              title={recipe.name}
              style={styles.touchables}
              onPress={() => {
                props.showRecipe(recipe);
              }}
            >
              <Text style={styles.text}> {recipe.name} </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  bigList: {
    // top: -20,
    flex: 1,
    // flexGrow: 1,
    // width: 370,
    // height: 200,
    flexDirection: "row",
    flexWrap: "wrap",
    // backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    // alignContent: "center",
    // backgroundColor: "white",
  },
  touchables: {
    // width: 100,
    height: 75,
    width: 175,
    margin: 4,
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderWidth: 1,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#b7a57a",
    backgroundColor: "#4b2e83",
    // flex: 1,
    // flexDirection: "row",
    // flexWrap: "wrap",
  },
  menuItemsContainer: {
    // flex: 1,
    // flexDirection: "row",
    // flexWrap: "wrap",
  },
  text: {
    color: "white",
  },
});
export default RecipeListScreen;
