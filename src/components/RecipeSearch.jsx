import { useState } from "react";
import { data } from "../utils/data";
import { TextInput } from "./ui/TextInput";
import { Flex, Radio, RadioGroup } from "@chakra-ui/react";
import { RecipeList } from "./RecipeList";

export const RecipeSearch = ({ clickFn }) => {
  // Searchfield
  const [searchField, setSearchField] = useState("");
  const handleChange = (event) => setSearchField(event.target.value);

  // RadioGroup
  // This will prepare the recipe list before it goes into the searchfield function
  const [value, setValue] = useState("all");

  let dataMassaged;

  switch (value) {
    case "veg":
      dataMassaged = data.hits.filter((recipe) => {
        return recipe.recipe.healthLabels.includes("Vegetarian");
      });
      break;
    case "vegan":
      dataMassaged = data.hits.filter((recipe) => {
        return recipe.recipe.healthLabels.includes("Vegan");
      });
      break;
    case "pesc":
      dataMassaged = data.hits.filter((recipe) => {
        return recipe.recipe.healthLabels.includes("Pescatarian");
      });
      break;
    case "all":
      dataMassaged = data.hits;
  }

  // Searchfunction to search for recipe names or healthlabels
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
    // returns a container with the RadioGroup, searchfield and the resulting list of recipes
    <Flex direction="column" align="center" gap={4} w="100%">
      <RadioGroup onChange={setValue} value={value} colorScheme="green">
        <Flex direction="row" gap={4} wrap="wrap">
          <Radio value="all">All</Radio>
          <Radio value="veg">Vegetarian</Radio>
          <Radio value="vegan">Vegan</Radio>
          <Radio value="pesc">Pescatarian</Radio>
        </Flex>
      </RadioGroup>

      <TextInput changeFn={handleChange} />

      <RecipeList recipeList={matchedRecipes} clickFn={clickFn} />
    </Flex>
  );
};
