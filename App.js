import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Button,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";
import RecipesScreen from "./app/screens/RecipesScreen.js";
import SavedRecipesScreen from "./app/screens/SavedRecipesScreen.js";
import recipes from "./app/Recipes.js";
export default function App() {
  const [viewRecipes, setViewRecipes] = useState(false);
  const [viewSavedRecipes, setViewSavedRecipes] = useState(false);
  const [recipeList, setRecipeList] = useState(recipes);
  const showRecipes = () => {
    setViewRecipes(!viewRecipes);
  };
  const showSavedRecipes = () => {
    setViewSavedRecipes(!viewSavedRecipes);
  };
  const filterRecipesByCategory = (item) => {
    if (item) {
      setRecipeList(recipes.filter((recipe) => recipe.category === item));
    } else {
      setRecipeList(recipes);
    }
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        {viewRecipes === false && viewSavedRecipes === false && (
          <View>
            <Image
              style={styles.image}
              source={require("./app/assets/cookbook.png")}
            />
          </View>
        )}
        {viewRecipes === false && viewSavedRecipes === false && (
          <View style={styles.container}>
            <View>
              <TouchableOpacity
                style={styles.buttonGroup}
                title="appetizers, sides, & snacks"
                onPress={() => {
                  filterRecipesByCategory("appetizers, sides, & snacks");
                  showRecipes();
                }}
              >
                <Image
                  style={styles.cake}
                  source={require("./app/assets/salad.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonGroup}
                title="hearty mains"
                onPress={() => {
                  filterRecipesByCategory("hearty mains");
                  showRecipes();
                }}
              >
                <Image
                  style={styles.cake}
                  source={require("./app/assets/meal.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonGroup}
                title="View all recipes"
                onPress={() => {
                  filterRecipesByCategory();
                  showRecipes();
                }}
              >
                <Image
                  style={styles.cake}
                  source={require("./app/assets/Menu.png")}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={styles.buttonGroup}
                title="sweet & savory baked goods"
                onPress={() => {
                  filterRecipesByCategory("sweet & savory baked goods");
                  showRecipes();
                }}
              >
                <Image
                  style={styles.cake}
                  source={require("./app/assets/cake.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonGroup}
                title="soups & stews"
                onPress={() => {
                  filterRecipesByCategory("soups & stews");
                  showRecipes();
                }}
              >
                <Image
                  style={styles.cake}
                  source={require("./app/assets/soup.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonGroup}
                title="Saved Recipes"
                onPress={() => {
                  showSavedRecipes();
                }}
              >
                <Image
                  style={styles.cake}
                  source={require("./app/assets/heart.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
        {viewRecipes === true && (
          <RecipesScreen recipes={recipeList} showRecipes={showRecipes} />
        )}
        <StatusBar style="auto" />
        {viewSavedRecipes === true && viewSavedRecipes === true && (
          <SavedRecipesScreen showSavedRecipes={showSavedRecipes} />
        )}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    backgroundColor: "white",
    // alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  buttonGroup: {
    width: 150,
    height: 150,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    borderRadius: 20,
    borderColor: "#b7a57a",
    backgroundColor: "#4b2e83",
  },
  text: {
    color: "white",
  },
  image: {
    // flex: 1,
    // resizeMode: "cover",
    // justifyContent: "center",
    // alignItems: "center",
    // alignContent: "center",
    left: "24%",
    width: 175,
    height: 175,
    tintColor: "#4b2e83",
  },
  cake: {
    // flex: 1,
    // resizeMode: "cover",
    // justifyContent: "center",
    // alignItems: "center",
    // alignContent: "center",
    // left: "24%",
    width: 125,
    height: 125,
  },
});
