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
    StatsCard,
    chakra
  } from "@chakra-ui/react";
import { FiServer } from "react-icons/fi";
import { Link } from "react-router-dom";

    export default function Pubview() {
        return(
            <ChakraProvider theme={theme}>
<Box maxW="7xl" mx={"auto"} pt={6} px={{ base: 2, sm: 12, md: 17 }}>
<chakra.h1
  textAlign={"center"}
  fontSize={"4xl"}
  py={12}
  fontWeight={"bold"}
>
  File List
</chakra.h1>

<SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
  {present &&
    folders.map((files:any, index) => {
     return <Link href={`http://localhost:3000/file/${files.id}`} isExternal>
        <StatsCard
          title={files.document_name}
          stat={""}
          icon={<FiServer size={"1em"} />}
        />
      </Link>
    })}
</SimpleGrid>
</Box>
</ChakraProvider>
        );
}