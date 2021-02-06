import React from 'react';
import { Button, Text, View } from 'react-native';

function RecipesScreen(props) {
    return (
        <View>
            <Button 
            title='Home' 
            onPress={() => {
            props.showRecipes();
            }}/>
            <Text>
            Hi Ivory, here's where I'm going to show a list of recipes users can click on
            </Text>
        </View>
    );
}

export default RecipesScreen;