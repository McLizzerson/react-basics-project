import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => {
  return (
    <Input
      textAlign="center"
      placeholder="Recipe name or health label"
      variant="unstyled"
      bg="white"
      width="100%"
      padding={2}
      onChange={changeFn}
      {...props}
    ></Input>
  );
};
