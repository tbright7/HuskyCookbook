import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import RecipesScreen from './app/screens/RecipesScreen.js'
import SavedRecipesScreen from './app/screens/SavedRecipesScreen.js'
export default function App() {
  const [viewRecipes, setViewRecipes] = useState(false)
  const [viewSavedRecipes, setViewSavedRecipes] = useState(false)
  const showRecipes = () =>{
    setViewRecipes(!viewRecipes)
  }
  const showSavedRecipes = () =>{
    setViewSavedRecipes(!viewSavedRecipes)
  }
  return (
    <View style={styles.container}>
      {viewRecipes === false && viewSavedRecipes === false &&
      <Button title="Recipes" onPress={() => {
    showRecipes();
  }}/>
      }
      {viewRecipes === true && 
        <RecipesScreen showRecipes={showRecipes}/>
      }
      {viewRecipes === false && viewSavedRecipes === false &&
      <Button title="Saved Recipes" onPress={() => {
        showSavedRecipes();
      }}/>      
      }
      <StatusBar style="auto" />
      {viewSavedRecipes === true && 
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


