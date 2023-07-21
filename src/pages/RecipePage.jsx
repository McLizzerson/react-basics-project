import {
  Flex,
  Image,
  Text,
  Stack,
  Heading,
  Card,
  CardBody,
  Button,
} from "@chakra-ui/react";
import { LabelTag } from "../components/ui/Tag";
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
  const kcal = Math.round(recipe.recipe.calories);
  const ingredientLines = recipe.recipe.ingredientLines;
  const totalNutrients = recipe.recipe.totalNutrients;

  // Check if there are cautions
  let caution = false;
  if (cautions.length > 0) {
    caution = true;
  }

  return (
    <Card
      bg="#F9FAF2"
      borderRadius={50}
      maxWidth={{ base: "100vw", sm: "xl", md: "4xl", lg: "5xl" }}
      direction={{ base: "column", sm: "row", md: "row" }}
    >
      {/* Container for the image */}
      <Flex
        maxWidth={{ base: "100%", sm: "35%", md: "25%" }}
        h={{ base: "250px", sm: "auto", md: "auto" }}
        borderTopRadius={{ base: 50, sm: 0 }}
        borderBottomLeftRadius={{ base: 0, sm: 50 }}
        borderTopLeftRadius={{ base: 50, sm: 50 }}
        bg="#AEB240"
      >
        <Image
          src={imageUrl}
          alt={recipeName}
          objectFit="cover"
          borderTopRadius={{ base: 50, sm: 0 }}
          borderBottomLeftRadius={{ base: 0, sm: 50 }}
          borderTopLeftRadius={{ base: 50, sm: 50 }}
          overflow="hidden"
        />
      </Flex>

      <CardBody height="50%">
        <Heading
          size={{ base: "lg", sm: "lg", md: "lg", lg: "xl" }}
          align="center"
          color="#475223"
          borderBottomWidth={4}
          borderColor="#475223"
          padding={4}
        >
          {recipeName.toUpperCase()}
        </Heading>

        <Stack mt="4" spacing="2">
          {/* Container for meal, dish and diet labels */}
          <Flex justify="center" gap={4} wrap="wrap">
            <LabelTag text={mealType} typeOfTag="mealType" />
            <LabelTag text={dishType} typeOfTag="dishType" />
            {dietLabels.map((item) => (
              <LabelTag key={item} text={item} typeOfTag="dietLabel" />
            ))}
          </Flex>

          {/* Container for cooking time, servings and kcal */}
          <Flex align="flex-start" direction="column">
            <Text>
              <b>⏲️ Total cooking time: </b>
              {cookingTime}
            </Text>
            <Text>
              <b>👥 Servings: </b>
              {yields}
            </Text>
            <Text>
              <b>🔥 Total energy: </b>
              {kcal} kcal
            </Text>
          </Flex>

          {/* Container with the ingredients and a nutrient table */}
          <Flex
            direction={{
              base: "column",
              sm: "column",
              md: "row",
            }}
            gap={4}
            justify="space-between"
          >
            {/* Ingredients */}
            <Flex
              direction="column"
              align="flex-start"
              gap={0}
              w={{ base: "100%", sm: "100%", md: "50%", lg: "60%" }}
            >
              <Text>
                <b>Ingredients:</b>
              </Text>
              {ingredientLines.map((line) => (
                <Text key={line} textAlign="left">
                  {line}
                  <br />
                </Text>
              ))}
            </Flex>

            {/* Nutrients */}
            <Flex direction="column" justify="flex-start" align="flex-start">
              <Text>
                <b>Nutrients: </b>
              </Text>
              <NutrientTable list={totalNutrients} />
            </Flex>
          </Flex>

          {/* Health Labels */}
          <Text align="left">
            <b>Health Labels:</b>
          </Text>
          <Flex
            direction="row"
            justify="center"
            wrap="wrap"
            gap={2}
            borderBottomWidth={4}
            borderColor="#475223"
            paddingBottom={4}
          >
            {healthLabels.map((item) => (
              <LabelTag key={item} text={item} typeOfTag="healthLabel" />
            ))}
          </Flex>

          {/* Cautions, if there are any */}
          {caution && (
            <Text align="center">
              <b>Caution:</b>
            </Text>
          )}
          <Flex justify="center" gap={4} paddingBottom={4}>
            {cautions.map((item) => (
              <LabelTag key={item} text={item} typeOfTag="cautions" />
            ))}
          </Flex>

          <Button
            w="100px"
            bg="#475223"
            size="sm"
            color="white"
            _hover={{ bg: "#AEB240" }}
            _active={{ bg: "#AFC361" }}
            cursor="pointer"
            onClick={() => clickFn()}
          >
            Go Back
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};
