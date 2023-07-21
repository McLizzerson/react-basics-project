import { Grid, GridItem } from "@chakra-ui/react";

export const NutrientTable = ({ list }) => {
  const arrayList = Object.entries(list);

  const nutrientList = arrayList.filter((nutrient) => {
    switch (nutrient[0]) {
      case "ENERC_KCAL":
      case "FAT":
      case "CHOCDF":
      case "PROCNT":
      case "CHOLE":
      case "NA":
        return nutrient;
    }
  });

  return (
    <Grid templateColumns="repeat(2, 1fr)" align="left" columnGap={8}>
      {nutrientList.map((nutrient) => {
        const name = nutrient[1].label;
        const quantity = nutrient[1].quantity.toFixed(2);
        const unit = nutrient[1].unit;
        return (
          <>
            <GridItem key={name}>{name}: </GridItem>
            <GridItem>
              {quantity} {unit}
            </GridItem>
          </>
        );
      })}
    </Grid>
  );
};
