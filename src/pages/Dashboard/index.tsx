import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

import { Sidebar, Navbar } from "shared/Layout";
import Panel from "shared/Panel";
import { ErrorPageStrategy } from "shared/Result";
import { Navigate } from "shared/Router";

import { useAuthStore } from "modules/auth/application";

const Dashboard: React.FC = () => {
  const bg = useColorModeValue("gray.50", "gray.100");
  const isAuthenticated = useAuthStore((store) => store.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />;
  }

  return (
    <>
      <Flex direction="row">
        <Box hideBelow="sm" width={250} height="100vh">
          <Sidebar />
        </Box>
        <Flex
          flex="1"
          direction="column"
          borderLeft="4px solid rgb(88 166 233)"
          bg="gray.100"
        >
          <Box hideBelow="sm">
            <Navbar w="calc(100% - 250px)" />
          </Box>
          <Box p={5} mt={12}>
            <Flex
              direction={{
                base: "column",
                md: "row",
              }}
              my={3}
              gap={6}
            >
              <Box w="full">
                <Box bg={bg} my={2} borderRadius="lg">
                  <Panel h={100} header="">
                    {/* coming soon */}
                  </Panel>
                </Box>
              </Box>
              <Box w="full">
                <Box bg={bg} my={2} borderRadius="lg">
                  <Panel h={100} header="">
                    {/* coming soon */}
                  </Panel>
                </Box>
              </Box>
            </Flex>
            <Flex
              direction={{
                base: "column",
                md: "row",
              }}
              gap={6}
              my={3}
            >
              <Box w="full">
                <Box bg={bg} my={2} borderRadius="lg">
                  <Panel h={350} header="">
                    {/* coming soon */}
                  </Panel>
                </Box>
              </Box>
              <Box w="full">
                <Box bg={bg} my={2} borderRadius="lg">
                  <Panel h={350} header="">
                    {/* coming soon */}
                  </Panel>
                </Box>
              </Box>
              <Box w="full">
                <Box bg={bg} my={2} borderRadius="lg">
                  <Panel h={350} header="">
                    {/* coming soon */}
                  </Panel>
                </Box>
              </Box>
            </Flex>
            <Flex
              direction={{
                base: "column",
                md: "row",
              }}
              gap={6}
              my={3}
            >
              <Box w="full">
                <Box bg={bg} my={2} borderRadius="lg">
                  <Panel h={200} header="">
                    {/* coming soon */}
                  </Panel>
                </Box>
              </Box>
              <Box w="full">
                <Box bg={bg} my={2} borderRadius="lg">
                  <Panel h={200} header="">
                    {/* coming soon */}
                  </Panel>
                </Box>
              </Box>
              <Box w="full">
                <Box bg={bg} my={2} borderRadius="lg">
                  <Panel h={200} header="">
                    {/* coming soon */}
                  </Panel>
                </Box>
              </Box>
            </Flex>
            <Flex
              direction={{
                base: "column",
                md: "row",
              }}
              gap={6}
              my={3}
            >
              <Box w="full">
                <Box bg={bg} my={2} borderRadius="lg">
                  <Panel h={200} header="">
                    {/* coming soon */}
                  </Panel>
                </Box>
              </Box>

              <Box w="full">
                <Box bg={bg} my={2} borderRadius="lg">
                  <Panel h={200} header="">
                    {/* coming soon */}
                  </Panel>
                </Box>
              </Box>

              <Box w="full">
                <Box bg={bg} my={2} borderRadius="lg">
                  <Panel h={200} header="">
                    {/* coming soon */}
                  </Panel>
                </Box>
              </Box>

              <Box w="full">
                <Box bg={bg} my={2} borderRadius="lg">
                  <Panel h={200} header="">
                    {/* coming soon */}
                  </Panel>
                </Box>
              </Box>

              <Box w="full">
                <Box bg={bg} my={2} borderRadius="lg">
                  <Panel h={200} header="">
                    {/* coming soon */}
                  </Panel>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export const Component = Dashboard;

export const ErrorBoundary = ErrorPageStrategy;
