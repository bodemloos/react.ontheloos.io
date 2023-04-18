import { WarningTwoIcon } from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/react";

const WarningIcon = () => {
  const color = useColorModeValue("green.400", "green.300");

  return <WarningTwoIcon boxSize={16} color={color} />;
};

export { WarningIcon };
