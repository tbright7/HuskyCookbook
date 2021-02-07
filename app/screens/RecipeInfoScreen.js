import React, { useState } from 'react';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';

function RecipeInfoScreen(props) {
    const [showingRecipe, setShowingRecipe] = useState(false)
    const revealRecipe = () => {
        setShowingRecipe(!showingRecipe)
    }
    return (
        <View>
            {showingRecipe === false && 
            <View>
            <Text>
                {props.recipeToShow.author}
            </Text>
            <Text>
                {props.recipeToShow.authorTitle}
            </Text>
            <Text>   
                {props.recipeToShow.story}
            </Text>
            <Text>   
                Prep time: {props.recipeToShow.prepTime}
            </Text>
            <Text>   
                Cook time: {props.recipeToShow.cookTime}
            </Text>
            <Text>   
                Serving size: {props.recipeToShow.servingSize}
            </Text>
            <Text>   
                Number of servings: {props.recipeToShow.yields}
            </Text>
            <Button 
            title="See the recipe"
            onPress={() =>{
                revealRecipe()
            }}/>
            </View>
            }
            {showingRecipe === true && 
            <ScrollView>
                <SafeAreaView>

                <Text>
                {props.recipeToShow.ingredients.map((ingredient) => (
                    <Text key={ingredient} >{ingredient}</Text>
                ))}
                </Text>
                <Text>
                {props.recipeToShow.directions.map((direction) => (
                    <Text key={direction} >{direction}</Text>
                ))}
                <Button 
                title="Return to story"
                onPress={() =>{
                revealRecipe()
            }}/>
                </Text>
                </SafeAreaView>
            </ScrollView>
            }

        </View>
    );
}

export default RecipeInfoScreen;