import React from "react";
import FilterScreen from "./FilterScreen.js";
import NavBar from "./NavBar.js";
import RecipeListScreen from "./RecipeListScreen.js";
import { Text, View } from "react-native";
import RecipeInfoScreen from "./RecipeInfoScreen.js";
class RecipesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      removeFilterIcon: false,
      recipeToShow: null,
      recipeList: this.props.recipes,
      showFilters: false,
      activeAllergies: [],
    };
    (this.state.HEADER =
      this.state.recipeList.length >= 61
        ? "Showing all recipes"
        : props.recipes[0].category),
      (this.buildActiveAllergies = this.buildActiveAllergies.bind(this));
    this.allergenFilter = this.allergenFilter.bind(this);
    this.nutritionalFilter = this.nutritionalFilter.bind(this);
    this.showFilterList = this.showFilterList.bind(this);
    this.showRecipe = this.showRecipe.bind(this);
  }
  showRecipe(item) {
    this.setState({
      recipeToShow: item,
      removeFilterIcon: !this.state.removeFilterIcon,
    });
  }
  buildActiveAllergies(allergen) {
    if (!this.state.activeAllergies.includes(allergen)) {
      this.state.activeAllergies.push(allergen);
      this.state.activeAllergies.map((active) => {
        this.allergenFilter(active);
      });
    } else if (this.state.activeAllergies.includes(allergen)) {
      this.setState(
        {
          recipeList: this.props.recipes,
          activeAllergies: this.state.activeAllergies.filter(
            (allergy) => allergy != allergen
          ),
        },
        () => {
          this.state.activeAllergies.map((active) => {
            this.allergenFilter(active);
          });
        }
      );
    }
  }

  allergenFilter(allergen) {
    if (allergen === "Vegetarian" || allergen === "Vegan") {
      this.nutritionalFilter(allergen, "Vegan");
    } else {
      this.setState({
        recipeList: this.state.recipeList.filter(
          (recipe) => recipe[allergen] === false
        ),
      });
    }
  }
  nutritionalFilter(diet, diet2) {
    this.setState({
      recipeList: this.state.recipeList.filter(
        (recipe) =>
          recipe.dietaryRestrictions === diet ||
          recipe.dietaryRestrictions === diet2
      ),
    });
  }
  showFilterList() {
    this.setState({
      showFilters: !this.state.showFilters,
    });
  }
  render() {
    return (
      <View>
        {this.state.recipeToShow === null && (
          <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            allowFontScaling
            style={{
              flex: 0.25,
              fontSize: 30,
              top: 20,
              justifyContent: "center",
              alignSelf: "center",
              paddingRight: 5,
              paddingLeft: 5,
              flexDirection: "row",
              flexWrap: "wrap",
              color: "#b7a57a",
            }}
          >
            {this.state.HEADER}
          </Text>
        )}
        {this.state.recipeToShow === null && (
          <NavBar
            showRecipes={this.props.showRecipes}
            showFilterList={this.showFilterList}
            removeFilterIcon={this.state.removeFilterIcon}
          />
        )}
        {this.state.showFilters === true &&
          this.state.recipeToShow === null && (
            <FilterScreen
              buildActiveAllergies={this.buildActiveAllergies}
              setRecipeList={this.state.setRecipeList}
              recipeList={this.state.recipeList}
              activeAllergies={this.state.activeAllergies}
              showFilters={this.state.showFilters}
              allergenFilter={this.allergenFilter}
              recipes={this.props.recipes}
            />
          )}
        {this.state.recipeToShow === null && (
          <RecipeListScreen
            key={this.state.recipeList.length}
            showRecipe={this.showRecipe}
            recipeList={this.state.recipeList}
            setRecipeList={this.setRecipeList}
            recipes={this.props.recipes}
          />
        )}
        {this.state.recipeToShow != null && (
          <RecipeInfoScreen
            showRecipe={this.showRecipe}
            showRecipes={this.props.showRecipes}
            recipeToShow={this.state.recipeToShow}
            removeFilterIcon={this.removeFilterIcon}
          />
        )}
      </View>
    );
  }
}

export default RecipesScreen;
