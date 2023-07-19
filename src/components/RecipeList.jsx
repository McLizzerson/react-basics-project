import { Stack } from "@chakra-ui/react";
import { RecipeCard } from "./RecipeCard";

export const RecipeList = ({ recipeList, clickFn }) => {
  console.log(recipeList);

  return (
    <Stack gap={8}>
      {recipeList.map((recipe) => (
        <RecipeCard
          key={recipe.recipe.label}
          recipe={recipe}
          clickFn={clickFn}
        />
      ))}
    </Stack>
  );
};
