import { Grid, GridItem } from "@chakra-ui/react";

export const NutrientTable = ({ list }) => {
  const nutrients = ["ENERC_KCAL", "FAT", "CHOCDF", "PROCNT", "CHOLE", "NA"];

  const energy = list.ENERC_KCAL.quantity.toFixed(2);
  const energyUnit = list.ENERC_KCAL.unit;
  const fat = list.FAT.quantity.toFixed(2);
  const fatUnit = list.FAT.unit;
  const carbs = list.CHOCDF.quantity.toFixed(2);
  const carbsUnit = list.CHOCDF.unit;
  const protein = list.PROCNT.quantity.toFixed(2);
  const proteinUnit = list.PROCNT.unit;
  const cholesterol = list.CHOLE.quantity.toFixed(2);
  const cholesterolUnit = list.CHOLE.unit;
  const sodium = list.NA.quantity.toFixed(2);
  const sodiumUnit = list.NA.unit;

  return (
    <Grid templateColumns="repeat(2, 1fr)" align="left" columnGap={4}>
      <GridItem>Total Energy:</GridItem>
      <GridItem>
        {energy} {energyUnit}
      </GridItem>
      <GridItem>Fat:</GridItem>
      <GridItem>
        {fat} {fatUnit}
      </GridItem>
      <GridItem>Carbs:</GridItem>
      <GridItem>
        {carbs} {carbsUnit}
      </GridItem>
      <GridItem>Protein:</GridItem>
      <GridItem>
        {protein} {proteinUnit}
      </GridItem>
      <GridItem>Cholesterol:</GridItem>
      <GridItem>
        {cholesterol} {cholesterolUnit}
      </GridItem>
      <GridItem>Sodium:</GridItem>
      <GridItem>
        {sodium} {sodiumUnit}
      </GridItem>
    </Grid>
  );
};
