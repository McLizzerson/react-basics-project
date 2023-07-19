import { useState } from "react";
import { data } from "../utils/data";
import { TextInput } from "./ui/TextInput";
import { Flex, Text } from "@chakra-ui/react";
import { RecipeList } from "./RecipeList";

export const RecipeSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => setSearchField(event.target.value);

  const matchedRecipes = data.hits.filter((recipe) => {
    // console.log("this is a recipe");
    // console.log(recipe);
    console.log(recipe.recipe.label);

    if (recipe.recipe.label.toLowerCase().includes(searchField.toLowerCase())) {
      return recipe;
    }
  });

  // console.log(data);
  console.log(`data is a type of: ${typeof data}`);
  console.log(`matched recipes is length: ${matchedRecipes.length}`);
  console.log(matchedRecipes);

  matchedRecipes.map((recipe) => {
    console.log(recipe.recipe.label);
  });

  return (
    <Flex direction="column" align="center" gap={4}>
      <TextInput changeFn={handleChange} />
      <Text>{searchField}</Text>
      <RecipeList recipeList={matchedRecipes} clickFn={clickFn} />
    </Flex>
  );
};
