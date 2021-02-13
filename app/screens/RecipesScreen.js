import React, { useEffect, useReducer, useState } from "react";
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
  const [removeFilterIcon, setRemoveFilterIcon] = useState(false);
  const [recipeToShow, setRecipeToShow] = useState(null);
  const [recipeList, setRecipeList] = useState(props.recipes);
  const [showFilters, setShowFilters] = useState(false);
  const [activeAllergies, setActiveAllergies] = useState([]);
  var Promise = require("bluebird");
  const HEADER =
    recipeList.length >= 61 ? "Showing all recipes" : props.recipes[0].category;
  const showRecipe = (item) => {
    setRecipeToShow(item);
    setRemoveFilterIcon(!removeFilterIcon);
  };
  const buildActiveAllergies = (allergen) => {
    if (allergen === "Reset Filters") {
      while (activeAllergies.length > 0) {
        activeAllergies.pop();
        setRecipeList(props.recipes);
      }
    } else if (!activeAllergies.includes(allergen)) {
      activeAllergies.push(allergen);
      activeAllergies.map((active) => {
        allergenFilter(active);
      });
    }
  };

  const allergenFilter = (allergen) => {
    if (allergen === "Vegetarian" || allergen === "Vegan") {
      nutritionalFilter(allergen, "Vegan");
    } else {
      setRecipeList(recipeList.filter((recipe) => recipe[allergen] === false));
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
    <View>
      {recipeToShow === null && <Text style={styles.header}>{HEADER}</Text>}
      {recipeToShow === null && (
        <NavBar
          showRecipes={props.showRecipes}
          showFilterList={showFilterList}
          removeFilterIcon={removeFilterIcon}
        />
      )}
      {showFilters === true && recipeToShow === null && (
        <FilterScreen
          buildActiveAllergies={buildActiveAllergies}
          setRecipeList={setRecipeList}
          recipeList={recipeList}
          activeAllergies={activeAllergies}
          showFilters={showFilters}
          allergenFilter={allergenFilter}
          recipes={props.recipes}
        />
      )}
      {recipeToShow === null && (
        <RecipeListScreen
          key={recipeList.length}
          showRecipe={showRecipe}
          recipeList={recipeList}
          setRecipeList={setRecipeList}
          recipes={props.recipes}
        />
      )}
      {recipeToShow != null && (
        <RecipeInfoScreen
          showRecipe={showRecipe}
          showRecipes={props.showRecipes}
          recipeToShow={recipeToShow}
          removeFilterIcon={removeFilterIcon}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flex: 0.25,
    fontSize: 30,
    top: 20,
    // top: -350,
    justifyContent: "center",
    alignSelf: "center",
    // alignItems: "center",
    // alignContent: "center",

    // backgroundColor: "yellow",
    // paddingRight: 70,
    // paddingLeft: 70,
    // width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    color: "#b7a57a",
  },
});
export default RecipesScreen;
