import { Flex, Heading, Image, Text, Stack } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";
import { LabelTag } from "./ui/Tag";

export const RecipeCard = ({ recipe }) => {
  const imageUrl = recipe.recipe.image;
  const recipeName = recipe.recipe.label;
  const dietLabels = recipe.recipe.dietLabels;
  const dishType = recipe.recipe.dishType;
  const mealType = recipe.recipe.mealType;
  const cautions = recipe.recipe.cautions;

  return (
    <Card
      bg="#F9F3DF"
      borderRadius={10}
      maxWidth="100vw"
      h="35rem"
      // onClick={() => clickFn(item)}
      cursor="pointer"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Flex w="100vw" h="250px">
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
