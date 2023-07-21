import { Flex } from "@chakra-ui/react";
import { RecipeCard } from "./RecipeCard";

export const RecipeList = ({ recipeList, clickFn }) => {
  return (
    <Flex wrap="wrap" justify="center" gap={8}>
      {recipeList.map((recipe) => (
        <RecipeCard
          key={recipe.recipe.label}
          recipe={recipe}
          clickFn={clickFn}
        />
      ))}
    </Flex>
  );
};
