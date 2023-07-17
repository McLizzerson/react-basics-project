import { Tag } from "@chakra-ui/react";

export const LabelTag = ({ text, typeOfTag }) => {
  let tagColor;

  console.log(text);

  switch (typeOfTag) {
    case "mealType":
    case "dishType":
      tagColor = "#FEBE8C";
      break;
    case "cautions":
      tagColor = "#FF9B9B";
      break;
    case "veganVeg":
      tagColor = "#AACB73";
      break;
    case "dietLabel":
      tagColor = "#E1AEFF";
  }

  console.log(tagColor);

  return (
    <Tag size="md" variant="solid" color="white" bg={tagColor}>
      {text}
    </Tag>
  );
};
