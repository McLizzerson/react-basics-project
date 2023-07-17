import { Tag } from "@chakra-ui/react";

export const LabelTag = ({ text, typeOfTag }) => {
  let tagColor;

  console.log(text);

  switch (typeOfTag) {
    case "mealType":
    case "dishType":
      tagColor = "#FFD6A5";
      break;
    case "cautions":
      tagColor = "#FF9B9B";
      break;
    case "veganVeg":
      tagColor = "#CBFFA9";
      break;
    case "healthLabels":
      tagColor = "E1AEFF";
  }

  console.log(tagColor);

  return (
    <Tag size="sm" variant="solid" color="white" bg={tagColor}>
      {text}
    </Tag>
  );
};
