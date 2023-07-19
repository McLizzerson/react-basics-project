import { useState } from "react";
import { data } from "../utils/data";
import { TextInput } from "./ui/TextInput";
import { Flex, Text } from "@chakra-ui/react";
import { RecipeList } from "./RecipeList";

export const RecipeSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("paleo");

  const handleChange = (event) => setSearchField(event.target.value);

  const matchedRecipes = data.hits.filter((recipe) => {
    console.log("this is a recipe");
    console.log(recipe);

    let listOfMatches = [];
    if (recipe.recipe.label.toLowerCase().includes(searchField.toLowerCase())) {
      listOfMatches.push(recipe);
    }
    return listOfMatches;
  });

  console.log(data);
  console.log(typeof data.hits);
  console.log(matchedRecipes);
  console.log(typeof matchedRecipes);

  return (
    <Flex direction="column" align="center" gap={4}>
      <TextInput changeFn={handleChange} />
      <Text>{searchField}</Text>
      {/* <RecipeList recipeList={matchedRecipes} clickFn={clickFn} /> */}
    </Flex>
  );
};
