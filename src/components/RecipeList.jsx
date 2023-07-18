import { data } from "../utils/data";
import { Stack } from "@chakra-ui/react";
import { RecipeCard } from "./RecipeCard";

export const RecipeList = ({ clickFn }) => {
  return (
    <Stack gap={8}>
      {data.hits.map((hit) => (
        <RecipeCard key={hit.recipe.label} recipe={hit} clickFn={clickFn} />
      ))}
    </Stack>
  );
};
