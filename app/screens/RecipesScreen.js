import React, { useState } from "react";
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
import RecipeInfoScreen from "./RecipeInfoScreen.js";

function RecipesScreen(props) {
  const [recipeToShow, setRecipeToShow] = useState(null);
  const [recipeList, setRecipeList] = useState(props.recipes);
  const allergies = [
    "eggs",
    "fish",
    "shellfish",
    "tree nuts",
    "milk",
    "wheat",
    "soy",
    "vegan",
    "vegetarian",
  ];
  const HEADER =
    recipeList.length == 61 ? "Showing all recipes" : recipeList[0].category;
  const showRecipe = (item) => {
    setRecipeToShow(item);
  };
  const alergenFilter = (alergen) => {
    if (alergen === "vegetarian" || alergen === "vegan") {
      nutritionalFilter(alergen, "vegan");
    } else {
      setRecipeList(recipeList.filter((recipe) => recipe[alergen] === false));
    }
  };
  const nutritionalFilter = (diet, diet2) => {
    setRecipeList(
      recipeList.filter(
        (recipe) =>
          recipe.dietaryRestrictions === diet ||
          recipe.dietaryRestrictions === diet2
      )
    );
  };
  return (
    <SafeAreaView>
      <Text style={{ flex: 1 }}>{HEADER}</Text>
      <TouchableOpacity
        style={{ left: "80%", top: -100 }}
        title="Return Home"
        onPress={() => {
          props.showRecipes();
        }}
      >
        <Image style={styles.cake} source={require("../assets/house.png")} />
      </TouchableOpacity>
      <ScrollView style={styles.list}>
        {recipeToShow === null &&
          recipeList.map((recipe) => (
            <Text key={recipe.id}>
              <Button
                title={recipe.name}
                onPress={() => {
                  showRecipe(recipe);
                }}
              />
            </Text>
          ))}
        {recipeToShow != null && (
          <RecipeInfoScreen recipeToShow={recipeToShow} />
        )}
      </ScrollView>
      <View style={styles.container}>
        {recipeToShow === null && (
          <View style={styles.smallContainer}>
            {allergies.map((allergy) => {
              return (
                <View style={styles.buttonGroup} key={allergy}>
                  <TouchableOpacity
                    onPress={() => {
                      alergenFilter(allergy);
                    }}
                  >
                    <Text style={styles.text}>
                      {allergy == "vegan" || allergy == "vegetarian"
                        ? allergy
                        : `no ${allergy}`}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    // top: -20,
    flex: 1,
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
  text: {
    color: "white",
  },
  list: {
    height: "50%",
    top: -40,
  },
});
export default RecipesScreen;
