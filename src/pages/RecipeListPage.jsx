import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { RecipeSearch } from "../components/RecipeSearch";
import { LabelTag } from "../components/ui/Tag";

export const RecipeListPage = ({ clickFn }) => {
  return (
    <Box flexDir="column" bg="purple.50" borderRadius={10} padding={8}>
      <Heading align="Center" padding={4}>
        Winc Recipe App 🥗
      </Heading>
      <Flex
        bg="white"
        padding={4}
        marginBottom={4}
        gap={4}
        direction="column"
        wrap="wrap"
      >
        <Text>
          Search for recipe names or healthlabels <br />
          Select a filter to filter your results
          <br />
          Or browse through the entire list!
        </Text>
        <Flex wrap="warp" direction="row" justify="center" gap={4}>
          <LabelTag text="Meal & Dish type" typeOfTag={"mealType"} />
          <LabelTag text="Diet label" typeOfTag={"dietLabel"} />
          <LabelTag text="Health label" typeOfTag={"healthLabel"} />
        </Flex>
      </Flex>

      <RecipeSearch clickFn={clickFn} />
    </Box>
  );
};
