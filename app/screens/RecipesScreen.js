import React, { useState } from 'react';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';
import RecipeInfoScreen from "./RecipeInfoScreen.js"

function RecipesScreen(props) {
    const [recipeToShow, setRecipeToShow] = useState(null)
    const [recipeList, setRecipeList] = useState(props.recipes)
    const showRecipe = (item) => {
        setRecipeToShow(item)
    }
    const alergenFilter = (alergen) =>{
        setRecipeList(recipeList.filter((recipe) => recipe[alergen] === false))
      }
      const nutritionalFilter = (diet, diet2) =>{
        setRecipeList(recipeList.filter((recipe) => recipe.dietaryRestrictions === diet || recipe.dietaryRestrictions === diet2))
      }
    return (
        <SafeAreaView>
        <ScrollView>
            <Button title="Return Home" onPress={() => {
                props.showRecipes();
            }}/>
            <Button title="exclude eggs" onPress={() =>{
                alergenFilter("eggs")
            }}/>
            <Button title="exclude fish" onPress={() =>{
                alergenFilter("fish")
            }}/>
            <Button title="exclude shellfish" onPress={() =>{
                alergenFilter("shellfish")
            }}/>
            <Button title="exclude tree nuts" onPress={() =>{
                alergenFilter("tree nuts")
            }}/>
            <Button title="exclude soy" onPress={() =>{
                alergenFilter("soy")
            }}/>
            <Button title="exclude milk" onPress={() =>{
                alergenFilter("milk")
            }}/>
            <Button title="exclude wheat" onPress={() =>{
                alergenFilter("wheat")
            }}/>
            <Button title="vegan only" onPress={() =>{
                nutritionalFilter("vegan")
            }}/>
            <Button title="vegitarian only" onPress={() =>{
                nutritionalFilter("vegitarian", "vegan")
            }}/>
            {recipeToShow === null && 
            recipeList.map((recipe) => (
            <Text key={recipe.id}>
            <Button 
            title={recipe.name}
            onPress ={() => {
                showRecipe(recipe)
            }}
            />
            </Text>
        ))}
            {recipeToShow !=null &&
            <RecipeInfoScreen recipeToShow ={recipeToShow}/>
            }
        </ScrollView>
        </SafeAreaView>
    );
}

export default RecipesScreen;