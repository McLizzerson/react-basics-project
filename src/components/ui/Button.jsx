import { Button } from "@chakra-ui/react";

export const ReturnButton = ({ text, clickFn }) => {
  return <Button clickFn={clickFn}>{text}</Button>;
};
