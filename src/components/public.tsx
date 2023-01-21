import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Image,
  Icon,
  IconButton,
  ChakraProvider,
  createIcon,
  IconProps,
  useColorModeValue,
} from "@chakra-ui/react";
export default function Public() {
  return <ChakraProvider>
    <Card align="center">
      <CardHeader>
        <Heading size="md"> File 1 Insights</Heading>
      </CardHeader>
      <CardBody>
        <Text>Insights come here</Text>
      </CardBody>
      <CardFooter>
        <Button colorScheme="blue">View here</Button>
      </CardFooter>
    </Card>
  </ChakraProvider>;
}
export {}
