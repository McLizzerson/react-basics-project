import { useState } from "react";
import { data } from "../utils/data";
import { TextInput } from "./ui/TextInput";
import { Flex, Checkbox, Text } from "@chakra-ui/react";
import { RecipeList } from "./RecipeList";

export const RecipeSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");
  const handleChange = (event) => setSearchField(event.target.value);

  // Checkbox Vegetarian
  const [checked, setChecked] = useState(false);
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  let dataMassaged;
  {
    checked
      ? (dataMassaged = data.hits.filter((recipe) => {
          return recipe.recipe.healthLabels.includes("Vegetarian");
        }))
      : (dataMassaged = data.hits);
  }

  // Searchfunction
  const matchedRecipes = dataMassaged.filter((recipe) => {
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
      <Checkbox onChange={handleCheckboxChange}>Vegetarian</Checkbox>
      {checked ? <Text>I'm checked!</Text> : <Text>I'm not checked...</Text>}

      <TextInput changeFn={handleChange} />
      <RecipeList recipeList={matchedRecipes} clickFn={clickFn} />
    </Flex>
  );
};
