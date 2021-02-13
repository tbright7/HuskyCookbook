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
        // backgroundColor: "#4b2e83",
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
                  height: 150,
                  width: "100%",
                  justifyContent: "center",
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  alignSelf: "center",
                }}
                source={require(`../assets/107.jpg`)}
                // source={{
                //   uri: `https://huskycookbook.s3-us-west-2.amazonaws.com/${recipe.id}.jpg`,
                // }}
              />
              <Text style={styles.text}> {recipe.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  bigList: {
    // top: -20,
    flex: 1,
    // flexGrow: 1,
    // width: 370,
    // height: 200,
    flexDirection: "row",
    flexWrap: "wrap",
    // backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    // backgroundColor: "white",
    // backgroundColor: "#4b2e83",
  },
  touchables: {
    // width: 100,
    height: 200,
    width: "100%",
    margin: 1,
    // padding: 2,
    justifyContent: "center",
    // alignItems: "center",
    // alignContent: "center",
    // alignSelf: "center",
    // borderWidth: 1,
    borderRadius: 20,
    borderWidth: 3,
    // borderColor: "#b7a57a",
    backgroundColor: "#d8c7ff",
    // backgroundColor: "white",

    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 3,
      width: 3,
    },
    borderColor: "#4b2e83",

    // flex: 1,
    // flexDirection: "row",
    // flexWrap: "wrap",
  },
  menuItemsContainer: {
    // flex: 1,
    // flexDirection: "row",
    // flexWrap: "wrap",
    // justifyContent: "center",
    // alignContent: "center",
    // alignItems: "center",
    padding: 4,
  },
  text: {
    // color: "white",
    width: 150,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    // paddingLeft: 0,
    // paddingRight: 0,
  },
});
export default RecipeListScreen;
