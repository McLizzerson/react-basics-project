import { useState } from "react";
import { data } from "../utils/data";
import { TextInput } from "./ui/TextInput";
import { Flex, Checkbox, Box } from "@chakra-ui/react";
import { RecipeList } from "./RecipeList";

export const RecipeSearch = ({ clickFn }) => {
  // Searchfield
  const [searchField, setSearchField] = useState("");
  const handleChange = (event) => setSearchField(event.target.value);

  // Checkbox Vegetarian
  const [checkedVeg, setCheckedVeg] = useState(false);
  const handleCheckboxChangeVeg = () => {
    setCheckedVeg(!checkedVeg);
  };

  // Checkbox VEGAN
  const [checkedVegan, setCheckedVegan] = useState(false);
  const handleCheckboxChangeVegan = () => {
    setCheckedVegan(!checkedVegan);
  };

  // Checkbox PESCETARIAN
  const [checkedPesc, setCheckedPesc] = useState(false);
  const handleCheckboxChangePesc = () => {
    setCheckedPesc(!checkedPesc);
  };

  let dataMassaged;

  switch (true) {
    case checkedVeg:
      dataMassaged = data.hits.filter((recipe) => {
        return recipe.recipe.healthLabels.includes("Vegetarian");
      });
      break;
    case checkedVegan:
      dataMassaged = data.hits.filter((recipe) => {
        return recipe.recipe.healthLabels.includes("Vegan");
      });
      break;
    case checkedPesc:
      dataMassaged = data.hits.filter((recipe) => {
        return recipe.recipe.healthLabels.includes("Pescatarian");
      });
      break;
    default:
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
    // returns a container with the checkbox, searchfield and the resulting list or recipes
    <Flex direction="column" align="center" gap={4} w="100%">
      <Flex gap={4} justify="center" bg="white" w="100%" padding={2}>
        <Checkbox onChange={handleCheckboxChangeVeg}>Vegetarian</Checkbox>
        <Checkbox onChange={handleCheckboxChangeVegan}>Vegan</Checkbox>
        <Checkbox onChange={handleCheckboxChangePesc}>Pescetarian</Checkbox>
      </Flex>

      <TextInput changeFn={handleChange} />

      <RecipeList recipeList={matchedRecipes} clickFn={clickFn} />
    </Flex>
  );
};
