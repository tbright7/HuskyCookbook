import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import RecipesScreen from './app/screens/RecipesScreen.js'
import SavedRecipesScreen from './app/screens/SavedRecipesScreen.js'
import recipes from "./app/Recipes.js"
export default function App() {
  const [viewRecipes, setViewRecipes] = useState(false)
  const [viewSavedRecipes, setViewSavedRecipes] = useState(false)
  const [recipeList, setRecipeList] = useState(recipes)
  const showRecipes = () =>{
    setViewRecipes(!viewRecipes)
  }
  const showSavedRecipes = () =>{
    setViewSavedRecipes(!viewSavedRecipes)
  }
  const filterRecipes = (item) =>{
    setRecipeList(recipes.filter((recipe) =>recipe.category === item))
  }
  const alergenFilter = (alergen) =>{
    setRecipeList(recipeList.filter((recipe) => recipe[alergen] === false))
    console.log(recipeList)
  }
  return (
    <View style={styles.container}>
      {viewRecipes === false && viewSavedRecipes === false &&
      <View>
      <Button title ="appetizers, sides, & snacks" onPress={() =>{
        filterRecipes("appetizers, sides, & snacks");
        showRecipes()
      }}/>
     
      <Button title ="hearty mains" onPress={() =>{
        filterRecipes("hearty mains");
        showRecipes()
      }}/>
     
      <Button title ="soups & stews" onPress={() =>{
        filterRecipes("soups & stews");
        showRecipes()
      }}/>
      <Button title ="sweet & savory baked goods" onPress={() =>{
        filterRecipes("sweet & savory baked goods");
        showRecipes()
      }}/>
      <Button title="View all recipes" onPress={() => {
    showRecipes();
  }}/>
    </View>
    }
      {viewRecipes === true && 
        <RecipesScreen alergenFilter = {alergenFilter} recipes = {recipeList} showRecipes={showRecipes}/>
      }
      {viewRecipes === false && viewSavedRecipes === false &&
      <Button title="Saved Recipes" onPress={() => {
        showSavedRecipes();
      }}/>      
      }
      <StatusBar style="auto" />
      {viewSavedRecipes === true && viewSavedRecipes === true &&
      <SavedRecipesScreen showSavedRecipes={showSavedRecipes}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


