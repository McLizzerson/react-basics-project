import { Flex, Heading, Text } from "@chakra-ui/react";
import { RecipeSearch } from "../components/RecipeSearch";
import { LabelTag } from "../components/ui/Tag";

export const RecipeListPage = ({ clickFn }) => {
  return (
    <Flex direction="column" bg="white" borderRadius={50} padding={8}>
      <Heading
        align="Center"
        padding={4}
        color="#475223"
        size={{ base: "lg", sm: "xl", md: "2xl", lg: "3xl" }}
      >
        WINC RECIPE APP 🥗
      </Heading>

      {/* Container with general info about the app */}
      <Flex
        bg="#F9FAF2"
        padding={4}
        marginBottom={4}
        gap={4}
        direction="column"
        wrap="wrap"
        w="100%"
      >
        <Text>
          Search for recipe names or health labels <br />
          Select a filter to narrow your search results <br />
          Or browse through the entire list!
        </Text>
        <Text>
          Each recipe has colored labels with the following categories:
        </Text>
        <Flex
          wrap="warp"
          direction={{ base: "column", sm: "row" }}
          justify="center"
          align="center"
          gap={4}
        >
          <LabelTag text="Meal & Dish type" typeOfTag={"mealType"} />
          <LabelTag text="Diet label" typeOfTag={"dietLabel"} />
          <LabelTag text="Health label" typeOfTag={"healthLabel"} />
        </Flex>
      </Flex>

      {/* Here we call on the Recipesearch component that will load the radiogroup buttons, searchfield and show the list of recipes */}
      <RecipeSearch clickFn={clickFn} />
    </Flex>
  );
};
