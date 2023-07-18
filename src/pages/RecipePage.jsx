import { CardFooter, Heading, SimpleGrid } from "@chakra-ui/react";
import { Flex, Image, Text, Stack } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";
import { LabelTag } from "../components/ui/Tag";
import { Button } from "@chakra-ui/react";
import { NutrientTable } from "../components/NutrientsTable";

export const RecipePage = ({ recipe, clickFn }) => {
  const imageUrl = recipe.recipe.image;
  const recipeName = recipe.recipe.label;
  const dietLabels = recipe.recipe.dietLabels;
  const dishType = recipe.recipe.dishType;
  const mealType = recipe.recipe.mealType;
  const healthLabels = recipe.recipe.healthLabels;
  const cautions = recipe.recipe.cautions;
  const cookingTime = recipe.recipe.totalTime;
  const yields = recipe.recipe.yield;
  const ingredientLines = recipe.recipe.ingredientLines;
  const totalNutrients = recipe.recipe.totalNutrients;

  // CHECK IF THERE ARE CAUTIONS
  let caution = false;
  if (cautions.length > 0) {
    caution = true;
  }

  return (
    <Card bg="#F9F3DF" borderRadius={10} maxWidth="100vw" h="auto">
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
            {dietLabels.map((item) => (
              <LabelTag key={item} text={item} typeOfTag="dietLabel" />
            ))}
          </Flex>

          <Flex direction="column" justify="flex-start" gap={0}>
            <Text>
              <b>Total cooking time: </b>
              {cookingTime}
            </Text>
            <Text>
              <b>Servings: </b>
              {yields}
            </Text>
            <br />
            <Text>
              <b>Ingredients:</b>
            </Text>

            {ingredientLines.map((line) => (
              <Text key={line}>
                {line}
                <br />
              </Text>
            ))}
          </Flex>

          <Flex direction="column" justify="flex-start" gap={0}>
            <Text>
              <b>Nutrients: </b>
            </Text>
            <NutrientTable list={totalNutrients} />
          </Flex>

          <SimpleGrid columns={3} justify="center" gap={4} paddingBottom={4}>
            {healthLabels.map((item) => (
              <LabelTag key={item} text={item} typeOfTag="healthLabel" />
            ))}
          </SimpleGrid>

          {caution && (
            <Text align="center">
              <b>Caution</b>
            </Text>
          )}
          <Flex justify="center" gap={4} paddingBottom={4}>
            {cautions.map((item) => (
              <LabelTag key={item} text={item} typeOfTag="cautions" />
            ))}
          </Flex>
        </Stack>
      </CardBody>

      <CardFooter>
        <Button cursor="pointer" onClick={() => clickFn()}>
          Go Back
        </Button>
      </CardFooter>
    </Card>
  );
};
