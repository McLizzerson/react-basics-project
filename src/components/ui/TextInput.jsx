import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => {
  return (
    <Input
      textAlign="center"
      placeHolder="Recipe name or health label"
      variant="filled"
      width="90vw"
      onChange={changeFn}
      {...props}
    ></Input>
  );
};
