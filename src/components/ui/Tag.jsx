import { Tag } from "@chakra-ui/react";

export const LabelTag = ({ text }) => {
  return (
    <Tag size="sm" variant="solid" colorScheme="teal">
      {text}
    </Tag>
  );
};
