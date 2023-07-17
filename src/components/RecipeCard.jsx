import { Box, Flex, Heading, Image, Text, Stack } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";
import { data } from "../utils/data";
import { LabelTag } from "./ui/Tag";

export const RecipeCard = () => {
  const recipeNr = 7;
  const imageUrl = data.hits[recipeNr].recipe.image;
  const recipeName = data.hits[recipeNr].recipe.label;
  const dietLabels = data.hits[recipeNr].recipe.dietLabels;
  const dishType = data.hits[recipeNr].recipe.dishType;
  const mealType = data.hits[recipeNr].recipe.mealType;
  const cautions = data.hits[recipeNr].recipe.cautions;
  console.log(cautions);

  return (
    <Card
      bg="#F9F3DF"
      borderRadius={10}
      maxWidth="sm"
      h="35rem"
      // onClick={() => clickFn(item)}
      cursor="pointer"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Flex w="sm" h="350px">
        <Image
          src={imageUrl}
          alt={recipeName}
          objectFit="cover"
          borderTopRadius={10}
          overflow="hidden"
        />
      </Flex>

      <CardBody height="50%">
        <Heading size="md" align="center">
          {recipeName}
        </Heading>

        <Stack mt="4" spacing="2">
          <Flex justify="center" gap={4} paddingBottom={4}>
            <LabelTag text={mealType} typeOfTag="mealType" />
            <LabelTag text={dishType} typeOfTag="dishType" />
          </Flex>

          <Flex justify="center" gap={4} paddingBottom={4}>
            {dietLabels.map((item) => (
              <LabelTag key={item} text={item} typeOfTag="dietLabel" />
            ))}
          </Flex>

          <Flex justify="center" gap={4} paddingBottom={4}>
            <LabelTag text="Vegetarian" typeOfTag="veganVeg" />
          </Flex>

          <Text align="center">
            <b>Caution</b>
          </Text>
          <Flex justify="center" gap={4} paddingBottom={4}>
            {cautions.map((item) => (
              <LabelTag key={item} text={item} typeOfTag="cautions" />
            ))}
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};
