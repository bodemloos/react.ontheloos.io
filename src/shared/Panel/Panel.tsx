import { ReactNode } from "react";

import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

type TPanelProps = {
  header?: ReactNode;
  children: ReactNode;
  h?: number;
};

const Panel: React.FC<TPanelProps> = (props) => {
  const { header, children, h } = props;
  const bgColor = useColorModeValue("gray.50", "brand.lightblue");
  return (
    <Flex p={4} h={h} bg={bgColor} borderRadius="xl" direction="column">
      {header && <Box p={2}>{header}</Box>}
      <Box>{children}</Box>
    </Flex>
  );
};

export default Panel;
