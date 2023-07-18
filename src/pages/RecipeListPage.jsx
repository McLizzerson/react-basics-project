import { Box, Heading, Stack } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";

export const RecipeListPage = ({ clickFn }) => {
  return (
    <Box flexDir="column" bg="purple.50">
      <Heading align="Center" padding={4}>
        Search for Recipes
      </Heading>
      <Stack gap={8}>
        {data.hits.map((hit) => (
          <RecipeCard key={hit.recipe.label} recipe={hit} clickFn={clickFn} />
        ))}
      </Stack>
    </Box>
  );
};
