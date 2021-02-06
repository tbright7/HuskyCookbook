import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import recipes from "../Recipes.js"
import RecipeInfoScreen from "./RecipeInfoScreen.js"

function RecipesScreen(props) {
    const [recipe, setRecipe] = useState(null)
    const showRecipe = (item) => {
        setRecipe(item)
    }
    return (
        <View>
            <Button title="Return Home" onPress={() => {
                props.showRecipes();
            }}/>
            {recipe === null && 
            recipes.map((recipe) => (
            <Text key={recipe.id}>
            <Button 
            title={recipe.name}
            onPress ={() => {
                showRecipe(recipe)
            }}
            />
            </Text>
        ))}
            {recipe !=null &&
            <RecipeInfoScreen recipe ={recipe}/>
            }
        </View>
    );
}

export default RecipesScreen;