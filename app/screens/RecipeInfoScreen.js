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
                {props.recipe.author}
            </Text>
            <Text>
                {props.recipe.authorTitle}
            </Text>
            <Text>   
                {props.recipe.story}
            </Text>
            <Text>   
                Prep time: {props.recipe.prepTime}
            </Text>
            <Text>   
                Cook time: {props.recipe.cookTime}
            </Text>
            <Text>   
                Serving size: {props.recipe.servingSize}
            </Text>
            <Text>   
                Number of servings: {props.recipe.yields}
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
                {props.recipe.ingredients.map((ingredient) => (
                    <Text key={ingredient} >{ingredient}</Text>
                ))}
                </Text>
                <Text>
                {props.recipe.directions.map((direction) => (
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