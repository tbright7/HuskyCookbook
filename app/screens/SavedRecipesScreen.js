import React from 'react';
import { Button, Text, View } from 'react-native';

function SavedRecipesScreen(props) {
    return (
        <View>
            <Button 
            title='Home' 
            onPress={() => {
                props.showSavedRecipes();
            }}/>
            <Text>
                saved recipes here
            </Text>
        </View>
    );
}

export default SavedRecipesScreen;