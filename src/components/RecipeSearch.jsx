import { useState } from "react";
import { data } from "../utils/data";
import { TextInput } from "./ui/TextInput";
import { Flex, Text } from "@chakra-ui/react";
import { RecipeList } from "./RecipeList";

export const RecipeSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => setSearchField(event.target.value);

  const matchedRecipes = data.hits.filter((recipe) => {
    const healthLabelsJson = JSON.stringify(recipe.recipe.healthLabels);

    if (
      recipe.recipe.label.toLowerCase().includes(searchField.toLowerCase()) ||
      healthLabelsJson.toLowerCase().includes(searchField.toLowerCase())
    ) {
      return recipe;
    }
  });

  return (
    <Flex direction="column" align="center" gap={4}>
      <TextInput changeFn={handleChange} />
      <Text>{searchField}</Text>
      <RecipeList recipeList={matchedRecipes} clickFn={clickFn} />
    </Flex>
  );
};
