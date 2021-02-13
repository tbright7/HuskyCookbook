import React, { useState } from "react";
import { Button, SafeAreaView, ScrollView, Text, View } from "react-native";
import NavBar from "./NavBar";

function RecipeInfoScreen(props) {
  const [showingRecipe, setShowingRecipe] = useState(false);
  const revealRecipe = () => {
    setShowingRecipe(!showingRecipe);
  };
  return (
    <View>
      <NavBar showRecipes={props.showRecipes}  />

      {showingRecipe === false && (
        <SafeAreaView style={{ flex: 1, top: 100 }}>
          <Text style={{ fontSize: 25, alignSelf: "center" }}>
            {props.recipeToShow.name}
          </Text>
          <Button
            title="See the recipe"
            onPress={() => {
              revealRecipe();
            }}
          />
          <Text style={{ fontSize: 20, padding: 5 }}>
            {props.recipeToShow.author}
          </Text>
          <Text style={{ fontSize: 20, padding: 5 }}>
            {props.recipeToShow.authorTitle}
          </Text>
          <View style={{ padding: 5 }}>
            <Text style={{ fontSize: 20 }}>{props.recipeToShow.story}</Text>
          </View>
          <View style={{ padding: 5 }}>
            <Text style={{ fontSize: 20 }}>
              Prep time: {props.recipeToShow.prepTime}
            </Text>
            <Text style={{ fontSize: 20 }}>
              Cook time: {props.recipeToShow.cookTime}
            </Text>
            <Text style={{ fontSize: 20 }}>
              Serving size: {props.recipeToShow.servingSize}
            </Text>
            <Text style={{ fontSize: 20 }}>
              Number of servings: {props.recipeToShow.yields}
            </Text>
          </View>
        </SafeAreaView>
      )}
      {showingRecipe === true && (
        <SafeAreaView>
          <ScrollView>
            <Text>
              {props.recipeToShow.ingredients.map((ingredient) => (
                <Text>{ingredient}</Text>
              ))}
            </Text>
          </ScrollView>
          <Text>
            {props.recipeToShow.directions.map((direction) => (
              <Text key={direction}>{direction}</Text>
            ))}
            <Button
              title="Return to story"
              onPress={() => {
                revealRecipe();
              }}
            />
          </Text>
        </SafeAreaView>
      )}
    </View>
  );
}

export default RecipeInfoScreen;
