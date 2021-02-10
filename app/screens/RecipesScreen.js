import React, { useState } from "react";
import FilterScreen from "./FilterScreen.js";
import NavBar from "./NavBar.js";
import RecipeListScreen from "./RecipeListScreen.js";
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
  const [originalList, setOriginalList] = useState(props.recipes);
  const [showFilters, setShowFilters] = useState(false);
  const [activeAllergies, setActiveAllergies] = useState([]);
  const HEADER =
    recipeList.length >= 61 ? "Showing all recipes" : props.recipes[0].category;
  const showRecipe = (item) => {
    setRecipeToShow(item);
  };
  const buildActiveAllergies = (alergen) => {
    if (!activeAllergies.includes(alergen)) {
      activeAllergies.push(alergen);
    }
  };
  const alergenFilter = (alergen) => {
    buildActiveAllergies(alergen);
    if (alergen === "Vegetarian" || alergen === "Vegan") {
      nutritionalFilter(alergen, "Vegan");
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
  const showFilterList = () => {
    setShowFilters(!showFilters);
  };
  return (
    <View style={{ backgroundColor: "yellow" }}>
      <Text style={styles.header}>{HEADER}</Text>
      <NavBar showRecipes={props.showRecipes} showFilterList={showFilterList} />
      {showFilters === true && recipeToShow === null && (
        <FilterScreen
          buildActiveAllergies={buildActiveAllergies}
          setRecipeList={setRecipeList}
          recipeList={recipeList}
          activeAllergies={activeAllergies}
          showFilters={showFilters}
          alergenFilter={alergenFilter}
          recipes={props.recipes}
        />
      )}
      {recipeToShow === null && (
        <RecipeListScreen
          key={recipeList}
          showRecipe={showRecipe}
          recipeList={recipeList}
        />
      )}
      {recipeToShow != null && <RecipeInfoScreen recipeToShow={recipeToShow} />}
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flex: 0.25,
    fontSize: 25,
    top: 20,
    // top: -350,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "flex-end",
    // paddingRight: 60,
    // paddingLeft: 60,
    // width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "red",
  },
});
export default RecipesScreen;
