import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";
import { LabelTag } from "./ui/Tag";

export const RecipeCard = ({ recipe, clickFn }) => {
  const imageUrl = recipe.recipe.image;
  const recipeName = recipe.recipe.label;
  const dietLabels = recipe.recipe.dietLabels;
  const dishType = recipe.recipe.dishType;
  const mealType = recipe.recipe.mealType;
  const cautions = recipe.recipe.cautions;

  // Check if recipe is vegetarian or vegan
  let vegetarian = false;
  let vegan = false;
  if (recipe.recipe.healthLabels.includes("Vegetarian")) {
    vegetarian = true;
  }
  if (recipe.recipe.healthLabels.includes("Vegan")) {
    vegan = true;
  }

  // Check if the recipe has any cautions
  let caution = false;
  if (cautions.length > 0) {
    caution = true;
  }

  return (
    <Card
      bg="#F9FAF2"
      maxWidth="2xs"
      h="auto"
      onClick={() => clickFn(recipe)}
      cursor="pointer"
      _hover={{ transform: "scale(1.05)" }}
    >
      {/* Recipe image */}
      <Flex w="2xs" h="250px">
        <Image src={imageUrl} alt={recipeName} objectFit="cover" />
      </Flex>

      {/* Start of the body of the card */}
      <CardBody>
        <Heading size="md" color="#475223" align="center" w="100%" h="75px">
          {recipeName}
        </Heading>

        {/* Container for 3 flexboxes with meal & dish-, diet- and veg/vegan-labels  */}
        <Flex direction="column" gap={4} h="150px">
          <Flex justify="center" gap={4} wrap="wrap">
            <LabelTag text={mealType} typeOfTag="mealType" />
            <LabelTag text={dishType} typeOfTag="dishType" />
          </Flex>

          <Flex justify="center" gap={4} wrap="wrap">
            {dietLabels.map((item) => (
              <LabelTag key={item} text={item} typeOfTag="dietLabel" />
            ))}
          </Flex>

          <Flex justify="center" gap={4}>
            {vegetarian && (
              <LabelTag text="Vegetarian" typeOfTag="healthLabel" />
            )}
            {vegan && <LabelTag text="Vegan" typeOfTag="healthLabel" />}
          </Flex>
        </Flex>

        {/* Check for cautions, if so make tags */}
        {caution ? (
          <>
            <Text align="center">
              <b>Caution</b>
            </Text>
            <Flex justify="center" gap={4} wrap="wrap">
              {cautions.map((item) => (
                <LabelTag key={item} text={item} typeOfTag="cautions" />
              ))}
            </Flex>
          </>
        ) : (
          <Text align="center">
            <b>Caution</b>
            <br />
            <LabelTag text={"None"} typeOfTag="none" />
          </Text>
        )}
      </CardBody>
    </Card>
  );
};
