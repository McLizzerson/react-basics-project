import { Box, Flex } from "@chakra-ui/react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { useState } from "react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <Flex bg="#E7F2F2" justify="center" align="center" minHeight="100vh">
      <Box
        backgroundColor="#E7F2F2"
        w="80vw"
        align="center"
        padding={{ base: 0, sm: 4, md: 8 }}
      >
        {selectedRecipe ? (
          <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe} />
        ) : (
          <RecipeListPage clickFn={setSelectedRecipe} />
        )}
      </Box>
    </Flex>
  );
};
