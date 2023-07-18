import { Box, Heading } from "@chakra-ui/react";
import { RecipeSearch } from "../components/RecipeSearch";
import { RecipeList } from "../components/RecipeList";

export const RecipeListPage = ({ clickFn }) => {
  return (
    <Box flexDir="column" bg="purple.50">
      <Heading align="Center" padding={4}>
        Search for Recipes
      </Heading>

      <RecipeSearch />

      <RecipeList clickFn={clickFn} />
    </Box>
  );
};
