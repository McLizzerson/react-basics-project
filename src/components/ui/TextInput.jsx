import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn }) => {
  return (
    <Input
      textAlign="center"
      placeholder="🔎 Recipe name or health label"
      variant="unstyled"
      bg="#F9FAF2"
      width="50%"
      minWidth="250px"
      padding={2}
      onChange={changeFn}
    ></Input>
  );
};
