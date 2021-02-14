import React, { useEffect } from "react";
import {
  TouchableOpacity,
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  Switch,
} from "react-native";

function RecipeListScreen(props) {
  return (
    <ScrollView
      style={{
        flex: 1,
        flexDirection: "rows",
        flexWrap: "wrap",
      }}
    >
      <View style={styles.bigList}>
        {props.recipeList.map((recipe) => (
          <View key={recipe.name} style={styles.menuItemsContainer}>
            <TouchableOpacity
              title={recipe.name}
              style={styles.touchables}
              onPress={() => {
                props.showRecipe(recipe);
              }}
            >
              <Image
                style={{
                  height: "100%",
                  width: "25%",
                  justifyContent: "flex-start",
                  borderBottomLeftRadius: 20,
                  borderTopLeftRadius: 20,
                }}
                source={require(`../assets/107.jpg`)}
                // source={{
                //   uri: `https://huskycookbook.s3-us-west-2.amazonaws.com/${recipe.id}.jpg`,
                // }}
              />
              <View
                style={{
                  width: "75%",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                <Text
                  numberOfLines={2}
                  adjustsFontSizeToFit
                  allowFontScaling
                  style={styles.text}
                >
                  {recipe.name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  bigList: {
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  touchables: {
    height: 125,
    width: "100%",
    padding: 2,
    borderRadius: 20,
    borderWidth: 3,
    backgroundColor: "#d8c7ff",
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 3,
      width: 3,
    },
    borderColor: "#4b2e83",
    flexDirection: "row",
  },
  menuItemsContainer: {
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 4,
  },
  text: {
    paddingLeft: 5,
    fontSize: 22,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
export default RecipeListScreen;
