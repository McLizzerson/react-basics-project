import { Box, Center, Heading, Stack } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";

export const RecipeListPage = () => {
  // You can play around with the console log, but ultimately remove it once you are done
  console.log(data.hits[0]);

  return (
    <Box height="100vh" flexDir="column">
      <Heading align="Center" padding={4}>
        Recipe List Page
      </Heading>
      <Stack gap={8}>
        {data.hits.map((hit) => (
          <RecipeCard key={hit.recipe.label} recipe={hit} />
        ))}
      </Stack>
    </Box>
  );
};
