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
  Grid,
  GridItem,
  IconButton,
  ChakraProvider,
  createIcon,
  SimpleGrid,
  IconProps,
  useColorModeValue,
  VStack,
  StackDivider,
  theme,
} from "@chakra-ui/react";
export default function Public() {
  return (
    <ChakraProvider theme={theme}>
      {/* {redirect && <Redirect to="/" />} */}
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src="http://localhost:8000/media/uploads/Laboratory-Blood-Test-Results.png"
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                textAlign={'center'}
              >
                File Name
              </Heading>
              <br></br><br></br>
              <Text fontSize={'lg'}>
                  <Text as={'span'} fontWeight={'bold'}>
                    General Rules:
                  </Text>{' '}
                  Interpreation 
                </Text>
              <Text
                // color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}
              >
                {/* <Text as={'span'} fontWeight={'bold'}>Prize Money:</Text> */}
                hi 
              </Text>
            </Box>
          </Stack>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                {/* <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
                </Text> */}
                
              </VStack>
          </Stack>
        </SimpleGrid>
      </Container>
    </ChakraProvider>
  );
}
export {}
